import React, { Component } from 'react';
import SearchNavbar from '../../components/SearchNavbar'
import { FaTheRedYeti } from 'react-icons/fa';
import './type-list-item.css';

class TypeListItem extends Component {
    render() {
        let style = "p-3 align-center";

        if (this.props.isActive) {
            style = "p-3 align-center-active";
        }

        return (
            <div className={style}>
                <img className="icon-list" src={this.props.image} />
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default TypeListItem; 