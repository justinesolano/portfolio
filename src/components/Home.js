import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import geometry from '../assets/geometry.png'

// import about from '../assets/about.png'
// import contactme from '../assets/contactme.png'
// import experience from '../assets/experience.png'
// import projects from '../assets/projects.png'


const Home = () => {

  return (
    <>
      <nav className="navbars">
        <ScrollIntoView selector=".hr">
          <p className="nav-item">about</p>
          {/* <img src={about} alt="about-me" className="nav-item"></img> */}
        </ScrollIntoView>
        <ScrollIntoView selector=".hr-two">
          <p className="nav-item">experience</p>
          {/* <img src={experience} alt="experience" className="nav-item"></img> */}
        </ScrollIntoView>
        <ScrollIntoView selector=".top">
          <img src={geometry} alt="home" className="geometry nav-item"></img>
        </ScrollIntoView>
        <ScrollIntoView selector=".hr-three">
          <p className="nav-item">projects</p>
          {/* <img src={projects} alt="project" className="nav-item"></img> */}
        </ScrollIntoView>
        <p className="nav-item">contact me</p>
        {/* <img src={contactme} alt="contactme" className="nav-item"></img> */}
      </nav>
      <div className="top"></div>
      <div className="home">
        <Header className="header"/>
        <br />
        <div className="hr-div">
          <hr className="hr"/>
        </div>
        <br />
        <br />
        <br />
        <div className="about">
          <About />
        </div>
        <div className="hr-div-two">
          <hr className="hr-two"/>
        </div>
        <br />
        <br />
        <br />
        <div className="experience">
          <Experience />
        </div>
        <div className="hr-div-three">
          <hr className="hr-three"/>
        </div>
        <br />
        <br />
        <br />
        <div className="projects">
          <Projects />
        </div>
        <div className="hr-div-four">
          <hr className="hr-four"/>
        </div>
        <br />
        <br />
        <br />
        <div className="contact">
          <Contact />
        </div>
        <br />
        <br />
        <br />
      </div>
    </>


  )
}

export default Home
