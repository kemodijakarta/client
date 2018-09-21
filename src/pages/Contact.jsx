import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col
 } from 'reactstrap';
import FormBukuTamu from '../components/FormBukuTamu';
import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';
import Navigation from '../components/Navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveUrl } from '../actions/action.url';

class Contact extends Component {
  render() {
    const { h1 } = this.props.lang.contact.form
    const { kontak } = this.props.lang.contact
    const { slideSection } = this.props.lang.home
    return (
      <div>
        <div className="headerWrap">
          <Navigation lang={this.props.lang.menu}/>
        </div>
        <FixedButtonDaftarMobile/>
        <FixedButtonDaftarMobile btnlang={slideSection.btnDaftarMobile}/>
        <Container>
          <div className="marginTop"></div>
          <Row>
            <Col md="6">
              <div className="wrapContact">
                <h3>{h1}</h3>
                <FormBukuTamu lang={this.props.lang.contact}/>
              </div>
            </Col>
            <Col md="6">
              <div className="wrapContact">
                <h3>{kontak.h1}</h3>
                <p>
                  <img style={{ width: 20, marginRight: 20 }} src={require('../assets/img/gmail.png')} alt="emailogo"/>
                  info[at]kemodijakarta.com
                </p>
                <p>
                  <img style={{ width: 20, marginRight: 20 }} src={require('../assets/img/whatsapp.png')} alt="emailogo"/>
                  0812-288-566-99
                </p>
              </div>
            </Col>
          </Row>
        </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(Contact);