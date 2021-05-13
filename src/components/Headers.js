import React from 'react'
import { useWindupString } from 'windups'

const Headers = () => {

  const [name] = useWindupString('Justine Solano', {
    pace: (char) => (char === ' ' ? 100 : 100),
  })


  return (
    <div className="ui text">
      <div id="stars-container">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="ui inverted header">
          {name}
        </h1>
        <h2 className="fade-in" style={{ color: 'white' }}>developer | writer | gamer </h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  // <div className="ui sizer vertical">
  //   <br />
  //   <p className="ui huge header">Justine Solano</p>
  //   <p></p>
  //   <div className="ui large header fade-in">developer | writer | gamer</div>
  //   <p></p>
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  // </div>
  )
}

export default Headers
