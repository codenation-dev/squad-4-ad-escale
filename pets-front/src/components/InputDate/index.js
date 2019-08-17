import React, { Component } from 'react'
import './input-date.css';
import { FaSearch } from 'react-icons/fa';

class InputDate extends Component {
    render() {
        return (
            <input type="text" className="input-localization" placeholder={this.props.placeholder}>

            </input>
        )
    }
}

export default InputDate;