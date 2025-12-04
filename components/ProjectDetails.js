'use client'

import { useParams, useRouter } from 'next/navigation'
import projectsData from '@/src/data/projects.json'
import './Projects.css'
import Image from 'next/image'

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function getYouTubeEmbedUrl(url) {
  if (url.includes('youtube.com')) {
    return url.replace('watch?v=', 'embed/')
  } else if (url.includes('youtu.be')) {
    return `https://www.youtube.com/embed/${url.split('/').pop()}`
  }
  return url
}

const ProjectDetails = () => {
  const { slug } = useParams()
  const router = useRouter()
  const projectIndex = projectsData.findIndex(p => slugify(p.title) === slug)
  const project = projectsData[projectIndex]

  if (!project) {
    return <div style={{ color: 'white', padding: '2rem' }}>Project not found.</div>
  }

  const goToProject = (index) => {
    if (index >= 0 && index < projectsData.length) {
      router.push(`/project/${slugify(projectsData[index].title)}`)
    }
  }

  return (
    <div className="project-details-page-stack">
      <div className="project-details-title-row">
        <h2 className="project-details-title">{project.title}</h2>
        <button className="back-btn" onClick={() => router.push('/')}>Back</button>
      </div>
      <div className="project-details-desc-img-flex">
        <div className="project-details-desc-left">
          <p className="project-details-desc">{project.description}</p>
          <div className="project-links project-details-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
          </div>
        </div>
        <div className="project-details-desc-right">
          {project.image.startsWith('http') || project.image.startsWith('//') ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-details-image"
              style={{ width: '100%', maxWidth: '400px', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
            />
          ) : (
            <Image 
              src={project.image} 
              alt={project.title} 
              className="project-details-image"
              width={400}
              height={400}
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
      </div>
      {project.video && project.video.trim() && (
        <div className="project-details-video-wrapper">
          {(project.video.includes('youtube.com') || project.video.includes('youtu.be')) ? (
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
      <div className="project-nav-arrows project-details-arrows">
        <span className="arrow left-arrow" onClick={() => goToProject(projectIndex - 1)}>&#8592;</span>
        <span className="arrow right-arrow" onClick={() => goToProject(projectIndex + 1)}>&#8594;</span>
      </div>
    </div>
  )
}

export default ProjectDetails

