import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
// import Projects from './components/Projects'

// import Nav from './components/Nav'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )


}

export default App
