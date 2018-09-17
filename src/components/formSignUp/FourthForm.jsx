import React, { Component } from 'react'
import validate from '../validate'
import { Field, reduxForm} from 'redux-form'
import { RumahSakitDummySelector } from './AgamaDummySelector'
import renderField from './RenderField';
import axios from 'axios'
import history from '../../history'
import { Button, Col, Row,Card } from 'reactstrap'
import BudgetRender from './BudgetRender'

class FortForm extends Component {
    submit = (values) => {
        // console.log(values)
        axios.post('http://neoal.xyz:3000/api/email/send', { values })
            .then(response => {
                // console.log(response.data)
                if(response.data.message){
                    localStorage.setItem('formUser',JSON.stringify(values))
                    history.push('/notif-form')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    render() {
        const { handleSubmit, pristine, previousPage, submitting, } = this.props;
        return (
            <Card>
                <Card>
                <center>
                <h1>Budget Perjalanan Medis</h1>
                </center>
                </Card>
                <form onSubmit={handleSubmit(this.submit)} className="wizardForm">
                    <div className="fieldForm">
                        <Row>
                            <Col>
                                <Field
                                    className="inpType"
                                    name="jadwalTreatment"
                                    component={renderField}
                                    type="number"
                                    label="Durasi Terapi Dalam Hari"
                                />
                                <br />
                                <Field
                                    className="inpType"
                                    name="tanggalMulai"
                                    type="date"
                                    component={renderField}
                                    label="Perjalanan Medis Mulai Pada Tanggal"
                                />
                                <br />
                                <Field
                                    className="inpType"
                                    name="tanggalSelesai"
                                    type="date"
                                    component={renderField}
                                    label="Perjalanan Medis Berakhir Pada Tanggal"
                                />
                                <br />
                                <Field
                                    className="inpType"
                                    name="asalKota"
                                    type="text"
                                    component={renderField}
                                    label="Kota Asal Anda"
                                />
                            </Col>
                            <Col>
                            <Field
                                    className="inpType"
                                    name="datangDengan"
                                    type="text"
                                    component={renderField}
                                    label="Metoda Kedatangan,contoh:Pesawat,Kereta,dll"
                                />
                                <br />
                                <div>
                                    <label>Rumah Sakit</label>
                                    <Field className="inpType"
                                        name='rumahSakit'
                                        component={RumahSakitDummySelector}
                                    />
                                </div>
                                <br />
                                <Field className="inpType" name="budget" component={BudgetRender} type="number" label="Budget Anda" />
                            </Col>
                        </Row>
                        <div>
                            <center>
                                <Button style={{ paddingRight: '10px', }} type="button" color="secondary" className="previous spasiButton" onClick={previousPage}>
                                    KEMBALI
                    </Button>
                                <Button style={{ paddingLeft: '10px', }} type="submit" className="spasiButton" color="success" disabled={pristine || submitting}>SELESAI</Button>
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
    validate,
})(FortForm)