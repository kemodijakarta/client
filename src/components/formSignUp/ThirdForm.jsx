import React, { Component } from 'react'
import validate from '../validate'
import { Field, reduxForm } from 'redux-form'
import RenderField from './RenderField'
import { HomestayDummySelector } from './AgamaDummySelector'
import { Button, Row, Col, Card } from 'reactstrap'


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
                                    <label htmlFor="fasilitas">Fasilitas</label>
                                    <Row>
                                        <Col>
                                            <label htmlFor="kamarMandiDalam">Kamar Mandi Dalam  </label>
                                            <Field name="kamarMandiDalam" id="kamarMandiDalam" component="input" type="checkbox" />
                                        </Col>
                                        <Col>
                                            <label htmlFor="Tv">Tv  </label>
                                            <Field name="Tv" id="Tv" component="input" type="checkbox" />
                                        </Col>
                                    </Row>
                                </div>
                                <br />
                            </Col>
                            <Col>
                                <div>
                                    <label>Apa Keluarga Anda Akan Berkunjung Sewaktu-waktu ? (*)</label>
                                    <div>
                                        <label style={{ marginRight: "20px" }}>
                                            <Field name="kunjungan" component="input" type="radio" value="iya" />
                                            {' '}
                                            Iya
                    </label>
                                        <label>
                                            <Field name="kunjungan" component="input" type="radio" value="tidak" />
                                            {' '}
                                            Tidak
                    </label>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <label>Apa Anda Membutuhkan Siraman Rohani ? (*)</label>
                                    <div>
                                        <label style={{ marginRight: "20px" }}>
                                            <Field name="konseling" component="input" type="radio" value="iya" />
                                            {' '}
                                            Iya
                    </label>
                                        <label>
                                            <Field name="konseling" component="input" type="radio" value="tidak" />
                                            {' '}
                                            Tidak
                    </label>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <label>Apa Anda Membutuhkan Hiburan Seperti Internet Dan Tv Kabel? (*)</label>
                                    <div>
                                        <label style={{ marginRight: "20px" }}>
                                            <Field name="hiburan" component="input" type="radio" value="iya" />
                                            {' '}
                                            Iya
                    </label>
                                        <label>
                                            <Field name="hiburan" component="input" type="radio" value="tidak" />
                                            {' '}
                                            Tidak
                    </label>
                                    </div>
                                    <Field className="inpType" name="lainLain" type="text" component={RenderField} label="Kebutuhan Anda Yang Lain" />
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