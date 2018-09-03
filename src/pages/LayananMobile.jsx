import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem  } from 'reactstrap';
import Navigation from '../components/Navigation';
import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';

class LayananMobile extends Component {
    render() {
        return (
            <div>
                <div className="headerWrap">
                    <Navigation/>
                </div>
        <FixedButtonDaftarMobile/>
                <Container>
                    <Row>
                        <div className="marginTop"></div>
                        <div style={{ width: '100%', height: '50px' }}></div>
                    </Row>
                    <Row>
                        <Col>
                            <ListGroup>
                                <ListGroupItem>Akomodasi & Transportasi</ListGroupItem>
                                <ListGroupItem>Perawat Home Care & ALKES</ListGroupItem>
                                <ListGroupItem>Konsumsi</ListGroupItem>
                                <ListGroupItem>Edukasi & Konseling</ListGroupItem>
                                <ListGroupItem>Hiburan dan lain-lain</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LayananMobile;