import React, { Component } from 'react';
import Dropdown from 'react-dropdown'

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
                onChange={this._onSelect}
                value={defaultOption}
                placeholder="selecione" />

        )
    }
}

export default MyDropdown;