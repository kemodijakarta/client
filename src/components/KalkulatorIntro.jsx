import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class KalkulatorIntro extends Component {
    render() {
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
                    <h1>Hitung perjalanan medis anda</h1>
                    <p style={{ color: 'gray' }}>Kami menyediakan kalkulator medis bagi anda yang ingin memulai perjalanan medis anda, hasil dari kalkulator medis merupakan gambaran pengeluaran yang akan anda jalani selama perjalanan medis di Jakarta. </p>
                    <br/>
                    <Link to="/kalkulator" target="_blank">
                      <Button color="info" size="lg">
                        Kalkulator Medis
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