import React from 'react'
import { useWindupString } from 'windups'
import { Icon } from 'semantic-ui-react'
import ScrollIntoView from 'react-scroll-into-view'

const Headers = () => {

  const [name] = useWindupString('Justine Solano', {
    delay: 2000,
    pace: (char) => (char === ' ' ? 120 : 120),
  })


  return (
    <div className="ui text">
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
      <div className="arrows">
        <ScrollIntoView selector=".hr">
          <Icon name='angle double down' size='huge' className="arrow fade-in-two box bounce-2"/>
        </ScrollIntoView>
      </div>
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
  )
}

export default Headers
