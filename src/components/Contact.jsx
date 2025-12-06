import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create Gmail compose link with form data
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=rolandalalam@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Open Gmail in new tab
    window.open(gmailLink, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'rolandalalam@gmail.com',
      link: 'mailto:rolandalalam@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+961 71 873 635',
      link: 'tel:+96171873635'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Barhalioun - Becharre, Lebanon',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's work together to create something amazing.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <div>
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a href={info.link}>{info.content}</a>
                  ) : (
                    <p>{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
