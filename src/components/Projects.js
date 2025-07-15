import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import './Projects.css';
import { useNavigate } from 'react-router-dom';

const PROJECTS_TO_SHOW = 3;
const MAX_DESC_LENGTH = 90;

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, PROJECTS_TO_SHOW);
  const navigate = useNavigate();

  const handleShowMore = () => setShowAll(true);
  const handleShowLess = () => setShowAll(false);

  const handleProjectClick = (project) => {
    navigate(`/project/${slugify(project.title)}`);
  };

  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>
                {project.description.length > MAX_DESC_LENGTH
                  ? project.description.slice(0, MAX_DESC_LENGTH) + '...'
                  : project.description}
              </p>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
                <button className="show-more-project-btn" onClick={() => handleProjectClick(project)}>
                  Show More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAll && projectsData.length > PROJECTS_TO_SHOW && (
        <button className="show-more-btn" onClick={handleShowMore}>
          Show More Projects
        </button>
      )}
      {showAll && projectsData.length > PROJECTS_TO_SHOW && (
        <button className="show-more-btn" onClick={handleShowLess}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default Projects;