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

const Projects = () => {

  
  return (
    <>
      <div className="about-container">
        <h1 className="project-title">projects</h1>
        <div className="col project slider-one">
          <AwesomeSlider style={{ width: 600, height: 300 }} className="slider-settings">
            <div data-src={register} style={{ width: 600, height: 300 }} className="slide"></div>
            <div data-src={login} style={{ width: 600, height: 300 }} className="slide"></div>
            <div data-src={projectfour} style={{ width: 600, height: 300 }} className="slide"></div>
            <div data-src={plantshow} style={{ width: 600, height: 300 }} className="slide"></div>
            <div data-src={plantindex} style={{ width: 600, height: 300 }} className="slide"></div>
            <div data-src={makepost} style={{ width: 600, height: 300 }} className="slide"></div>
            <div data-src={explore} style={{ width: 600, height: 300 }} className="slide"></div>
          </AwesomeSlider>
          <div className="project-details">
            <h4 className="project-four">Project Four: GreenHouse</h4>
            <br />
            <p className="project-four-description">Solo project. Full-stack Django/React app using an API with crud functionality. Allows users to browse the database of houseplants for decor purposes. Also has a social-media function where users can post their own pictures of, like and comment on plants. </p>
            <p className="project-links"> <a href="https://github.com/justinesolano/sei-project-four/blob/main/README.md" target="_blank" rel="noreferrer">Read Me</a> | <a href="https://greenhouse-app.herokuapp.com/" target="_blank" rel="noreferrer">Deployed project</a> </p>
          </div>
        </div>  
      </div>
      <br />
      <br />
      <br />
    </>
  )
}

export default Projects


{/* <div className="project">
<h1 className="project-title">projects</h1>
<div className="container projects">
  <div className="row projects">
    <div className="col project">
      <Slider>
        <div>
          <img src={bulma} alt="slide"></img></div>
        <div>child 1</div>
        <div>child 1</div>
      </Slider>
    </div>
    <div className="col project">Column</div>
    <div className="w-100"></div>
    <div className="col project">Column</div>
    <div className="col project">Column</div>
  </div>
</div>
</div> */}