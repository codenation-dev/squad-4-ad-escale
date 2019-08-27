import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
    'cachorro', 'gato', 'coelho'
]

const defaultOption = options[0]

class MyDropdown extends Component {
    render() {
        return (
            <Dropdown
                className="dropdown"
                options={options}
                value={this.props.type}
                onChange={(e) => this.props.onChange(e)}
                value={defaultOption}
                placeholder="selecione" />
        )
    }
}

export default MyDropdown;