import React, { Component } from 'react';
import SearchNavbar from '../../components/SearchNavbar'
import { FaTheRedYeti } from 'react-icons/fa';
import './type-list-item.css';

class TypeListItem extends Component {
    render() {
        return (
            <div className="p-3 align-center">
                <img className="icon-list" src={this.props.image} />
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default TypeListItem; 