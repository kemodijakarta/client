import React, { Component } from 'react';
import './App.css';
import history from './history';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './components/formSignUp/WizardForm';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotifRegister from './components/formSignUp/FifthForm'
import { Router, Switch, Route } from 'react-router-dom';
import LayananMobile from './pages/LayananMobile';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="bigWrap">
          {/* <div className="headerWrap">
            <Navigation/>
          </div> */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/notif-form" component={NotifRegister}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/layananmobile" component={LayananMobile}></Route>
            <Route path="/kalkulator" component={() => window.location = 'http://kalkulator.kemodijakarta.com/#/'}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
