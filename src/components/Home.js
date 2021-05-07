import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import Header from './Header'
import About from './About'

// import disableScroll from 'disable-scroll'

import about from '../assets/about.png'
import contactme from '../assets/contactme.png'
import experience from '../assets/experience.png'
import projects from '../assets/projects.png'
import skills from '../assets/skills.png'


const Home = () => {

  // const fieldRef = React.useRef<HTMLInputElement>(null)


  return (
    <>
      <nav className="navbar">
        <ScrollIntoView selector=".about">
          <img src={about} alt="about" className="nav-item"></img>
        </ScrollIntoView>
        <img src={skills} alt="skills" className="nav-item"></img>
        <img src={experience} alt="experience" className="nav-item"></img>
        <img src={projects} alt="project" className="nav-item"></img>
        <img src={contactme} alt="contactme" className="nav-item"></img>
      </nav>
      <Header className="header"/>
      <hr className="hr"/>
      <div className="about">
        <About />
      </div>
    </>


  )
}

export default Home
