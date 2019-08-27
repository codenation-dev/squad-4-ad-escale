import React, { Component } from 'react'
import './search-navbar-item.css';

class SearchNavbarItem extends Component {
    render() {
        let style = "search-navbar-item"
        if (this.props.isActive) {
            style = "search-navbar-item-active"
        }
        return (
            <h1 className={style} id={this.props.value} onClick={(e) => this.props.onClick(e)}>{this.props.text}</h1>
        )
    }
}

export default SearchNavbarItem;