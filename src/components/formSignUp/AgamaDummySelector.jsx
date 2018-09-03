import React from 'react';
const agama = [
    'Islam',
    'Kristen',
    'Protestan',
    'Hindu',
    'Budha',
    'Konghuchu'
]

const Homstay =[
    'Hotel',
    'Rumah Tapak',
    'Apartemen'
]

const RumahSakit=[
    'RS Kanker Dharmais',
    'RS MRCCC',
    'RS Cipto Mangunkusumo'
]

export const AgamaDummySelector = ({ input, meta: { touched, error } }) => (
    <div>
        <select {...input}>
            <option value="">Pilih  Agama...</option>
            {agama.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span className="errorStyle">{error}</span>}
    </div>
);

export const HomestayDummySelector = ({ input, meta: { touched, error } }) => (
    <div>
        <select {...input}>
            <option value="">Pilih Tempat Menginap...</option>
            {Homstay.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span className="errorStyle">{error}</span>}
    </div>
);

export const RumahSakitDummySelector = ({ input, meta: { touched, error } }) => (
    <div>
        <select {...input}>
            <option value="">Pilih Rumah Sakit...</option>
            {RumahSakit.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span className="errorStyle">{error}</span>}
    </div>
);

