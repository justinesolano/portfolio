import React from 'react'

const Header = () => {

  // const justine = ['writer', 'developer', 'film enthusiast', 'gamer', 'music lover']

  // const justineRandom = [justine[Math.floor(Math.random() * justine.length)]]
  // console.log('I am a', justineRandom)

  
  // let counter = 1
  // setInterval(() => {
  //   const displayJobs = [
  //     'developer',
  //     'writer',
  //     'film enthusiast',
  //     'music lover',
  //     'gamer',
  //     'traveller',
  //     'history buff',
  //     'foodie'
  //   ]
  //   document.getElementsByClassName('iam')[0].innerText = displayJobs[counter % displayJobs.length]
  //   counter++
  // }, 2000)

  
  
  return (
    <>
      <div className="some-page-wrapper">
        <div className="row">
          <div className="column">
            <div className="justine-solano">
                Justine <br/>Solano
            </div>
          </div>
          <div className="column">
            <div className="iam">
              <div className="me-list">
                <p className="adjectives slide-right">developer.</p>
                <p className="adjectives">writer.</p>
                <p className="adjectives">film fanatic.</p>
                <p className="adjectives">gamer.</p>
                <p className="adjectives">traveller.</p>
                <p className="adjectives">fitness enthusiast.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
