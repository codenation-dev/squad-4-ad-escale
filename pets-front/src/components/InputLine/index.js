import React, { Component } from 'react'
import './input-line.css';
import { FaSearch } from 'react-icons/fa';

class InputLine extends Component {
    render() {
        return (
            <div className="div-center">
                <input type="text" className="input-line"
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={(e) => this.props.onChange(e)}
                >

                </input>
            </div>

        )
    }
}

export default InputLine;