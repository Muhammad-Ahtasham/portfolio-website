import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">Passionate AI Engineer & Developer</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm Muhammad Ahtasham, a dedicated Artificial Intelligence Engineer and Full-Stack Web Developer 
              with a passion for creating innovative solutions that bridge the gap between cutting-edge 
              technology and real-world applications. My journey in tech has been driven by curiosity, 
              problem-solving, and a commitment to continuous learning.
            </p>
            
            <h3>My Expertise</h3>
            <p>
              With hands-on experience in both AI/ML and web development, I specialize in building intelligent 
              systems and modern web applications. I thrive on transforming complex challenges into elegant, 
              user-friendly solutions that make a tangible impact.
            </p>
            
            <h3>What Drives Me</h3>
            <p>
              I'm passionate about leveraging technology to solve meaningful problems and improve people's lives. 
              Whether it's developing AI-powered applications, creating responsive web interfaces, or optimizing 
              system performance, I approach every project with creativity, attention to detail, and a focus on 
              delivering exceptional results.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <h4>2+</h4>
              <p>Years of Experience</p>
            </div>
            <div className="stat-card">
              <h4>10+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h4>10+</h4>
              <p>Technologies Mastered</p>
            </div>
            <div className="stat-card">
              <h4>100%</h4>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>Core Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Artificial Intelligence</h4>
              <ul>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Generative AI</li>
                <li>LangChain & LLMs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Web Development</h4>
              <ul>
                <li>React & React Native</li>
                <li>Next.js</li>
                <li>Node.js & Express</li>
                <li>MongoDB & PostgreSQL</li>
                <li>RESTful APIs</li>
                <li>Microservices</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Programming Languages</h4>
              <ul>
                <li>Python</li>
                <li>JavaScript/TypeScript</li>
                <li>Java</li>
                <li>C++</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>Docker & Kubernetes</li>
                <li>AWS & Cloud Services</li>
                <li>Git & GitHub</li>
                <li>CI/CD Pipelines</li>
                <li>TensorFlow & PyTorch</li>
                <li>Scikit-learn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
