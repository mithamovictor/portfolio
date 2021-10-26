import React from 'react'

const Banner = () => {
  return (
    <section className="banner_section" id="home">
      <div className="banner_text">
        <h1>Fullstack <span className="yellow">Developer</span></h1>
        <div className="home_text">
          <p>Designer <span className="yellow">|</span> Developer <span className="yellow">|</span> Programmer</p>
        </div>
        <div className="social">
          <a href="https://twitter.com/Karungaru_M" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://codepen.io/karungarum" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-codepen fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/karungaru-mithamo-030646b1/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/mithamovictor" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="banner_container">
        <img className="banner_mobile" src="img/bg-mobile.jpg" alt="banner" width="100%" height="auto" />
        <img className="banner_desktop" src="img/bg.jpg" alt="banner" width="100%" height="auto" />
      </div>
    </section>
  )
}

export default Banner