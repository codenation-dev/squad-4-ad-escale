import React, { Component } from 'react'
import './input-localization.css';
import { FaSearch } from 'react-icons/fa';

class InputLocalization extends Component {
    render() {
        return (
            <input type="text" className="input-localization" placeholder={this.props.placeholder}>

            </input>
        )
    }
}

export default InputLocalization;