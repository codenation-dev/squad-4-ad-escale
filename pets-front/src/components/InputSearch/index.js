import React, { Component } from 'react'
import './input-search.css';
import { FaSearch } from 'react-icons/fa';

class InputSearch extends Component {
    render() {
        return (
            <input type="text" className="input-search" placeholder="Digite a espécie ou a raça do pet">

            </input>
        )
    }
}

export default InputSearch;