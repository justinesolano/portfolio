import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'



// import disableScroll from 'disable-scroll'

import about from '../assets/about.png'
import contactme from '../assets/contactme.png'
import experience from '../assets/experience.png'
import projects from '../assets/projects.png'


const Home = () => {

  // const fieldRef = React.useRef<HTMLInputElement>(null)


  return (
    <>
      <nav className="navbars">
        <ScrollIntoView selector=".hr">
          <img src={about} alt="about-me" className="nav-item"></img>
        </ScrollIntoView>
        <ScrollIntoView selector=".hr-two">
          <img src={experience} alt="experience" className="nav-item"></img>
        </ScrollIntoView>
        <ScrollIntoView selector=".hr-three">
          <img src={projects} alt="project" className="nav-item"></img>
        </ScrollIntoView>
        <img src={contactme} alt="contactme" className="nav-item"></img>
      </nav>
      <div className="home">
        <Header className="header"/>
        <br />
        <div className="hr-div">
          <hr className="hr"/>
        </div>
        <br />
        <br />
        <div className="about">
          <About />
        </div>
        <div className="hr-div-two">
          <hr className="hr-two"/>
        </div>
        <br />
        <div className="experience">
          <Experience />
        </div>
        <div className="hr-div-three">
          <hr className="hr-three"/>
        </div>
        <br />
        <div className="experience">
          <Projects />
        </div>
      </div>
    </>


  )
}

export default Home
