import React, { Component } from 'react'
import history from '../../history'
import { Container, Card, Table, Col, Row, Button } from 'reactstrap'

export default class FifthForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            biodata: {
                namaDepan: '',
                namaBelakang: '',
                email: '',
                agama: '',
                aliran: '',
                sex: '',
                alamat: '',
                alamat2: '',
                noTelp: '',
                Asuransi: '',
                namaContactDarurat: '',
                hubungan: '',
                noTelpDarurat: ''
            },
            kesehatan: {
                jenisKanker: '',
                stadium: ''
            },
            fasilitas: {
                homestay: '',
                kamarMandiDalam: undefined,
                Tv: undefined,
                kunjungan: '',
                konseling: '',
                hiburan: '',
                lainLain: ''
            },
            budget: {
                jadwalTreatment: '',
                tanggalMulai: '',
                tanggalSelesai: '',
                asalKota: '',
                datangDengan: '',
                rumahSakit: '',
                budget: ''
            },
        }
    }
    componentDidMount() {
        if (!localStorage.getItem('formUser')) {
            history.push('/')
        }
        const dataUser = JSON.parse(localStorage.getItem('formUser'))
        console.log(dataUser)
        const bio = {
            namaDepan: dataUser.namaDepan,
            namaBelakang: dataUser.namaBelakang,
            email: dataUser.email,
            agama: dataUser.agama,
            aliran: dataUser.aliran,
            sex: dataUser.sex,
            alamat: dataUser.alamat,
            alamat2: dataUser.alamat2,
            noTelp: dataUser.noTelp,
            Asuransi: dataUser.Asuransi,
            namaContactDarurat: dataUser.namaContactDarurat,
            hubungan: dataUser.hubungan,
            noTelpDarurat: dataUser.noTelpDarurat
        }
        const kes = {
            jenisKanker: dataUser.jenisKanker,
            stadium: dataUser.stadium
        }
        const fas = {
            homestay: dataUser.homestay,
            kamarMandiDalam:dataUser.kamarMandiDalam,
            Tv:dataUser.Tv,
            kunjungan: dataUser.kunjungan,
            konseling: dataUser.konseling,
            hiburan: dataUser.hiburan,
            lainLain: dataUser.lainLain
        }
        const bud = {
            jadwalTreatment: dataUser.jadwalTreatment,
            tanggalMulai: dataUser.tanggalMulai,
            tanggalSelesai: dataUser.tanggalSelesai,
            asalKota: dataUser.asalKota,
            datangDengan: dataUser.datangDengan,
            rumahSakit: dataUser.rumahSakit,
            budget: dataUser.budget
        }
        this.setState({
            biodata: bio,
            kesehatan: kes,
            fasilitas: fas,
            budget: bud,
        })
    }

    BackToHome() {
        localStorage.clear()
        history.push('/')
    }

    render() {
        const { biodata, kesehatan, fasilitas, budget } = this.state
        // console.log('ini asa', biodata.agama)
        return (
            <Container>
                <div>
                    <center>
                        <h1>
                            TERIMAKASIH,FORM PENDAFTARAN ANDA SUDAH TERKIRIM KE TRIP PLANNER KAMI
                        </h1>
                    </center>
                </div>
                <br />
                <div>
                    <div>
                        <center>
                            Berikut adalah data yang anda kirim:
                        </center>
                    </div>
                    <br />
                    <Row>
                        <Col>
                            <div>
                                <Container>
                                    <Card>
                                        <Table size="sm">
                                            <thead>
                                                <tr>
                                                    <th colSpan="2"><center>Biodata Klien</center></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Nama Depan</td>
                                                    <td>{biodata.namaDepan}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Nama Belakang</td>
                                                    <td>{biodata.namaBelakang}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Email</td>
                                                    <td>{biodata.email}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Agama</td>
                                                    <td>{biodata.agama}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Aliran</td>
                                                    <td>{biodata.aliran}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Jenis Kelamin</td>
                                                    <td>{biodata.sex}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Alamat</td>
                                                    <td>{biodata.alamat}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Alamat2</td>
                                                    <td>{biodata.alamat2}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Nomor Kontak/Hp</td>
                                                    <td>{biodata.noTelp}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Asuransi</td>
                                                    <td>{biodata.Asuransi}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Nama Dari Kontak Darurat</td>
                                                    <td>{biodata.namaContactDarurat}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Hubungan Kekerabatan dengan {biodata.namaContactDarurat}</td>
                                                    <td>{biodata.hubungan}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Nomor Kontak Darurat ({biodata.namaContactDarurat})</td>
                                                    <td>{biodata.noTelpDarurat}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card>
                                </Container>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Container>
                                    <Card>
                                        <Table size="sm">
                                            <thead>
                                                <tr>
                                                    <th colSpan="2"><center>Kondisi Kesehatan Klien</center></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Jenis Kanker</td>
                                                    <td>{kesehatan.jenisKanker}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Stadium</td>
                                                    <td>{kesehatan.stadium}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <div>
                                <Container>
                                    <Card>
                                        <Table size="sm">
                                            <thead>
                                                <tr>
                                                    <th colSpan="2"><center>Fasilitas Perjalanan Kesehatan</center></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Jenis Penginapan</td>
                                                    <td>{fasilitas.homestay}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                {
                                                    (fasilitas.tv === undefined) ?
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        : <tr>
                                                            <td>Tv</td>
                                                            <td>{String(fasilitas.tv)}</td>
                                                        </tr>
                                                }
                                            </tbody>
                                            {
                                                (fasilitas.kamarMandiDalam === undefined) ? <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody> : <tbody>
                                                        <tr>
                                                            <td>Kamar Mandi Dalam</td>
                                                            <td>{String(fasilitas.kamarMandiDalam)}</td>
                                                        </tr>
                                                    </tbody>
                                            }
                                            <tbody>
                                                <tr>
                                                    <td>Kunjungan Keluarga</td>
                                                    <td>{fasilitas.kunjungan}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Konseling/Siraman Rohani</td>
                                                    <td>{fasilitas.konseling}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Hiburan</td>
                                                    <td>{fasilitas.hiburan}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Kebutuhan Lain</td>
                                                    <td>{fasilitas.lainLain}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card>
                                </Container>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Container>
                                    <Card>
                                        <Table size="sm">
                                            <thead>
                                                <tr>
                                                    <th colSpan="2"><center>Budget</center></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Lama Terapi Dalam Hari</td>
                                                    <td>{budget.jadwalTreatment}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Tanggal Mulai Terapi</td>
                                                    <td>{budget.tanggalMulai}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Tanggal Selesai Terapi </td>
                                                    <td>{budget.tanggalSelesai}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Kota Asal</td>
                                                    <td>{budget.asalKota}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Metode Kedatangan Ke Jakarta</td>
                                                    <td>{budget.datangDengan}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Rumah Sakit Tempat Terapi</td>
                                                    <td>{budget.rumahSakit}</td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Budget</td>
                                                    <td>{budget.budget}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </div>
                <br />
                <center>
                    <Button onClick={this.BackToHome} color="success">HALAMAN UTAMA</Button>
                </center>
            </Container>
        )
    }
}
