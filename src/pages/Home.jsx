import React, { Component } from 'react';
import ThumbnailLayanan from '../components/ThumbnailLayanan';
import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';

// import TopHeader from '../components/TopHeader';
import Navigation from '../components/Navigation';
import KalkulatorIntro from '../components/KalkulatorIntro';
import Testimoni from '../components/Testimoni';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveUrl } from '../actions/action.url';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor () {
    super()
    this.state = {
      showForm : false
    }
  }
  componentWillMount(){
    let currURL = this.props.history.location.pathname;
    this.props.moveUrl(currURL); //dispatch
  }
  componentDidMount(){
    // console.log('route ==>', this.props.history.location.pathname)
  }
  componentDidUpdate() {
    // console.log('PROPS URL==>', this.props.urls)
  }
  render() {
    return (
      <div>
        <div className="headerWrap">
          {/* <TopHeader/> */}
          <Navigation/>
        </div>
        <FixedButtonDaftarMobile/>
        <div>
            <div className="section home" id="home">
              <div className="gradientShadow"></div>
              <div className="intro">
                <h1 className="animated bounceInDown">Percayakan perjalanan medis anda pada kami</h1>
                <p className="animated bounceInLeft">Kemodijakarta.com adalah sebuah layanan perjalanan medis yang di lahirkan untuk mendampingi pasien kanker dari luar Jakarta ketika berkunjung ke Pusat Layanan Kanker di Jakarta dan sekitarnya</p>
                <ThumbnailLayanan/>
                <Link className="btnLayananMobile" to="/layananmobile">
                  <Button color="info" className="animated bounceInUp">
                    Lihat Layanan
                  </Button>
                </Link>
              </div>
              <img src={require('../assets/img/home-image.png')} alt="slideImage"/>
            </div>
        </div>
        <KalkulatorIntro />
        <Testimoni />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('STATEEEEEEEEEEEEEE',state)
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