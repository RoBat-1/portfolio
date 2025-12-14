function Projects() {
  const projects = [
    {
      title: 'POS System',
      description: 'Full-featured point of sale system with inventory management, sales tracking, and real-time analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://pos-3a5wd9463-robat-1s-projects.vercel.app/login',
      githubUrl: '#'
    },
    {
      title: 'POS Restaurant Website',
      description: 'Modern restaurant website with online ordering system, menu management, table reservations, and integrated point of sale.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      tech: ['React', 'Node.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Modern Business Website',
      description: 'Fully responsive corporate website with animated hero sections, dynamic contact forms, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: 'https://business-website-template-main-enb4gdpzj-robat-1s-projects.vercel.app/',
      githubUrl: '#'
    },
    {
      title: 'Restaurant Landing Page',
      description: 'Eye-catching single-page website with smooth scrolling, image galleries, and online reservation integration.',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://eatwell-restaurant.vercel.app/',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Storefront',
      description: 'Responsive online store with product catalogs, shopping cart functionality, and checkout pages.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
      tech: ['React', 'Bootstrap', 'Stripe']
    },
    {
      title: 'Real Estate Website',
      description: 'Property listing website with search filters, interactive maps, and detailed property pages.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      tech: ['React', 'Leaflet', 'CSS3']
    },
    {
      title: 'Fitness Studio Site',
      description: 'Vibrant website for a fitness studio with class schedules, trainer profiles, and membership signup.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      tech: ['HTML5', 'SCSS', 'JavaScript']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`} 
                    className="project-thumb"
                    loading="eager"
                    fetchpriority="high"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      console.log(`Failed to load image: ${project.image}`);
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <></>
                )}
                <div className="project-overlay">
                  <a 
                    href={project.liveUrl || '#'} 
                    className="project-link"
                    target={project.liveUrl ? '_blank' : '_self'}
                    rel={project.liveUrl ? 'noopener noreferrer' : ''}
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a 
                    href={project.githubUrl || '#'} 
                    className="project-link"
                    target={project.githubUrl && project.githubUrl !== '#' ? '_blank' : '_self'}
                    rel={project.githubUrl && project.githubUrl !== '#' ? 'noopener noreferrer' : ''}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
