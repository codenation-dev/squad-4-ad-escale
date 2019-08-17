import React, { Component } from 'react'
import './input-search.css';
import { FaSearch } from 'react-icons/fa';

class InputSearch extends Component {
    render() {
        return (
            <input type="text" className="input-search" placeholder={this.props.placeholder}>

            </input>
        )
    }
}

export default InputSearch;