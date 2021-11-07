import React from 'react'
import ProjectCard from './partials/ProjectCard'

const Projects  = () => {
  const handleClick = (e) => {
    e.preventDefault()
    return void(0)
  }

  return (
    <section className="projects_section" id="portfolio">
      <h2 className="section_heading">Past <span className="yellow">Projects</span></h2>
      <div className="projects_container">
        <ProjectCard src="img/sites/portfolio.png" alt="Karungaru Mithamo portfolio website" title="Karungaru Mithamo's Portfolio" url="//mithamovictor.github.io" />
        <ProjectCard src="img/sites/dgmc.png" alt="Clinic Management System" title="DGMC Client Management System" onClick={handleClick} />
        <ProjectCard src="img/sites/stb_games.png" alt="Spot the ball games website" title="Spot The Ball - Games Website" url="//games.spottheball.co.ke" />
        <ProjectCard src="img/sites/stb_premium.png" alt="Spot the ball premium gaming website" title="Spot The Ball - Premium Website" url="//premium.spottheball.co.ke" />
        <ProjectCard src="img/sites/ap.png" alt="Academic Prowess website" title="Academic Prowess" url="//academicprowess.com" />
        <ProjectCard src="img/sites/writers_dashboard.png" alt="Academic Prowess Client Management Dashboard" title="Academic Prowess - Dashboard" url="//academicprowess.com" />
        <ProjectCard src="img/sites/bat.png" alt="Best academic tutors website" title="Best Academic Tutors" url="//bestacademictutors.com" />
        <ProjectCard src="img/sites/calculator.png" alt="javascript calculator" title="Javacript Calculator - Codepen" url="https://codepen.io/karungarum/pen/mjWzBX" />
        <ProjectCard src="img/sites/clock.png" alt="clock" title="Digital Clock" url="//codepen.io/karungarum/pen/jQPXGY" />
        <ProjectCard src="img/sites/kqg.png" alt="Kenya quilt guild website" title="Kenya Quilt Guild" url="//kenyaquiltguild.org" />
        <ProjectCard src="img/sites/ss_school.png" alt="Sri sathya sai school kisaju website" title="Sathya Sai School - Kisaju" url="//sathyasaischoolkisaju.org" />
        <ProjectCard src="img/sites/ssc.png" alt="Sri Sathya sai center kenya website" title="Sri Sathya Sai Center - Kenya" url="//sathyasaicentrekenya.org" />
      </div>
    </section>
  )
}

export default Projects