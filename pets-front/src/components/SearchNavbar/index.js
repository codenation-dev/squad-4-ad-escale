import React, { Component } from 'react';
import './search-navbar.css';
import SearchNavbarItem from '../SearchNavbarItem';
import InputSearch from '../InputSearch';

class SearchNavbar extends Component {
    render() {
        return (
            <div className="search-navbar">
                <SearchNavbarItem text={"ENCONTRADOS"} />
                <SearchNavbarItem text={"PERDIDOS"} />
                <SearchNavbarItem text={"ADOÇÃO"} />
            </div>
        )
    }
}

export default SearchNavbar;