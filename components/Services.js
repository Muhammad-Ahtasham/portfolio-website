'use client'

import './Services.css'

const Services = () => {
  const services = [
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Web Development',
    'Large Language Models (LLMs)',
    'LangChain'
  ]

  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

