import React, { useState } from "react";
import "./Contact.css";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real application, you would send this to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Contact Me</h1>
          <p className="section-subtitle">Let's Work Together</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>ahtashamahsan988@gmail.com</p>
              <span className="info-subtitle">
                I'll respond within 24 hours
              </span>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>+92 307 6917988</p>
              <span className="info-subtitle">Available for calls</span>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Lahore, Pakistan</p>
              <span className="info-subtitle">PST (UTC+5:00)</span>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            <p className="form-subtitle">
              Have a project in mind? Let's discuss how we can work together.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
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
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully. I'll get
                  back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="error-message">
                  Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>
            Whether you need AI solutions, web development, or just want to say
            hello, I'm here to help bring your ideas to life.
          </p>
          <div className="cta-buttons">
            <a href="mailto:ahtasham1234567890@gmail.com" className="email-btn">
              Send Email
            </a>
            <a
              href="https://github.com/Muhammad-Ahtasham/"
              target="_blank"
              rel="noopener noreferrer"
              className="github-contact-btn"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Contact;
