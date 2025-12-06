function Projects() {
  const projects = [
    {
      title: 'POS System',
      description: 'Full-featured point of sale system with inventory management, sales tracking, and real-time analytics dashboard.',
      tech: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://pos-3a5wd9463-robat-1s-projects.vercel.app/login',
      githubUrl: '#'
    },
    {
      title: 'POS Restaurant Website',
      description: 'Modern restaurant website with online ordering system, menu management, table reservations, and integrated point of sale.',
      tech: ['React', 'Node.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Modern Business Website',
      description: 'Fully responsive corporate website with animated hero sections, dynamic contact forms, and optimized performance.',
      tech: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Restaurant Landing Page',
      description: 'Eye-catching single-page website with smooth scrolling, image galleries, and online reservation integration.',
      tech: ['React', 'Tailwind', 'Framer Motion']
    },
    {
      title: 'E-Commerce Storefront',
      description: 'Responsive online store with product catalogs, shopping cart functionality, and checkout pages.',
      tech: ['React', 'Bootstrap', 'Stripe']
    },
    {
      title: 'Portfolio Website',
      description: 'Clean and minimal portfolio site for a creative professional with project showcase and contact features.',
      tech: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Real Estate Website',
      description: 'Property listing website with search filters, interactive maps, and detailed property pages.',
      tech: ['React', 'Leaflet', 'CSS3']
    },
    {
      title: 'Fitness Studio Site',
      description: 'Vibrant website for a fitness studio with class schedules, trainer profiles, and membership signup.',
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
