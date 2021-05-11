import React, { useState, useEffect } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import geometry from '../assets/geometry.png'
import { slide as Menu } from 'react-burger-menu'


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
            </ScrollIntoView>
            <ScrollIntoView selector=".hr-two">
              <p className="nav-item">experience</p>
            </ScrollIntoView>
            <ScrollIntoView selector=".top">
              <img src={geometry} alt="home" className="geometry nav-item"></img>
            </ScrollIntoView>
            <ScrollIntoView selector=".hr-three">
              <p className="nav-item">projects</p>
            </ScrollIntoView>
            <ScrollIntoView selector=".contact">
              <p className="nav-item">contact me</p>
            </ScrollIntoView>
          </div>
        </nav>
        :
        <nav className="navbars">
          <ScrollIntoView selector=".top">
            <img src={geometry} alt="home" className="geometry nav-item"></img>
          </ScrollIntoView>
          <div className="containers">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <Menu className="burger" pageWrapId={'containers'} {...showSettings} right >
            <ScrollIntoView selector=".top">
              <p className="nav-item burger">home</p>
            </ScrollIntoView>
            <ScrollIntoView selector=".hr">
              <p className="nav-item burger">about</p>
            </ScrollIntoView>
            <ScrollIntoView selector=".hr-two">
              <p className="nav-item burger">experience</p>
            </ScrollIntoView>
            <ScrollIntoView selector=".hr-three">
              <p className="nav-item burger">projects</p>
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
