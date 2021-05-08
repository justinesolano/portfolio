import React from 'react'
// import ScrollIntoView from 'react-scroll-into-view'
import Header from './Header'
import About from './About'

// import disableScroll from 'disable-scroll'

// import about from '../assets/about.png'
// import contactme from '../assets/contactme.png'
// import experience from '../assets/experience.png'
// import projects from '../assets/projects.png'
// import skills from '../assets/skills.png'


const Home = () => {

  // const fieldRef = React.useRef<HTMLInputElement>(null)


  return (
    <>
      <div className="home">
        <Header className="header"/>
        <br />
        <hr className="hr"/>
        <br />
        <div className="about">
          <About />
        </div>
      </div>
    </>


  )
}

export default Home
