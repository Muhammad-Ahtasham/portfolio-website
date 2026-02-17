import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:ahtashamahsan988@gmail.com',
      icon: 'fas fa-envelope'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/+923076917988',
      icon: 'fab fa-whatsapp'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/atiii_sham',
      icon: 'fab fa-instagram'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/AtiSham123/',
      icon: 'fab fa-facebook'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammadahtasham',
      icon: 'fab fa-linkedin-in'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@ahtashamahsan988',
      icon: 'fab fa-medium-m'
    }
  ];

  return (
    <div className="social-media-section">
      <div className="container">
        <div className="social-media-header">
          <h3>Connect With Me</h3>
          <p>Follow me on social media for updates and more content</p>
        </div>
        <div className="social-media-icons">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={`Visit ${social.name}`}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;