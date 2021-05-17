import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import projectfour from '../assets/projectfour.jpg'
import login from '../assets/login.jpg'
import register from '../assets/register.jpg'
import explore from '../assets/explore.jpg'
import plantshow from '../assets/plantshow.jpg'
import plantindex from '../assets/plantindex.jpg'
import makepost from '../assets/makepost.jpg'
import projectthree from '../assets/landing.jpg'
import moreinfo from '../assets/moreinfo.jpg'
import login2 from '../assets/login2.jpg'
import register2 from '../assets/register2.jpg'
import explore2 from '../assets/explore2.jpg'
import feed from '../assets/feed.jpg'
import post from '../assets/post.jpg'
import home from '../assets/home.jpg'
import quiz1 from '../assets/quiz1.jpg'
import quiz2 from '../assets/quiz2.jpg'
import quizend from '../assets/quizend.jpg'
import resources from '../assets/resources.jpg'
import gif from '../assets/gameplay.gif'
import game from '../assets/game.jpg'
import { FaPython } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiBulma } from 'react-icons/si'
import { FaJs } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'


const Projects = () => {
  
  return (
    <>
      <h1 className="project-title">projects</h1>
      <div className="ui stackable grid container">
        <div className="nine wide column">
          <AwesomeSlider
            className="slider-settings"
          >
            <div data-src={register}   className="slide"></div>
            <div data-src={login}   className="slide"></div>
            <div data-src={projectfour}   className="slide"></div>
            <div data-src={plantshow}   className="slide"></div>
            <div data-src={plantindex}   className="slide"></div>
            <div data-src={makepost}   className="slide"></div>
            <div data-src={explore}   className="slide"></div>
          </AwesomeSlider >
          <div className="project-details-four">
            <h4 className="project-four-title">Project Four: GreenHouse</h4>
            <div className="project-logo">
              <FaReact size={45} className="icon" />
              <FaPython size={45} className="icon" />               <SiDjango size={45} className="icon" />              <SiPostgresql size={45} className="icon" />
              <FaSass size={45} className="icon" />
            </div>
            <br />
            <p className="project-four-description">Solo project. Full-stack Django/React app using an API with CRUD functionality. Allows users to browse the database of houseplants for decor purposes. Also has a social-media function where users can post their own pictures of, like and comment on plants. </p>
            <p className="project-links"> 7 days | <a href="https://github.com/justinesolano/sei-project-four/blob/main/README.md" target="_blank" rel="noreferrer" style={{ color: 'black' }} className="readme" >Read Me</a> | <a href="https://greenhouse-app.herokuapp.com/" target="_blank" rel="noreferrer" style={{ color: 'black' }} className="deploy">Deployed project</a> </p>
          </div>
          <hr style={{ margin: '20px 0px 20px 0px'  }} />
        </div>
        {/* <hr style={{ width: '300px' }} className="project-hr" /> */}
        <div className="nine wide column">
          <AwesomeSlider   className="slider-settings">
            <div data-src={projectthree}className="slide"></div>
            <div data-src={moreinfo} className="slide"></div>
            <div data-src={register2}className="slide"></div>
            <div data-src={login2}className="slide"></div>
            <div data-src={explore2}className="slide"></div>
            <div data-src={feed} className="slide"></div>
            <div data-src={post}className="slide"></div>
          </AwesomeSlider>
          <div className="project-details-four">
            <h4 className="project-three-title">Project Three: Jetflix</h4>
            <div className="project-logo">
              <FaReact size={45} className="icon" />
              <SiMongodb size={45} className="icon" /> 
              <SiBulma size={45} className="icon" /> 
              <FaSass size={45} className="icon" />
            </div>
            <br />
            <p className="project-four-description">4-person project. Full-stack MongoDB/React app using an API with CRUD functionality. Netflix-inspired travel destination app. Allows users to browse for different travel destinations around the world & add them to &apos;My List&apos; just like in Netflix. Also has an Instagram-inspired component where users have a profile page, can add pictures of their travels and like/comment on each other&apos;s posts. I focused on making the Navbar and Explore Page components. </p>
            <p className="project-links three"> 8 days | <a href="https://github.com/justinesolano/sei-project-three/blob/main/README.md" target="_blank" rel="noreferrer" style={{ color: 'black' }} className="readme" >Read Me</a> | <a href="https://jetflixapp.herokuapp.com/" target="_blank" rel="noreferrer" style={{ color: 'black' }} className="deploy">Deployed project</a> </p>
          </div>
          <hr style={{ margin: '20px 0px 20px 0px'  }} />
        </div>
        {/* <hr style={{ width: '300px' }} className="project-hr" /> */}
        <div className="nine wide column">
          <AwesomeSlider
            className="slider-settings"
          >
            <div data-src={quiz1}className="slide"></div>
            <div data-src={home} className="slide"></div>
            <div data-src={quiz2} className="slide"></div>
            <div data-src={quizend} className="slide"></div>
            <div data-src={resources}  className="slide"></div>
          </AwesomeSlider>
          <div className="project-details-four">
            <h4 className="project-two-title">Project Two: LotR Quiz</h4>
            <div className="project-logo">
              <FaReact size={45} className="icon" />
              <SiBulma size={45} className="icon" /> 
              <FaSass size={45} className="icon" />
            </div>
            <br />
            <p className="project-four-description">2-person hackathon. Front-end React app using an external API. Users can play two 20-question LotR quizzes: &quot;Guess who said this quote&quot; & &quot;Guess which movie this quote is from&quot;. Scores are tracked and players get a different reaction gif at the end depending on their score. </p>
            <p className="project-links two"> 2 days | <a href="https://github.com/justinesolano/sei-project-two/blob/master/README.md" target="_blank" rel="noreferrer" style={{ color: 'black' }} className="readme">Read Me</a> | <a href="https://lotrquiz-app.netlify.app/" target="_blank" rel="noreferrer" style={{ color: 'black' }} className="deploy">Deployed project</a> </p>
          </div>
          <hr style={{ margin: '20px 0px 20px 0px'  }} />
        </div>
        <div className="nine wide column">
          <AwesomeSlider className="slider-settings">
            <div data-src={gif} className="slide"></div>
            <div data-src={game} className="slide"></div>
          </AwesomeSlider>
          <div className="project-details-four">
            <h4 className="project-one-title">Project One: Frodder</h4>
            <div className="project-logo">
              <FaHtml5 size={45} className="icon"/>
              <FaCss3Alt size={45} className="icon" />
              <FaJs size={45} className="icon" />
              <FaSass size={45} className="icon" /> 
            </div>
            <br />
            <p className="project-four-description">Solo project. Lord of the Rings-inspired Frogger game created using vanilla JavaScript. The player plays as Frodo who needs to get past rows of Nazgûl and catch the raft on the river to Bree where he needs to meet Gandalf at the Prancing Pony Inn. </p>
            <p className="project-links one"> 8 days | <a href="https://github.com/justinesolano/sei-project-one/blob/main/README.md" target="_blank" rel="noreferrer" style={{ color: 'black' }} className="readme">Read Me</a> | <a href="https://justinesolano.github.io/sei-project-one/" target="_blank" rel="noreferrer" style={{ color: 'black' }} className="deploy">Deployed project</a> </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects


