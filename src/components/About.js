import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FaJs } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { SiBulma } from 'react-icons/si'
import semantic from '../assets/semantic.png'
import { FaNodeJs } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { FiCommand } from 'react-icons/fi'
import { SiHeroku } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { DiPhotoshop } from 'react-icons/di'
import { FaTrello } from 'react-icons/fa'
import { SiVisualstudiocode } from 'react-icons/si'


const About = () => {
  
  return (
    <>
      <div className="about-container wrapper" id="slide">
        <h1 className="about-me">about me</h1>
        <div className="icons">
          <FontAwesomeIcon icon={faLaptopCode} className="icons fa-3x"/>
          <FontAwesomeIcon icon={faPen} className="icons fa-3x"/>
          <FontAwesomeIcon icon={faGamepad} className="icons fa-3x"/>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="about-column">Hello, my name is Justine! I am a junior full-stack developer & knowledge enthusiast. I live in London and enjoy watching films, listening to music, and travelling.
                <br />
                <br />
    I first got into coding in 2015 when I discovered an app called Episode which allows you to create a visual and interactive version of your story through code. This allowed me to marry two of my favourite hobbies: writing and creating. As a multipotentialite who, as Frederickson et al. described, is someone who <i>&quot;when provided with appropriate environments, can select and develop a number of competencies to a high level&quot;</i>, I truly feel that being a developer is one of these competencies.
                <br />
                <br />
    I love learning and progressing in places that I am passionate about. After graduating university, coding was the only thing that excited me. Enrolling to the Software Engineering course at GA was where I truly felt that I could pursue this. 
                <br />
                <br />
    Outside of being a developer, I love writing and have been doing it since I was young. I have been working on a coming-of-age novel since 2016. I am currently writing/coding an original fantasy story with 12 published chapters and over 9000 reads. You can check it out <a href="http://episodeinteractive.com/s/6014349999407104" className="episode">here</a> on your phone!
                <br />
                <br />
    I also love playing video games. My favourite games to play are Overwatch, Valheim, Minecraft, and my favourite RPG&apos;s are Skyrim and Witcher 3. I am also a master at Tetris.
              </p>
            </div>
            <div className="col coding">
              <h4 className="coding-title">DEVELOPMENT</h4>
              <p className="about-column coding">
                <p className="icon"> <FaHtml5 size={65} />HTML</p>
                <p className="icon"> <FaCss3Alt size={65} />CSS </p>
                <p className="icon"> <FaJs size={65} /> JavaScript</p>
                <p className="icon"> <FaReact size={65} />React </p>
                <p className="icon"> <FaSass size={65} /> SASS</p>
                <p className="icon bulma"> <SiBulma size={65} /> Bulma</p>
                <div className="semanticui">
                  <img src={semantic} alt="icon" className="semantic"></img>
                  <p className="semantic-title">Semantic UI</p>
                </div>
                <p className="icon node"> <FaNodeJs size={65} />Node.js </p>
                <p className="icon"> <SiMongodb size={65} /> MongoDB</p>
                <p className="icon"> <FaPython size={65} />Python </p>
                <p className="icon"> <SiDjango size={65} /> Django</p>
                <p className="icon"> <SiPostgresql size={65} /> PostgreSQL</p>
              </p>
              <h4 className="coding-title">MANAGEMENT & DEPLOYMENT</h4>
              <div className="management">
                <p className="icon"> <FaGithub size={65} />GitHub </p>
                <p className="icon"> <SiVisualstudiocode size={65} />VSCode</p>
                <p className="icon"> <FiCommand size={65} />CLI</p>
                <p className="icon"> <SiHeroku size={65} /> Heroku</p>
                <p className="icon"> <SiNetlify size={65} /> Netlify </p>
              </div>
              <h4 className="coding-title design">DESIGN</h4>
              <div className="design">
                <p className="icon photoshop"> <DiPhotoshop size={65} /> Adobe <br />Photoshop</p>
                <p className="icon"> <FaTrello size={65} /> Trello</p>
              </div>
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

{/* <FontAwesomeIcon icon={FaJs} className="icon fa-3x"/> */}
{/* <FontAwesomeIcon icon={faJs} className="icon fa-3x"/>
                <FontAwesomeIcon icon={faJs} className="icon fa-3x"/> */}


// <div className="about">
//   <h1 className="about-me">about me</h1>
//   <div className="icons">
//     {/* <i className="fas fa-laptop-code"></i> */}
//     <FontAwesomeIcon icon={faLaptopCode} className="icons fa-3x"/>
//     <FontAwesomeIcon icon={faPen} className="icons fa-3x"/>
//     <FontAwesomeIcon icon={faGamepad} className="icons fa-3x"/>
//   </div>