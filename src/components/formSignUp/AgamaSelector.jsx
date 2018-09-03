import React, { Component } from 'react'
import { AgamaSelectorAction } from '../actions/AgamaSelector'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AgamaSelector extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
        this.props.AgamaSelectorAction()
    }
    render() {
        const { isLoading, isError, isSuccess } = this.props.agamaSelector
        const loader = {
            "border": " 16px solid #f3f3f3",
            "borderTop": " 16px solid #3498db",
            "borderRadius": "50%",
            "width": "120px",
            "height": "120px",
            "animation": "spin 2s linear infinite"
        }
        const selector = ({ input, meta: { touched, error } }) => (
            <div>
                <select {...input}>
                    <option value="">Pilih Agama</option>
                    {isSuccess.map(agama => {
                        return (
                            <option value={agama.nama} key={agama.id}>{agama.nama}</option>
                        )
                    })}
                </select>
                {touched && error && <span>{error}</span>}
            </div>
        )

        if (isLoading) {
            return (
                <div>
                    <center>
                        <div style={loader}></div>
                    </center>
                </div>
            )
        } else if (isError) {
            return (
                <div>
                    ERROR
                </div>
            )
        } else {
            // selector()
            return (
                <div>
                    <select name={this.props.name}>
                        <option value="">Pilih Agama</option>
                        {isSuccess.map(agama => {
                            console.log('ini agama loop',agama.nama)
                            return (
                                <option value={agama.nama} key={agama}>{agama.nama}</option>
                            )
                        })}
                    </select>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        agamaSelector: state.AgamaSelector
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        AgamaSelectorAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AgamaSelector)