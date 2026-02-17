import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Projects.css";
import projectsData from "../data/projects.json";
import SocialMedia from "./SocialMedia";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/project/${slugify(project.title)}`);
  };

  const truncateDescription = (description, maxLength = 100) => {
    if (!description) return "";
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
  };

  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">
            Innovative Solutions & Creative Works
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleProjectClick(project)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="project-tech">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    <div className="project-actions">
                      <a
                        href={project.link || project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-project-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Project
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">
                  {truncateDescription(project.description)}
                </p>
                <div className="project-meta">
                  <span className="project-type">
                    {project.type || "Project"}
                  </span>
                  <span className="project-date">{project.date || "2024"}</span>
                </div>
                <div className="project-read-more">
                  <button
                    className="read-more-btn"
                    onClick={() => handleProjectClick(project)}
                  >
                    Read More
                  </button>
                </div>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="project-tech-list">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Want to See More?</h3>
          <p>
            Explore my complete portfolio and discover more innovative projects
            that showcase my expertise in AI and web development.
          </p>
          <div className="cta-buttons">
            <a
              href="https://github.com/Muhammad-Ahtasham/"
              target="_blank"
              rel="noopener noreferrer"
              className="github-portfolio-btn"
            >
              View GitHub Portfolio
            </a>
            {/* <button className="contact-me-btn">Contact Me</button> */}
            <Link to="/contact" className="contact-me-btn">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Projects;
