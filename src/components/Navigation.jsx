import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import FloatLogin from '../components/FloatLogin';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveUrl } from '../actions/action.url';
import history from '../history'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen : false,
      currentUrlNavigation: window.location.href,
      showHeader: false,
      showLogin: false,
    }
    this.showDaftarContainer = this.showDaftarContainer.bind(this)
  }

  toogle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    this.setState({
      currentUrlNavigation: window.location.href
    })
  }

  showDaftarContainer () {
    this.setState({
      showLogin: !this.state.showLogin
    })
  }
  Daftar(){
    history.push('/register')
  }
  
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <Container>
            <NavbarBrand>
              {/* <NavLink> */}
              <div className="logoWrap">
                {/* {this.state.showHeader} */}
                <img className="logo" src={require('../assets/img/logo-kemo.png')} alt="logo"/>
              </div>
              {/* </NavLink> */}
            </NavbarBrand>
            <NavbarToggler onClick={this.toogle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="daftarButton">
                  {/* <Link style={{ background: '#2a7bc1', borderRadius: 5, color: 'white !important'}} to="/register">
                    DAFTAR
                  </Link> */}
                  <div style={{ background: 'red' }}>
                    {/* <Button style={{marginTop: -10, marginBottom: -10, position: 'relative'}} onClick={this.Daftar}> */}
                    <Button style={{marginTop: -10, marginBottom: -10, position: 'relative'}} onClick={this.showDaftarContainer}>
                      DAFTAR
                    </Button>
                    {
                      (this.state.showLogin) ?
                        <FloatLogin/>
                      :
                      ''
                    }
                  </div>
                </NavItem>
                <NavItem>
                  <Link to="/">BERANDA</Link>
                </NavItem>
                <NavItem>
                  <Link to="/about">TENTANG</Link>
                </NavItem>
                <NavItem>
                  <Link to="/kalkulator" target="_blank">
                    KALKULATOR MEDIS
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact">KONTAK</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    urls: state.urlReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    moveUrl
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);