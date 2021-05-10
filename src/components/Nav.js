import React from 'react'
// import * as Scroll from 'react-scroll'
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import about from '../assets/about.png'
import contactme from '../assets/contactme.png'
import experience from '../assets/experience.png'
import projects from '../assets/projects.png'
import skills from '../assets/skills.png'
import geometry from '../assets/geometry.png'


const Nav = () => {
  return (
    <nav className="navbar navbar-fixed-top">
      <p><img src={about} alt="about" className="nav-item"></img></p>
      <p><img src={skills} alt="skills" className="nav-item"></img></p>
      <p><img src={experience} alt="experience" className="nav-item"></img></p>
      <img src={geometry} alt="home"></img>
      <p><img src={projects} alt="project" className="nav-item"></img></p>
      <p><img src={contactme} alt="contactme" className="nav-item"></img></p>
    </nav>
  )
}

export default Nav
