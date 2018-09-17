import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';
import Navigation from '../components/Navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveUrl } from '../actions/action.url';

class About extends Component {
  componentWillMount(){
    let currURL = this.props.history.location.pathname;
    this.props.moveUrl(currURL);
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
          <Navigation/>
        </div>
        <FixedButtonDaftarMobile/>
        <Container>
          <div className="marginTop"></div>
          <Row>
            <Col>
              <Container>
              <Row className="animated bounceInDown">
                <div className="aboutWrap">
                  <h2>Tentang Kami</h2>
                  <p>
                    <b>Kemodijakarta.com</b> adalah sebuah layanan pendampingan perjalanan 
                    medis yang di lahirkan untuk pasien dari daerah ketika berkunjung 
                    ke Pusat Layanan Kesehatan di Jakarta. <b>Kemodijakarta.com</b> mengunakan 
                    pendekatan teknologi dan manusia untuk dapat memberikan pelayanan 
                    optimal kepada pasien sebelum dan selama berobat di Jakarta.
                  </p> 
                </div> 
              </Row>
              <Row className="animated bounceInUp">
                <div className="aboutWrap">
                  <h2>Tim Kami</h2>
                  <Row>
                    <Col className="teamList">
                      <ul>
                        <li>Ruben Kurniawan - <span>Pemilik Klinik Taman Anggrek</span></li>
                        <li>Vincent Sutantiyo - <span>Kepala Pelayanan di Rumah Sakit Khusus Kanker</span></li>
                        <li>Ricky Prasetyo - <span>Manager</span></li>
                        <li>Sigit - <span>Trip Planner</span></li>
                        <li>Perawat Lisa - <span>Konsultan Perjalanan Medis</span></li>
                        <li>Nisa - <span>Resepsionis</span></li>
                        <li>Ali Hozi - <span>Akunting</span></li>
                        <li>Carolina Budiman - <span>Legal & SDM</span></li>
                        <li>Jeffry Hermanto - <span>Webdevelopment</span></li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Row>
              </Container>
            </Col>
          </Row>
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);