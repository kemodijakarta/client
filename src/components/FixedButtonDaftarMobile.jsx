import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FixedButtonDaftarMobile extends Component {
    render() {
        return (
            <div className="daftarFloat">
              <Link to="/register">DAFTAR</Link>
            </div>
        );
    }
}

export default FixedButtonDaftarMobile;