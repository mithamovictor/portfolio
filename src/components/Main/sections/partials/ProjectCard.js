import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className="project_card">
      <img src={props.src} alt={props.alt} className="project_image" width="100%" height="auto" />
      <div className="project_meta">
        <p>{props.title}</p>
        <a href={props.url} target="_blank" rel="noopener noreferrer">Visit Site<i className="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  )
}