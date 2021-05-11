import React from 'react'
// import * as Scroll from 'react-scroll'
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import ScrollIntoView from 'react-scroll-into-view'
// import about from '../assets/about.png'
// import contactme from '../assets/contactme.png'
// import experience from '../assets/experience.png'
// import projects from '../assets/projects.png'
// import skills from '../assets/skills.png'
// import geometry from '../assets/geometry.png'
import { slide as Menu } from 'react-burger-menu'


const Nav = () => {


  const showSettings = (event) => {
    event.preventDefault()
  }

  

  return (
    <Menu className="burgerss">
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <button onClick={showSettings} className="menu-item--small" href="">Settings</button>
    </Menu>
  )
}

export default Nav
