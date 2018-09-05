import React from 'react';

const alamatRender = (fields) => {
    return (
        <div>
            <label>Alamat</label>
            <div>
                <div className="input-row">
                    <input {...fields.alamat.input} type="text" placeholder="Nama jalan Dan Nomor" />
                    {fields.alamat.meta.touched && fields.alamat.meta.error &&
                        <span className="errorStyle">{fields.alamat.meta.error}</span>}
                </div>
                <div className="input-row">
                    <input {...fields.alamat2.input} type="text" placeholder="Kota Dan Provinsi"/>
                    {fields.alamat2.meta.touched && fields.alamat2.meta.error &&
                        <span className="errorStyle">{fields.alamat2.meta.error}</span>}
                </div>
            </div>
        </div>
    )
}

export default alamatRender;