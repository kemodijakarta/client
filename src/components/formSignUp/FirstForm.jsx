import React, { Component } from 'react'
import validate from '../validate'
import { Field, reduxForm, Fields } from 'redux-form'
import RenderField from './RenderField'
import { AgamaDummySelector } from './AgamaDummySelector'
import { Button, Col, Row, Card } from 'reactstrap'
import AlamatRender from './AlamatRenderfield'
import RadioGroup from './BooleanSelector'


class FirstForm extends Component {
    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <Card>
                <Card  style={{ marginBottom: "4px" }}>
                    <center>
                        <h1>Biodata Klien</h1>
                    </center>
                </Card>
                <form onSubmit={handleSubmit} className="wizardForm">
                    <Row>
                        <Col>
                            <label style={{ marginRight: "100px", marginLeft: "100px", color: "#0061D7" , fontSize:"20px"}}><strong><center>IDENTITAS</center></strong></label>
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
                            <Row>
                                <Col>
                                    <div className="fieldForm" style={{ marginLeft: "5px" }}>
                                        <label>Agama</label>
                                        <Field className="inpType"
                                            name='agama'
                                            component={AgamaDummySelector}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="fieldForm">
                                        <Field className="inpType"
                                            name='aliran'
                                            type='text'
                                            component={RenderField}
                                            label='Aliran'
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <div className="fieldForm">
                                <Field
                                    className="inpType"
                                    name="tglLahir"
                                    type="date"
                                    component={RenderField}
                                    label="Tanggal Lahir" />
                            </div>
                            <br />
                            <div className="fieldForm" >
                                <Field
                                    className="inpType"
                                    component={RadioGroup}
                                    name="sex"
                                    required={true}
                                    options={[
                                        { title: 'Pria', value: 'Pria' },
                                        { title: 'Wanita', value: 'Wanita' }
                                    ]}
                                    label="Jenis Kelamin" />
                            </div>
                            <br />
                        </Col>
                        <Col>
                            <label style={{ marginRight: "100px", marginLeft: "100px", color: "#0061D7" , fontSize:"20px"}}><strong>KONTAK</strong></label>
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
                                    type='number'
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

                            <div>
                                <center>
                                    <Button color="primary" type="submit" className="next spasiButton">SELANJUTNYA</Button>
                                </center>
                            </div>
                        </Col>
                        <Col>
                            <label style={{ marginLeft: "55px", color: "#0061D7", fontSize:"20px" }}><strong>KONTAK DARURAT</strong></label>
                            <div className="fieldForm">
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
                                        type='number'
                                        component={RenderField}
                                        label='Nomor Telepon/Hp Darurat'
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>

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