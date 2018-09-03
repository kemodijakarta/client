import React, { Component } from 'react'
import validate from '../validate'
import { Field, reduxForm, Fields } from 'redux-form'
import RenderField from './RenderField'
import { AgamaDummySelector } from './AgamaDummySelector'
import { Button, Col, Row, Card } from 'reactstrap'
import AlamatRender from './AlamatRenderfield'

class FirstForm extends Component {
    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <Card>
                <Card>
                    <center>
                        <h1>Biodata Klien</h1>
                    </center>
                </Card>
                <form onSubmit={handleSubmit} className="wizardForm">
                    <Row>
                        <Col>
                            <div className="fieldForm">
                                <Field
                                    className="inpType"
                                    name="namaDepan"
                                    type="text"
                                    component={RenderField}
                                    label="Nama Depan"
                                />
                            </div>
                            <br />
                            <div className="fieldForm">
                                <Field
                                    className="inpType"
                                    name='namaBelakang'
                                    type='text'
                                    component={RenderField}
                                    label='Nama Belakang'
                                />
                            </div>
                            <br />
                            <div className="fieldForm" style={{marginLeft:"5px"}}>
                                <label>Agama</label>
                                <Field className="inpType"
                                    name='agama'
                                    component={AgamaDummySelector}
                                />
                            </div>
                            <br />
                            <div className="fieldForm">
                                <Field className="inpType"
                                    name='aliran'
                                    type='text'
                                    component={RenderField}
                                    label='Aliran'
                                />
                            </div>
                            <div className="fieldForm">
                                <div>
                                    <label>Jenis Kelamin</label>
                                    <div>
                                        <label style={{ marginRight: "10px" }}>
                                            <Field className="inpType"
                                                name="sex" component="input" type="radio" value="Pria" />
                                            {' '}
                                            Pria
                    </label>
                                        <label style={{ marginLeft: "10px" }}>
                                            <Field className="inpType" name="sex" component="input" type="radio" value="Wanita" />
                                            {' '}
                                            Wanita
                    </label>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </Col>
                        <Col>
                            <div className="fieldForm">
                                <Field
                                    className="inpType"
                                    name='email'
                                    type='text'
                                    component={RenderField}
                                    label='Email'
                                />
                            </div>
                            <br />
                            <div className="fieldForm">
                                <Fields className="inpType"
                                    names={['alamat', 'alamat2']}
                                    component={AlamatRender}
                                />
                            </div>
                            <br />
                            <div className="fieldForm">
                                <Field className="inpType"
                                    name='noTelp'
                                    type='text'
                                    component={RenderField}
                                    label='Nomor Telepon/Hp'
                                />
                            </div>
                            <br />
                            <div className="fieldForm">
                                <Field className="inpType"
                                    name='Asuransi'
                                    type='text'
                                    component={RenderField}
                                    label='Asuransi yang anda miliki'
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className="fieldForm">
                                <label>KONTAK DARURAT</label>
                                <div className="fieldForm">
                                    <Field className="inpType"
                                        name='namaContactDarurat'
                                        type='text'
                                        component={RenderField}
                                        label='Nama Kontak Darurat'
                                    />
                                </div>
                                <br />
                                <div className="fieldForm">
                                    <Field className="inpType"
                                        name='hubungan'
                                        type='text'
                                        component={RenderField}
                                        label='Hubungan Kerabat'
                                    />
                                </div>
                                <br />
                                <div className="fieldForm">
                                    <Field className="inpType"
                                        name='noTelpDarurat'
                                        type='text'
                                        component={RenderField}
                                        label='Nomor Telepon/Hp Darurat'
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <center>
                            <Button color="primary" type="submit" className="next spasiButton">SELANJUTNYA</Button>
                        </center>
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
})(FirstForm)