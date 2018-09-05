import React, { Component } from 'react'
import validate from '../validate'
import { Field, reduxForm, } from 'redux-form'
// import RenderField from './RenderField'
import { HomestayDummySelector } from './AgamaDummySelector'
import { Button, Row, Col, Card } from 'reactstrap'
// import RadioGroup from './BooleanSelector'
// import { lainRenderer } from './lainRenderer'



class ThirdForm extends Component {
    render() {
        const { handleSubmit, previousPage } = this.props
        return (
            <Card>
                <Card>
                    <center>
                        <h1>Kriteria Perjalanan Medis</h1>
                    </center>
                </Card>
                <form onSubmit={handleSubmit} className="wizardForm">
                    <div className="fieldForm">
                        <Row>
                            <Col>
                                <div>
                                    <label>Tempat Menginap Selama Terapi</label>
                                    <Field className="inpType"
                                        name='homestay'
                                        component={HomestayDummySelector}
                                    />
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="fasilitas">Fasilitas :</label>
                                    <div className="fieldForm">
                                        <Row>
                                            <Field name="kamarMandiDalam" id="kamarMandiDalam" component="input" type="checkbox" />
                                            <label htmlFor="kamarMandiDalam" style={{ marginRight: "10px", marginLeft: "10px" }}>Kamar Mandi Dalam  </label>
                                        </Row>
                                        <Row>
                                            <Field name="Tv" id="Tv" component="input" type="checkbox" />
                                            <label htmlFor="Tv" style={{ marginRight: "10px", marginLeft: "10px" }}>Tv Pribadi  </label>
                                        </Row>
                                        <Row>
                                            <Field name="wifi" id="wifi" component="input" type="checkbox" />
                                            <label htmlFor="wifi" style={{ marginRight: "10px", marginLeft: "10px" }}>Wifi  </label>
                                        </Row>
                                        <Row>
                                            <Field name="perawat" id="perawat" component="input" type="checkbox" />
                                            <label htmlFor="perawat" style={{ marginRight: "10px", marginLeft: "10px" }}>Perawat 24 Jam  </label>
                                        </Row>
                                        <Row>
                                            <Field name="alkes" id="alkes" component="input" type="checkbox" />
                                            <label htmlFor="alkes" style={{ marginRight: "10px", marginLeft: "10px" }}>Alat Kesehatan  </label>
                                        </Row>
                                        <Row>
                                            <Field name="edukasi" id="edukasi" component="input" type="checkbox" />
                                            <label htmlFor="edukasi" style={{ marginRight: "10px", marginLeft: "10px" }}>Edukasi Kanker  </label>
                                        </Row>
                                    </div>
                                </div>
                                <br />
                            </Col>
                            <Col>
                                <Row>
                                    <Field name="kunjungan" id="kunjungan" component="input" type="checkbox" />
                                    <label htmlFor="kunjungan" style={{ marginRight: "10px", marginLeft: "10px" }}>Kunjungan Keluarga
                                    </label>
                                </Row>
                                <Row>
                                    <Field name="konseling" id="konseling" component="input" type="checkbox" />
                                    <label htmlFor="konseling" style={{ marginRight: "10px", marginLeft: "10px" }}>konseling</label>
                                </Row>
                                <br />
                                <Row>
                                    {/* <div className="fieldForm">
                                        <Fields className="inpType"
                                            names={['kebutuhan1','kebutuhan2','kebutuhan3','kebutuhan4','kebutuhan5']}
                                            component={lainRenderer}
                                        />
                                    </div> */}
                                    <div className="fieldForm">
                                        <label htmlFor="">Kebutuhan Anda Yang Lain</label>
                                        <br/>
                                        <Field className="inpType"
                                            name='lainLain'
                                            component="textarea"
                                            style={{width:"240%",height:"120px"}}
                                        />
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                        <div>
                            <center>
                                <Button type="button" color="secondary" className="previous spasiButton" onClick={previousPage}>
                                    KEMBALI
                    </Button>
                                <Button type="submit" color="primary" className="next spasiButton">SELANJUTNYA</Button>
                            </center>
                        </div>
                    </div>
                </form>
            </Card>
        )
    }
}

export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(ThirdForm)