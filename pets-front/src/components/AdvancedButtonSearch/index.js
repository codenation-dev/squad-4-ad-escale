import React, { Component } from 'react'
import './advanced-button-search.css';
import { FaSlidersH } from 'react-icons/fa';
import { Link, Route } from 'react-router-dom';

class AdvancedButtonSearch extends Component {
    render() {
        return (
            <Link to="/advancedSearch">
                <div className="advanced-button-search">
                    <FaSlidersH /> Busca avançada
            </div>
            </Link>

        )
    }
}

export default AdvancedButtonSearch;