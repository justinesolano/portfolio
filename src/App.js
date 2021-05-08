import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
// import Nav from './components/Nav'


function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )


}

export default App
