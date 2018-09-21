import React, { Component } from 'react';
import ThumbnailLayanan from '../components/ThumbnailLayanan';
import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';

// import TopHeader from '../components/TopHeader';
import Navigation from '../components/Navigation';
import KalkulatorIntro from '../components/KalkulatorIntro';
import KomikStrip from '../components/KomikStrip';
// import Testimoni from '../components/Testimoni';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveUrl } from '../actions/action.url';

import {
  Button,
  // Modal,
  // ModalHeader,
  // ModalBody,
  // ModalFooter,
  // UncontrolledCarousel
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm : false,
      popUpFirst: true,
    }
    this.closePopUp = this.closePopUp.bind(this);
  }
  componentWillMount(){
    let currURL = this.props.history.location.pathname;
    this.props.moveUrl(currURL); //dispatch
  }
  componentDidMount() {
  }
  closePopUp () {
    this.setState({
      popUpFirst: false
    })
  }
  render() {
    const { slideSection } = this.props.lang.home
    return (
      <div>
        <div className="headerWrap">
          <Navigation lang={this.props.lang.menu}/>
        </div>
        <FixedButtonDaftarMobile btnlang={slideSection.btnDaftarMobile}/>
        <div>
            <div className="section home" id="home">
              <div className="gradientShadow"></div>
              <div className="intro">
                <h1 className="animated bounceInDown">{slideSection.h1}</h1>
                <p className="animated bounceInLeft">{slideSection.h3}</p>
                <ThumbnailLayanan lang={this.props.lang}/>
                <Link className="btnLayananMobile" to="/layananmobile">
                  <Button color="info" className="animated bounceInUp">
                    {slideSection.btnlayanan}
                  </Button>
                </Link>
              </div>
              <img src={require('../assets/img/home-image.png')} alt="slideImage"/>
            </div>
        </div>
        <KomikStrip lang={this.props.lang}/>
        <KalkulatorIntro lang={this.props.lang}/>
        {/* <Testimoni lang={this.props.lang}/> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);