import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
// import { faCSSAlt } from '@fortawesome/free-brands-svg-icons'



const About = () => {


  
  return (
    <>
      <div className="about-container">
        <h1 className="about-me">about me</h1>
        <div className="icons">
          {/* <i className="fas fa-laptop-code"></i> */}
          <FontAwesomeIcon icon={faLaptopCode} className="icons fa-3x"/>
          <FontAwesomeIcon icon={faPen} className="icons fa-3x"/>
          <FontAwesomeIcon icon={faGamepad} className="icons fa-3x"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="about-column">Hello, my name is Justine! I am a junior full-stack developer & knowledge enthusiast. I live in London and enjoy watching films, listening to and discovering new music, and travelling.
                <br />
                <br />
    I first got into coding in 2015 when I discovered an app called Episode which allows you to create a visual and interactive version of your story through code. This allowed me to marry two of my favourite hobbies: writing and creating. This was when I started to resonate with being a multipotentialite. As Frederickson et al. described, this is someone who <i>&quot;when provided with appropriate environments, can select and develop a number of competencies to a high level&quot;</i>. I truly feel that being a developer is one of these competencies.
                <br />
                <br />
    I love learning and progressing in places that I am passionate about. After graduating university, coding was the only thing that excited me. Enrolling to the Software Engineering course at GA was where I truly felt that I could pursue this. i 
                <br />
                <br />
    Outside of being a developer, I love writing and have been doing it since I was young. I have been working on a coming-of-age novel since 2016. I am currently writing/coding an original fantasy story with 12 published chapters and over 9000 reads. You can check it out <a href="http://episodeinteractive.com/s/6014349999407104" className="episode">here</a> on your phone!
                <br />
                <br />

    I also love playing video games. I am a master at Tetris. My favourite games to play are Overwatch, Valheim, Minecraft, and my favourite RPG&apos;s are Skyrim and Witcher 3.
              </p>
            </div>
            <div className="col">
              <p className="about-column coding">
                <FontAwesomeIcon icon={faJs} className="icon fa-3x"/>
                <FontAwesomeIcon icon={faJs} className="icon fa-3x"/>
                <FontAwesomeIcon icon={faJs} className="icon fa-3x"/>
                <FontAwesomeIcon icon={faJs} className="icon fa-3x"/>
                <FontAwesomeIcon icon={faJs} className="icon fa-3x"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About


//   <blockquote className="about-section container">
//     <div className="row">
      

//     </div>
//   </blockquote>
// </div>




// <div className="about">
//   <h1 className="about-me">about me</h1>
//   <div className="icons">
//     {/* <i className="fas fa-laptop-code"></i> */}
//     <FontAwesomeIcon icon={faLaptopCode} className="icons fa-3x"/>
//     <FontAwesomeIcon icon={faPen} className="icons fa-3x"/>
//     <FontAwesomeIcon icon={faGamepad} className="icons fa-3x"/>
//   </div>