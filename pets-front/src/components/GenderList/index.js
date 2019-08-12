import React, { Component } from 'react';
import SearchNavbar from '../../components/SearchNavbar'
import TypeListItem from '../TypeListItem'
import male from '../../_assets/img/male.svg'
import female from '../../_assets/img/female.svg'


class GenderList extends Component {
    render() {
        return (
            <div className="d-flex flex-row">
                <TypeListItem image={male} text="Macho"/>
                <TypeListItem image={female} text="Fêmea"/>
            </div>

        )
    }
}

export default GenderList; 