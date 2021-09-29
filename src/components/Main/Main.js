import React, { Component } from 'react'
import Banner from './sections/Banner'
import About from './sections/About'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

class Main extends Component {
  render() {
    return (
      <main className="homepage">
        <Banner />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    )
  }
}

export default Main