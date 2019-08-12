import React, { Component } from 'react';
import SearchNavbar from '../../components/SearchNavbar'
import TypeListItem from '../TypeListItem'
import paw from '../../_assets/img/paw.svg'
import pawmedium from '../../_assets/img/paw-medium.svg'
import pawsmall from '../../_assets/img/paw-small.svg'


class SizeList extends Component {
    render() {
        return (
            <div className="d-flex flex-row">
                <TypeListItem image={pawsmall} text="Pequeno"/>
                <TypeListItem image={pawmedium} text="Médio"/>
                <TypeListItem image={paw} text="Grande"/>
            </div>

        )
    }
}

export default SizeList; 