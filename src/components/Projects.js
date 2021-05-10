import React from 'react'
import Slider from '@farbenmeer/react-spring-slider'
import bulma from '../assets/bulma.png'

const Projects = () => {

  // const config = {
  //   // dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: '80px',
  //   focusOnSelect: true,
  //   draggable: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // }


  return (
    // <Slider className="slider">
    //   <div className="sliders">
    //     <img src={bulma} alt="slide"></img>
    //   </div>
    //   <div>
    //     <img src={bulma} alt="slide"></img>
    //   </div>
    // </Slider>
    <>
      <h1 className="project-title">projects</h1>
      <div className="col project">
        <Slider>
          <div>
            <img src={bulma} alt="slide"></img></div>
          <div>child 1</div>
          <div>child 1</div>
        </Slider>
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