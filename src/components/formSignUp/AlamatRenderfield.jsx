import React from 'react';

const alamatRender = (fields) => {
    return (
        <div>
            <label>Alamat</label>
            <div>
                <div className="input-row">
                    <input {...fields.alamat.input} type="text" placeholder="jln.Tata Surya 1 No 20" />
                    {fields.alamat.meta.touched && fields.alamat.meta.error &&
                        <span className="errorStyle">{fields.alamat.meta.error}</span>}
                </div>
                <div className="input-row">
                    <input {...fields.alamat2.input} type="text" placeholder="jln.Tata Surya 2 No 21"/>
                    {fields.alamat2.meta.touched && fields.alamat2.meta.error &&
                        <span className="errorStyle">{fields.alamat2.meta.error}</span>}
                </div>
            </div>
        </div>
    )
}

export default alamatRender;