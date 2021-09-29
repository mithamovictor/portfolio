import React from 'react'

export default function TechCard(props) {
  return (
    <div className="tech_card">
      <span className="icon">
        <img src={props.src} alt={props.alt} width="100%" height="auto" />
      </span>
      <div className="tech_title">
        <h4>{props.title}</h4>
      </div>
    </div>
  )
} 