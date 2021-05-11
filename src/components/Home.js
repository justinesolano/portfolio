import React, { useState, useEffect } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import Header from './Header'
import About from './About'
import Experience from './Experience'
// import Nav from './Nav'
// import { slide as Menu } from 'react-burger-menu'
import Projects from './Projects'
import Contact from './Contact'
import geometry from '../assets/geometry.png'
import { slide as Menu } from 'react-burger-menu'
// import { layoutGenerator } from 'react-break'
// import { get } from 'react-scroll/modules/mixins/scroller'

// import about from '../assets/about.png'
// import contactme from '../assets/contactme.png'
// import experience from '../assets/experience.png'
// import projects from '../assets/projects.png'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

const Home = () => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())


  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  console.log('WINDOW DIMENSION', windowDimensions)


  const showSettings = (event) => {
    event.preventDefault()
  }

  

  return (
    <>
      { windowDimensions. width > 800 ?
        <nav>
          <div className="navbars">
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
            <ScrollIntoView selector=".contact">
              <p className="nav-item">contact me</p>
            </ScrollIntoView>
            {/* <img src={contactme} alt="contactme" className="nav-item"></img> */}
          </div>
        </nav>
        :
        <nav className="navbars">
          {/* <Nav/> */} 
          <ScrollIntoView selector=".top">
            <img src={geometry} alt="home" className="geometry nav-item"></img>
          </ScrollIntoView>
          <div className="containers">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          {/* <div className="container">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div> */}
          <Menu className="burger" pageWrapId={'containers'} {...showSettings} right >
            <ScrollIntoView selector=".top">
              <p className="nav-item burger">home</p>
            </ScrollIntoView>
            <ScrollIntoView selector=".hr">
              <p className="nav-item burger">about</p>
              {/* <img src={about} alt="about-me" className="nav-item"></img> */}
            </ScrollIntoView>
            <ScrollIntoView selector=".hr-two">
              <p className="nav-item burger">experience</p>
              {/* <img src={experience} alt="experience" className="nav-item"></img> */}
            </ScrollIntoView>
            <ScrollIntoView selector=".hr-three">
              <p className="nav-item burger">projects</p>
              {/* <img src={projects} alt="project" className="nav-item"></img> */}
            </ScrollIntoView>
            <ScrollIntoView selector=".contact">
              <p className="nav-item burger">contact me</p>
            </ScrollIntoView>
          </Menu>
        </nav>
      }
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
        <br />
        <br />
        <br />
        <div className="contact">
          <Contact />
        </div>
      </div>
    </>


  )
}

export default Home

// const getWidth = () => window.innerWidth 
// || document.documentElement.clientWidth 
// || document.body.clientWidth

// console.log('WIDTH', getWidth)

// function useCurrentWidth() {
//   // save current window width in the state object
//   const [width, setWidth] = useState(getWidth())

//   // in this case useEffect will execute only once because
//   // it does not have any dependencies.
//   useEffect(() => {
//     let timeoutId = null
//     const resizeListener = () => {
//       clearTimeout(timeoutId)
//       timeoutId = setTimeout(() => setWidth(getWidth()), 150)
//     }
//     // set resize listener
//     window.addEventListener('resize', resizeListener)

//     // clean up function
//     return () => {
//       // remove resize listener
//       window.removeEventListener('resize', resizeListener)
//       console.log('CURRENT', width)
//     }
    
//   }, [])

//   return width
// }
// console.log('CURRENT', useCurrentWidth)
