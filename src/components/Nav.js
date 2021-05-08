import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'

// import * as Scroll from 'react-scroll'
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import about from '../assets/about.png'
import contactme from '../assets/contactme.png'
import experience from '../assets/experience.png'
import projects from '../assets/projects.png'
import skills from '../assets/skills.png'

const Nav = () => {
  return (
    <nav className="navbar">
      <ScrollIntoView selector=".hr">
        <img src={about} alt="about-me" className="nav-item"></img>
      </ScrollIntoView>
      <img src={skills} alt="skills" className="nav-item"></img>
      <img src={experience} alt="experience" className="nav-item"></img>
      <img src={projects} alt="project" className="nav-item"></img>
      <img src={contactme} alt="contactme" className="nav-item"></img>
    </nav>
  )
}

export default Nav



// <nav className="navbar navbar-fixed-top">
//   <p><img src={about} alt="about" className="nav-item"></img></p>
//   <p><img src={skills} alt="skills" className="nav-item"></img></p>
//   <p><img src={experience} alt="experience" className="nav-item"></img></p>
//   <p><img src={projects} alt="project" className="nav-item"></img></p>
//   <p><img src={contactme} alt="contactme" className="nav-item"></img></p>
// </nav>