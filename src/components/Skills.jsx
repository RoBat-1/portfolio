function Skills() {
  const skillCategories = [
    {
      icon: 'fas fa-code',
      title: 'Frontend Technologies',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      tags: ['Mobile-First', 'Flexbox', 'CSS Grid', 'Media Queries', 'Cross-Browser', 'Performance']
    },
    {
      icon: 'fas fa-tools',
      title: 'Development Tools',
      tags: ['Git', 'VS Code', 'npm', 'Vite', 'Webpack', 'Chrome DevTools']
    },
    {
      icon: 'fas fa-palette',
      title: 'UI/UX & Design',
      tags: ['Figma', 'UI Design', 'UX Principles', 'Typography', 'Color Theory', 'Accessibility']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
