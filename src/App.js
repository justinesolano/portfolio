import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'

// import Nav from './components/Nav'


function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="projects">
          <Projects />
        </Route>
      </Switch>
    </BrowserRouter>
  )


}

export default App
