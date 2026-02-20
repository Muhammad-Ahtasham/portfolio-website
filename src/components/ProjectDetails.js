import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../data/projects.json";
import "./ProjectDetails.css";
import SocialMedia from "./SocialMedia";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getYouTubeEmbedUrl(url) {
  if (url.includes("youtube.com")) {
    return url.replace("watch?v=", "embed/");
  } else if (url.includes("youtu.be")) {
    return `https://www.youtube.com/embed/${url.split("/").pop()}`;
  }
  return url;
}

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const projectIndex = projectsData.findIndex((p) => slugify(p.title) === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    return (
      <div className="project-details-page">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Project Not Found</h1>
            <p className="section-subtitle">
              The project you're looking for doesn't exist
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <button className="back-btn" onClick={() => navigate("/")}>
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  const goToProject = (index) => {
    if (index >= 0 && index < projectsData.length) {
      navigate(`/project/${slugify(projectsData[index].title)}`);
    }
  };

  return (
    <>
    <div className="project-details-page">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Project Details</h1>
          <p className="section-subtitle">Explore this project in detail</p>
        </div>

        <div className="project-details-content">
          <div className="project-details-main">
            <div className="project-details-title-row">
              <h2 className="project-details-title">{project.title}</h2>
              <button className="back-btn" onClick={() => navigate("/")}>
                Back to Projects
              </button>
            </div>

            <div className="project-details-desc-img-flex">
              <div className="project-details-desc-left">
                <p className="project-details-desc">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="project-details-tech">
                    <h4>Technologies Used:</h4>
                    <div className="project-tech-list">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="project-details-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                    >
                      GitHub Repository
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project-btn"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="project-details-desc-right">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-details-image"
                />
              </div>
            </div>

            {project.video && project.video.trim() && (
              <div className="project-details-video-wrapper">
                {project.video.includes("youtube.com") ||
                project.video.includes("youtu.be") ? (
                  <iframe
                    className="project-details-video"
                    src={getYouTubeEmbedUrl(project.video)}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video controls className="project-details-video">
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="project-nav-arrows">
          <button
            className="nav-btn prev-btn"
            onClick={() => goToProject(projectIndex - 1)}
            disabled={projectIndex === 0}
          >
            ← Previous Project
          </button>
          <button
            className="nav-btn next-btn"
            onClick={() => goToProject(projectIndex + 1)}
            disabled={projectIndex === projectsData.length - 1}
          >
            Next Project →
          </button>
        </div>
      </div>
      
    </div>
    <SocialMedia />
    </>
  );
};

export default ProjectDetails;
