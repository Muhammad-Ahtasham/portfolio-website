import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:ahtashamahsan988@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
        <a href="https://wa.me/+923076917988" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/atiii_sham" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/AtiSham123/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/muhammadahtasham" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://medium.com/@ahtashamahsan988" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium-m"></i></a>
      </div>
    </section>
  );
};

export default Contact;