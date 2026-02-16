import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const Services = () => {
  const services = [
    {
      title: "Artificial Intelligence Development",
      description:
        "Building intelligent systems that learn, adapt, and solve complex problems using cutting-edge AI technologies.",
      icon: "🤖",
      features: [
        "Machine Learning Models",
        "Deep Learning Solutions",
        "NLP Applications",
        "Computer Vision Systems",
      ],
    },
    {
      title: "Web Application Development",
      description:
        "Creating modern, responsive, and scalable web applications that deliver exceptional user experiences.",
      icon: "🌐",
      features: [
        "Frontend Development",
        "Backend Architecture",
        "Full-Stack Solutions",
        "API Development",
      ],
    },
    {
      title: "AI Consulting & Strategy",
      description:
        "Helping businesses integrate AI technologies and develop data-driven strategies for growth.",
      icon: "💡",
      features: [
        "AI Strategy Planning",
        "Technology Assessment",
        "Implementation Roadmaps",
        "Team Training",
      ],
    },
    {
      title: "Data Science & Analytics",
      description:
        "Transforming raw data into actionable insights through advanced analytics and visualization.",
      icon: "📊",
      features: [
        "Data Analysis",
        "Predictive Modeling",
        "Business Intelligence",
        "Data Visualization",
      ],
    },
    {
      title: "Chatbot & Virtual Assistant Development",
      description:
        "Creating intelligent conversational agents that enhance customer experience and automate support.",
      icon: "💬",
      features: [
        "NLP-Powered Chatbots",
        "Voice Assistants",
        "Customer Support Automation",
        "Integration Services",
      ],
    },
    {
      title: "Cloud & DevOps Solutions",
      description:
        "Implementing scalable cloud infrastructure and automated deployment pipelines.",
      icon: "☁️",
      features: [
        "Cloud Architecture",
        "Containerization",
        "CI/CD Pipelines",
        "Infrastructure as Code",
      ],
    },
  ];

  return (
    <div className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Services</h1>
          <p className="section-subtitle">
            Innovative Solutions for Modern Challenges
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="feature-dot">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <div className="service-cta">
                <button className="learn-more-btn">Learn More</button>
              </div> */}
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Ready to Transform Your Business?</h3>
          <p>
            Let's discuss how we can bring your vision to life with cutting-edge
            technology and innovative solutions.
          </p>
          <Link to="/contact" className="contact-btn">
            Get in Touch
          </Link>
          {/* <button className="contact-btn">Get in Touch</button> */}
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Services;
