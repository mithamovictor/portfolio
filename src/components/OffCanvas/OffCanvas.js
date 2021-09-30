import React, { Component } from 'react'
import { Link } from 'react-scroll'

class OffCanvas extends Component {
  constructor(props) {
    super(props)
    this.closeNav = this.closeNav.bind(this)
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <nav>
          <div className="close_btn">
            <span className="close_btn" onClick={this.closeNav}>&times;</span>
          </div>
          <ul className="menu">
            <li><Link to="home" spy={true} smooth={true} offset={-70} onSetActive={this.closeNav}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-70} onSetActive={this.closeNav}>About</Link></li>
            <li><Link to="portfolio" spy={true} smooth={true} offset={-70} onSetActive={this.closeNav}>Portfolio</Link></li>
            <li><Link to="resume" spy={true} smooth={true} offset={-70} onSetActive={this.closeNav}>Resume</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-70} onSetActive={this.closeNav}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default OffCanvas