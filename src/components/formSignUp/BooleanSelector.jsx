import React, { Component } from 'react'

export default class RadioGroup extends Component {
    render() {
        const { input, meta, options, label } = this.props
        const hasError = meta.touched && meta.error;

        return (
            <div>
                <label>{label}</label>
                <div>
                    {options.map(o => <label key={o.value} style={{ marginLeft: "10px" }}><input type="radio" {...input} value={o.value} checked={o.value === input.value} /> {o.title}</label>)}
                    {hasError && <span className="errorStyle" style={{ marginLeft: "10px" }}>{meta.error}</span>}
                </div>
            </div>
        );
    }
}
