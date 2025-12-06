function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com' },
    { icon: 'fas fa-envelope', url: 'mailto:contact@rolandalam.com' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Roland Alam. All rights reserved.</p>
          </div>
          <div className="footer-links">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
