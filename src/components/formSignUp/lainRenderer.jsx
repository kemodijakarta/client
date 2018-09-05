import React from 'react'
export  const lainRenderer = (fields) => {
    return (
        <div>
            <label>Kebutuhan Anda Yang lain</label>
            <div>
                <div className="input-row">
                    <textarea {...fields.kebutuhan1.input} type="text" placeholder="Kebutuhan Anda" style={{width:'200%'}}/>
                    {fields.kebutuhan1.meta.touched && fields.kebutuhan1.meta.error &&
                        <span className="errorStyle">{fields.kebutuhan1.meta.error}</span>}
                </div>
                <br/>
                <div className="input-row">
                    <input {...fields.kebutuhan2.input} type="text" placeholder="Kebutuhan Anda" style={{width:'200%'}}/>
                    {fields.kebutuhan2.meta.touched && fields.kebutuhan2.meta.error &&
                        <span className="errorStyle">{fields.kebutuhan2.meta.error}</span>}
                </div>
                <br/>
                <div className="input-row">
                    <input {...fields.kebutuhan3.input} type="text" placeholder="Kebutuhan Anda" style={{width:'200%'}}/>
                    {fields.kebutuhan3.meta.touched && fields.kebutuhan3.meta.error &&
                        <span className="errorStyle">{fields.kebutuhan3.meta.error}</span>}
                </div>
                <br/>
                <div className="input-row">
                    <input {...fields.kebutuhan4.input} type="text" placeholder="Kebutuhan Anda" style={{width:'200%'}}/>
                    {fields.kebutuhan4.meta.touched && fields.kebutuhan4.meta.error &&
                        <span className="errorStyle">{fields.kebutuhan4.meta.error}</span>}
                </div>
                <br/>
                <div className="input-row">
                    <input {...fields.kebutuhan5.input} type="text" placeholder="Kebutuhan Anda" style={{width:'200%'}}/>
                    {fields.kebutuhan5.meta.touched && fields.kebutuhan5.meta.error &&
                        <span className="errorStyle">{fields.kebutuhan5.meta.error}</span>}
                </div>
            </div>
        </div>
    )
}