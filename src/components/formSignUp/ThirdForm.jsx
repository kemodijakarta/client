import React, { Component } from 'react'
import validate from '../validate'
import { Field, reduxForm } from 'redux-form'
import RenderField from './RenderField'
import { HomestayDummySelector } from './AgamaDummySelector'
import { Button, Row, Col, Card } from 'reactstrap'
import RadioGroup from './BooleanSelector'


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
                                            <label htmlFor="kamarMandiDalam" style={{ marginRight: "10px",marginLeft:"10px" }}>Kamar Mandi Dalam  </label>
                                            <Field name="kamarMandiDalam" id="kamarMandiDalam" component="input" type="checkbox" />
                                        </Row>
                                        <Row>
                                            <label htmlFor="Tv" style={{ marginRight: "10px",marginLeft:"10px" }}>Tv Pribadi  </label>
                                            <Field name="Tv" id="Tv" component="input" type="checkbox" />
                                        </Row>
                                        <Row>
                                            <label htmlFor="Tv" style={{ marginRight: "10px",marginLeft:"10px" }}>Wifi  </label>
                                            <Field name="wifi" id="wifi" component="input" type="checkbox" />
                                        </Row>
                                        <Row>
                                            <label htmlFor="perawat" style={{ marginRight: "10px",marginLeft:"10px" }}>Perawat 24 Jam  </label>
                                            <Field name="perawat" id="perawat" component="input" type="checkbox" />
                                        </Row>
                                        <Row>
                                            <label htmlFor="alkes" style={{ marginRight: "10px",marginLeft:"10px" }}>Alat Kesehatan  </label>
                                            <Field name="alkes" id="alkes" component="input" type="checkbox" />
                                        </Row>
                                        <Row>
                                            <label htmlFor="edukasi" style={{ marginRight: "10px",marginLeft:"10px" }}>Edukasi Kanker  </label>
                                            <Field name="edukasi" id="edukasi" component="input" type="checkbox" />
                                        </Row>
                                    </div>
                                </div>
                                <br />
                            </Col>
                            <Col>
                                <div className="fieldForm">
                                    <Field
                                        className="inpType"
                                        component={RadioGroup}
                                        required={true}
                                        name="kunjungan"
                                        options={[
                                            { title: 'Iya', value: 'Iya' },
                                            { title: 'Tidak', value: 'Tidak' },
                                        ]}
                                        label="Apa Keluarga Anda Akan Berkunjung Sewaktu-waktu ?"
                                    />
                                </div>
                                <br />
                                <div className="fieldForm">
                                    <Field
                                        className="inpType"
                                        component={RadioGroup}
                                        required={true}
                                        name="konseling"
                                        options={[
                                            { title: 'Iya', value: 'Iya' },
                                            { title: 'Tidak', value: 'Tidak' },
                                        ]}
                                        label="Apa Anda Membutuhkan Konseling/Siraman Rohani ?"
                                    />
                                </div>
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