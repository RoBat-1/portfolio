function About() {
  const stats = [
    { number: '3+', label: 'Years Building Websites' },
    { number: '40+', label: 'Websites Delivered' },
    { number: '25+', label: 'Satisfied Clients' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              I'm a passionate web developer specializing in creating stunning, 
              high-performance websites and web applications.
            </p>
            <p>
              With expertise in modern web technologies, I craft responsive and intuitive 
              digital experiences that combine beautiful design with clean, efficient code. 
              From landing pages to complex web applications, I bring ideas to life on the web.
            </p>
            <p>
              I'm committed to writing semantic HTML, pixel-perfect CSS, and interactive 
              JavaScript that delivers exceptional user experiences across all devices and browsers.
            </p>
          </div>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
