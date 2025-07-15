import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Python & TensorFlow', icon: '🐍' },
    { name: 'Machine Learning & Neural Networks', icon: '🧠' },
    { name: 'Computer Vision & LLMs', icon: '👁️' },
    { name: 'Data Analysis', icon: '📊' },
    { name: 'Problem Solving', icon: '💡' }, 
    { name: 'Web Development', icon: '🌐'},
    { name: 'AI Integration', icon: '🤖'},
    { name: 'Chatbot Development', icon: '🤯'},
  ];

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>I am a recent graduate from the Ghulam Ishaq Khan Institute of Engineering and Technology (GIKI) with a strong passion for artificial intelligence and machine learning. During my academic journey, I have honed my skills in AI, data science, and programming, equipping me with a solid foundation to contribute effectively in the tech industry.</p>
        
        <h3>Professional Experience</h3>
        <p>Last summer, I had the opportunity to intern at Musketeers Tech in Lahore, where I worked on cutting-edge AI projects. This hands-on experience allowed me to apply theoretical knowledge to real-world problems, enhancing my understanding of machine learning algorithms, data analysis, and AI development.</p>
        
        <h3>Key Skills and Strengths</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;