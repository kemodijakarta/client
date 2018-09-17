import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  if (touched&&error) {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input className="errorStyle" {...input}  placeholder={label} type={type} />
          {touched && error && <span className="errorStyle">{error}</span>}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {/* {touched && error && <span>{error}</span>} */}
        </div>
      </div>
    )
  }
}

export default renderField;
