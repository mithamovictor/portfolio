import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className="project_card">
      <img src={props.src} alt={props.alt} className="project_image" width="100%" height="auto" />
      <div className="project_meta">
        <p className="text-center">{props.title}</p>
        <a href={props.url}>Visit Site<i className="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  )
}