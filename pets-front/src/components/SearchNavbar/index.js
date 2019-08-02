import React, { Component } from 'react';
import './search-navbar.css';
import SearchNavbarItem from '../SearchNavbarItem';

class SearchNavbar extends Component {
    render() {
        return (
            <div className="search-navbar">
                <SearchNavbarItem text={"ACHADOS"} />
                <SearchNavbarItem text={"PERDIDOS"} />
                <SearchNavbarItem text={"ADOÇÃO"} />
            </div>
        )
    }
}

export default SearchNavbar;