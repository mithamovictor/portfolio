import React, { Component } from 'react'
import { Link } from 'react-scroll'

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    document.getElementById("mySidenav").style.width = "100%"
  }

  render() {
    return (
      <header>
        <a className="logo_link" href="/">
          <img className="logo" src="img/logo.png" alt="logo" width="100%" height="auto" />
        </a>
        <div className="menu_button">
          <i onClick={this.handleClick} className="fas fa-bars menu_icon"></i>
        </div>
        <nav className="main_menu">
          <ul className="menu">
            <li><Link to="home" spy={true} smooth={true} offset={-80}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-80}>About</Link></li>
            <li><Link to="portfolio" spy={true} smooth={true} offset={-80}>Portfolio</Link></li>
            <li><Link to="resume" spy={true} smooth={true} offset={-80}>Resume</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-80}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header