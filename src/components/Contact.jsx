import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // EmailJS configuration
      const serviceID = 'service_portfolio'; // You'll get this from EmailJS
      const templateID = 'template_contact'; // You'll get this from EmailJS
      const publicKey = 'YOUR_PUBLIC_KEY'; // You'll get this from EmailJS

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'rolandalalam@gmail.com'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      alert('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again or email directly at rolandalalam@gmail.com');
    }
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
