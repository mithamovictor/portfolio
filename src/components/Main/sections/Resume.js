import React from 'react'

const Resume = () => {
  return (
    <section className="resume_section" id="resume">
      <h2 className="section_heading">My <span className="yellow">Resume</span></h2>
      <div className="resume">
        <p>You can view my resume here.</p>
        <img className="arrow_down" src="img/arrow.png" alt="arrow down" width="100%" height="auto" />
        <a className="resume_btn" href="resume/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download<i className="fas fa-download"></i>
        </a>
      </div>
    </section>
  )
}

export default Resume