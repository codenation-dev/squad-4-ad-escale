import React, { Component } from 'react'
import './search-card.css';

class SearchCard extends Component {
    render() {
        return (
                <div className="search-card">
                    {this.props.children}
                </div>
        )
    }
}

export default SearchCard;