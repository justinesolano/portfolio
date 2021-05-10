import React from 'react'
import ga from '../assets/ga.png'
import liv from '../assets/liv.png'
import spire from '../assets/spire.png'


const Experience = () => {
  return (
    <>
      <div>
        <h1 className="experience-me">experience & education</h1>
        <br />
        <div className="container experience-container">
          <div className="experience">
            <div className="row experience">
              <div className="col experience-col">
                <img src={ga} alt="ga" className="ga-logo"></img>
                <p className="sei">Software Engineering Immersive</p>
                <div className="sei-details">
                  <p> London, UK | Feb 2012 - April 2021</p>
                  <br/>
                </div>
                <p className="sei-description">12-week immersive course that helped progress my skills and knowledge of programming fundamentals. Focused on front end web development and also learnt backend programming using MongoDB, Express, Python & Django. Involved daily stand-ups, daily homework and feedback, workshops, independent, pair and group coding, hackathons.</p>
              </div>
              <div className="col experience-col">
                <div className="spire-details">
                  <div className="spirelogo">
                    <img src={spire} alt="spire" className="spire-logo"></img>
                  </div>
                  <p className="sei">Ward Hostess, part-time</p>
                  <div className="sei-details">
                    <p> London, UK | 2012 - 2016</p>
                    <br/>
                  </div>
                  <p className="sei-description">
                  As a high school student, I worked part-time at a private hospital in Cheam, London. I was in charge of catering for a specific ward and worked closely with chefs, nurses and doctors to serve food to and correctly regulate diets of hospital patients.
                  </p>
                </div>
              </div>
              <div className="liverpool">
                <div className="liv-img">
                  <img src={liv} alt="liv" className="liv-logo"></img>
                </div>
                <p className="sei">Philosophy BA Hons</p>
                <div className="sei-details">
                  <p> Liverpool, UK | 2017 - 2020</p>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
