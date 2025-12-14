import { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  // Close menu on resize above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((s) => !s);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navbarStyle = {
    background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.9)',
    boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.2)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="container">
        <div className="logo">
          <a href="#home">Roland Alam</a>
        </div>
        <ul id="main-navigation" className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="menu">
          <li role="none"><a href="#home" role="menuitem" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li role="none"><a href="#about" role="menuitem" className="nav-link" onClick={closeMenu}>About</a></li>
          <li role="none"><a href="#skills" role="menuitem" className="nav-link" onClick={closeMenu}>Skills</a></li>
          <li role="none"><a href="#projects" role="menuitem" className="nav-link" onClick={closeMenu}>Projects</a></li>
          <li role="none"><a href="#contact" role="menuitem" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
