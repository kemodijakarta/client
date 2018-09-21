import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class KalkulatorIntro extends Component {
  render() {
    const { kalkulatorSection } = this.props.lang.home
      return (
          <div className="kalkulatorIntro">
            <Container>
              <Row style={{ padding: '100px 0px' }}>
                <Col lg="6">
                  <div style={{ width: '100%', height: '300px', background: 'yellow', overflow: 'hidden', borderRadius: '0px' }}>
                    <img style={{ width: '100%', marginTop: '-30px' }} src={require('../assets/img/calc-medic2.jpg')} alt="kalkulatorImageIntro"/>
                  </div>
                  <div className="clear"></div>
                </Col>
                <Col lg="6">
                  <h1>{kalkulatorSection.h1}</h1>
                  <p style={{ color: 'gray' }}>
                    {kalkulatorSection.h3}
                  </p>
                  <br/>
                  <Link to="/kalkulator" target="_blank">
                    <Button color="info" size="lg">
                      {kalkulatorSection.button}
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
      );
  }
}

export default KalkulatorIntro;