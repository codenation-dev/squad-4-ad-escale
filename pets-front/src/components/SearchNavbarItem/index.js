import React, { Component } from 'react'
import './search-navbar-item.css';

class SearchNavbarItem extends Component {

    constructor(props) {
        super();
        this.state = {
            active: 0
        }
    }

    render() {
        return (
            <h1 className="search-navbar-item" onClick={this.onClick}>{this.props.text}</h1>
        )
    }

    onClick() {

    }
}

export default SearchNavbarItem;