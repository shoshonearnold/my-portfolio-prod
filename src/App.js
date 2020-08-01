import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,Redirect,Link } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import ErrorPage from './Components/ErrorPage'
import ScrollToTop from './Components/ScrollToTop'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ScrollToTop />
            <Switch>  
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/404" component={ErrorPage} />
              <Redirect  to="/404"/>
            </Switch>
        </Router>
      </div>
    )
  }
}



export default App;
