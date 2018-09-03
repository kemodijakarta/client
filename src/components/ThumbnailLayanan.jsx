import React, { Component } from 'react';

class ThumbnailLayanan extends Component {
    render() {
        return (
            <div className="thumbnailLayanan">
              <ul>
                <li>
                  <div className="imageLayananWrap animated fadeInDown">
                    <img src={require('../assets/img/layanan/nurse-helping-senior-man-exit-260nw-742009099.jpg')} alt="layanan-thumb"/>
                  </div>
                  <p className="animated fadeInUp delay-5s">Akomodasi <br/>& Transportasi</p>
                </li>
                <li>
                  <div className="imageLayananWrap animated fadeInDown">
                    <img src={require('../assets/img/layanan/perawat-homecare.jpg')} alt="layanan-thumb"/>
                  </div>
                  <p className="animated fadeInUp delay-5s">Perawat Home Care <br/>& ALKES</p>
                </li>
                <li>
                  <div className="imageLayananWrap animated fadeInDown">
                    <img style={{ marginTop:-20, marginLeft: -5 }} src={require('../assets/img/layanan/makanan-sehat.jpg')} alt="layanan-thumb"/>
                  </div>
                  <p className="animated fadeInUp delay-5s">Konsumsi</p>
                </li>
                <li>
                  <div className="imageLayananWrap animated fadeInDown">
                    <img style={{ marginTop:-20, marginLeft: -15 }} src={require('../assets/img/layanan/konsultasi.jpg')} alt="layanan-thumb"/>
                  </div>
                  <p className="animated fadeInUp delay-5s">Edukasi & Konseling</p>
                </li>
                <li>
                  <div className="imageLayananWrap animated fadeInDown">
                    <img style={{ marginTop:-20, marginLeft: -15 }} src={require('../assets/img/layanan/hiburan.jpg')} alt="layanan-thumb"/>
                  </div>
                  <p className="animated fadeInUp delay-5s">Hiburan dan Lain-lain</p>
                </li>
              </ul>
            </div>
        );
    }
}

export default ThumbnailLayanan;