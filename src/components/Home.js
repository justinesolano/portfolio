import React from 'react'
import Headers from './Headers'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import separator from '../assets/break.png'



const Home = () => {


  return (
    <>
      <div className="top"></div>
      <div className="home">
        <Headers className="headers"/>
        <br />
        <div className="hr-div hr">
          <img src={separator} alt="break" style={{ height: '15px' }}></img>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <About className="about"/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="hr-div hr-two">
          <img src={separator} alt="break" style={{ height: '15px' }} ></img>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="experience">
          <Experience className="exp"/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="hr-div hr-three">
          <img src={separator} alt="break" style={{ height: '15px' }} ></img>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="projects">
          <Projects className="exp"/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <footer className="footer">
          <Contact />
        </footer>
      </div>
    </>
  )
}

export default Home
