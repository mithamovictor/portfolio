import React from 'react'
import TechCard from './partials/TechCard'

const About = () => {
  return (
    <section className="about_section" id="about">
      <h2 className="section_heading">About <span className="yellow">Me</span></h2>
      <div className="about_me">
        <p>I am a self taught programmer who enjoys programming for the web. I have gained experience and knowlege in various technologies that are in use in the modern world to develop web based solutions for both individuals and institutions.</p>
      </div>
      <h3>My <span className="yellow">Journey</span></h3>
      <div className="journey">
        <img src="img/journey.png" alt="journey infographic" width="100%" height="auto" />
      </div>
      <h3>Technical <span className="yellow">Skills</span></h3>
      <div className="tech_container">
        <TechCard src="img/icons/html.png" alt="html5 icon" title="HTML" />
        <TechCard src="img/icons/css.png" alt="css icon" title="CSS" />
        <TechCard src="img/icons/js.png" alt="javascript icon" title="Javascript" />
        <TechCard src="img/icons/sass.png" alt="Sass icon" title="Scss/Sass" />
        <TechCard src="img/icons/php.png" alt="php icon" title="PHP" />
        <TechCard src="img/icons/react.png" alt="react icon" title="React Js" />
        <TechCard src="img/icons/wordpress.png" alt="wordpress icon" title="Wordpress" />
        <TechCard src="img/icons/mysql.png" alt="mysql icon" title="MySQL" />
        <TechCard src="img/icons/nodejs.png" alt="node js icon" title="Node Js" />
        <TechCard src="img/icons/foundation.png" alt="zurb foundation icon" title="Zurb Foundation" />
        <TechCard src="img/icons/tailwind.png" alt="tailwind icon" title="Tailwind" />
        <TechCard src="img/icons/bootstrap.png" alt="bootstrap icon" title="Bootstrap" />
      </div>
    </section>
  )
}

export default About