function Projects() {
  const projects = [
    {
      title: 'POS System',
      description: 'Full-featured point of sale system with inventory management, sales tracking, and real-time analytics dashboard.',
      // use the user-provided POS photo
      image: 'https://bimpos.com/sites/default/files/images/posts/whatsapp_image_2023-07-06_at_3.17.29_pm.jpeg',
      tech: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://pos-3a5wd9463-robat-1s-projects.vercel.app/login',
      githubUrl: '#'
    },
    {
      title: 'POS Restaurant Website',
      description: 'Modern restaurant website with online ordering system, menu management, table reservations, and integrated point of sale.',
      image: 'https://cdn.prod.website-files.com/60870ff4852ead369670e13e/667f27e8b67024e1f6e26d5c_restaurant%20pos%20system.webp',
      tech: ['React', 'Node.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Modern Business Website',
      description: 'Fully responsive corporate website with animated hero sections, dynamic contact forms, and optimized performance.',
      image: 'https://images-platform.99static.com//mxco4bPXgMdUjyw0hbTPnDZR5OY=/0x0:2220x2220/fit-in/500x500/projects-files/122/12269/1226901/a1900302-fbbf-448b-969f-759eb7698f23.png',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: 'https://business-website-template-main-enb4gdpzj-robat-1s-projects.vercel.app/',
      githubUrl: '#'
    },
    {
      title: 'Restaurant Landing Page',
      description: 'Eye-catching single-page website with smooth scrolling, image galleries, and online reservation integration.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZOprbaNy7vwLt_va0GTOC7F6h_jV7ONZsA&s',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://eatwell-restaurant.vercel.app/',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Storefront',
      description: 'Responsive online store with product catalogs, shopping cart functionality, and checkout pages.',
      tech: ['React', 'Bootstrap', 'Stripe']
    },
    {
      title: 'Real Estate Website',
      description: 'Property listing website with search filters, interactive maps, and detailed property pages.',
      tech: ['React', 'Leaflet', 'CSS3']
    },
    {
      title: 'Fitness Studio Site',
      description: 'Vibrant website for a fitness studio with class schedules, trainer profiles, and membership signup.',
      image: 'https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68c490cf1202aaaa3643f2f0_65c183700d8fbc2492a6c314_6531361ccf5757c2e991e9fb_6pWiS1br6sImopelr9oFycse8XLyhAhsekWbiO9joSDCA1C1A8WdoqGUwSQ27hdFGHSQLYcPNW6LbG0Mj-y0shVQpObaToGnAWatUFwUItJYcEGgpcPj4A-RMiEubBUsOMT5qMlTw5n2wnsvvbA9pHo.png',
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
