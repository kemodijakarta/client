import React, { Component } from 'react';
import './App.css';
import history from './history';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './components/formSignUp/WizardForm';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotifRegister from './components/formSignUp/FifthForm';
import { Router, Switch, Route } from 'react-router-dom';
import LayananMobile from './pages/LayananMobile';

import dataJSON from './template.json';
import dataJSON2 from './templateRegister.json';

// import {Helmet} from "react-helmet";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoad: false,
      lang: null,
      langRegister: null,
    }
  }
  componentDidMount() {
    if (localStorage.getItem('lang') === null || localStorage.getItem('lang') === 'id') {
      this.setState({
        lang: dataJSON.id,
        langRegister: dataJSON2.id
      })
    }
    if (localStorage.getItem('lang') === 'en') {
      this.setState({
        lang: dataJSON.en,
        langRegister: dataJSON2.en
        // lang: dataJSON.id
      })
    }
    setTimeout(() => {
      this.setState({
        isLoad: true
      })
    }, 1000);

  }
  render() {
    if (this.state.isLoad === false) {
      return (
        <div style={{ width: '100%', height: '100%', background: 'white' }}>
          <p style={{ display: 'table', margin: 'auto', paddingTop: '20%' }}>
            <img src={require('./assets/loader.gif')} alt="loader" style={{ display: 'table', width: '30%', margin: '0 auto' }}/>
          </p>
        </div>
      )
    } else {
      console.log('Bahasa', this.state.lang)
      return (
        <div>
          {/* <Helmet>
            <title>Kemodijakarta Helmet</title>
            <meta name="description" content="Ini adalah deskripsi dari kemodijakarta" />
            <meta name="theme-color" content="#008f68" />
          </Helmet> */}
          <Router history={history}>
            <div className="bigWrap">
              <Switch>
                <Route exact path="/" component={(props) => <Home {...props} lang={this.state.lang}/>}></Route>
                <Route path="/about" component={(props) => <About {...props} lang={this.state.lang}/>}></Route>
                <Route path="/contact" component={(props) => <Contact {...props} lang={this.state.lang}/>}></Route>
                <Route path="/register" component={(props) => <Register {...props} lang={this.state.langRegister}/>}></Route>
                <Route path="/notif-form" component={NotifRegister}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/layananmobile" component={(props) => <LayananMobile {...props} lang={this.state.lang}/>}></Route>
                <Route path="/kalkulator" component={() => window.location = 'http://kalkulator.kemodijakarta.com/#/'}></Route>
              </Switch>
            </div>
          </Router>
        </div>
      );
    }
  }
}

export default App;
