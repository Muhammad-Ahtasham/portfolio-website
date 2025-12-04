'use client'

import './About.css'

const About = () => {
  const skills = [
    { name: 'Python & TensorFlow', icon: '🐍' },
    { name: 'Machine Learning & Neural Networks', icon: '🧠' },
    { name: 'Computer Vision & LLMs', icon: '👁️' },
    { name: 'Data Analysis', icon: '📊' },
    { name: 'Problem Solving', icon: '💡' },
    { name: 'Web Development', icon: '🌐' },
    { name: 'AI Integration', icon: '🤖' },
    { name: 'Chatbot Development', icon: '🤯' },
  ]

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>Hi, I'm <strong>Muhammad Ahtasham</strong> — an Artificial Intelligence Specialist and Software Engineer with a passion for building intelligent, scalable, and impactful digital solutions. I hold a Bachelor's degree in Artificial Intelligence from the <strong>Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI)</strong>, Topi, Swabi.</p>

        <p>With a strong foundation in AI, machine learning, and software development, I thrive at the intersection of data and technology. Whether it's crafting intelligent algorithms, developing robust backend systems, or delivering clean and responsive user experiences, I focus on creating solutions that are both innovative and practical.</p>

        <p>You can learn more about my work, explore my projects, or get in touch with me through my personal website. I'm always open to exciting collaborations and new opportunities.</p>

        <h2>Key Skills and Strengths</h2>
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
  )
}

export default About

