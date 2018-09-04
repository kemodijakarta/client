import React, { Component } from 'react'
import validate from '../validate'
import { Field, reduxForm } from 'redux-form'
import RenderField from './RenderField'
import { Button, Row, Col, Card } from 'reactstrap'
import RadioGroup from './BooleanSelector'

class SecondForm extends Component {
    render() {
        const { handleSubmit, previousPage } = this.props
        return (
            <Card>
                <Card>
                    <center>
                        <h1>Kondisi Kesehatan Klien</h1>
                    </center>
                </Card>
                <form onSubmit={handleSubmit} className="wizardForm">
                    <div className="fieldForm">
                        <Row>
                            <Col>
                                <Field className="inpType"
                                    name='jenisKanker'
                                    type='text'
                                    component={RenderField}
                                    label='Jenis Kanker'
                                />
                            </Col>
                            <Col>
                                {/* <div>
                                    <label>Stadium (*)</label>
                                    <div>
                                        <label style={{ marginRight: "10px" }}>
                                            <Field name="stadium" component="input" type="radio" value="1" />
                                            {' '}
                                            1
                    </label>
                                        <label style={{ marginRight: "10px" }}>
                                            <Field name="stadium" component="input" type="radio" value="2" />
                                            {' '}
                                            2
                    </label>
                                        <label style={{ marginRight: "10px" }}>
                                            <Field name="stadium" component="input" type="radio" value="3" />
                                            {' '}
                                            3
                    </label>
                                        <label style={{ marginRight: "10px" }}>
                                            <Field name="stadium" component="input" type="radio" value="4" />
                                            {' '}
                                            4
                    </label>
                                    </div>
                                </div> */}
                                <div className="fieldForm">
                                    <Field
                                        className="inpType"
                                        component={RadioGroup}
                                        name="stadium"
                                        required={true}
                                        options={[
                                            { title: '1', value: '1' },
                                            { title: '2', value: '2' },
                                            { title: '3', value: '3' },
                                            { title: '4', value: '4' }
                                        ]}
                                        label="Stadium" />
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
})(SecondForm)