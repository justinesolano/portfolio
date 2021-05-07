import React from 'react'
import about from '../assets/about.png'
import contactme from '../assets/contactme.png'
import experience from '../assets/experience.png'
import projects from '../assets/projects.png'
import skills from '../assets/skills.png'



const Nav = () => {
  return (
    <nav className="navbar">
      <p><img src={about} alt="about" className="nav-item"></img></p>
      <p><img src={skills} alt="skills" className="nav-item"></img></p>
      <p><img src={experience} alt="experience" className="nav-item"></img></p>
      <p><img src={projects} alt="project" className="nav-item"></img></p>
      <p><img src={contactme} alt="contactme" className="nav-item"></img></p>
    </nav>
  )
}

export default Nav
