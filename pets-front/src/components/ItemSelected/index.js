import React, { Component } from 'react'
import './item-selected.css';

class SearchNavbarItem extends Component {
    render() {
        let style = "selected-item";

        if (this.props.isActive) {
            style = "selected-item-active"
        }
        return (
            <h1 className={style} id={this.props.value} onClick={(e) => this.props.onClick(e)}>{this.props.text}</h1>
        )
    }
}

export default SearchNavbarItem;