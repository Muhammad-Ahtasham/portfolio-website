import React from "react";
import careerHistoryData from "../data/careerHistory.json";
import "./CareerHistory.css";
import SocialMedia from "./SocialMedia";

const CareerHistory = () => {
  return (
    <div className="career-history">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Career History</h1>
          <p className="section-subtitle">Professional Journey & Experience</p>
        </div>

        <div className="timeline">
          {careerHistoryData.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="company">{job.company}</span>
                    <span className="location">📍 {job.location}</span>
                    <span className="period">📅 {job.period}</span>
                  </div>
                </div>

                <div className="job-description">
                  <p>{job.description}</p>
                </div>

                <div className="technologies">
                  <h4>Technologies & Skills:</h4>
                  <div className="tech-tags">
                    {job.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default CareerHistory;
