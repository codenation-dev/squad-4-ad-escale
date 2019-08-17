import React, { Component } from 'react'
import './input-line-password.css';
import { FaSearch } from 'react-icons/fa';

class InputLinePassword extends Component {
    render() {
        return (
            <div className="div-center">
                <input type="password" className="input-line" placeholder={this.props.placeholder}>

                </input>
            </div>

        )
    }
}

export default InputLinePassword;