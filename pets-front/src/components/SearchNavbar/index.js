import React, { Component } from 'react';
import './search-navbar.css';
import SearchNavbarItem from '../SearchNavbarItem';
import InputSearch from '../InputSearch';

class SearchNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foundActive: false,
            lostActive: false,
            adoptionActive: false
        }

    }

    onClick = (event) => {
        if (event.target.id === "1") {
            this.setState({
                foundActive: !this.state.foundActive,
                lostActive: false,
                adoptionActive: false
            })
        }
        else if (event.target.id === "2") {
            this.setState({
                lostActive: !this.state.lostActive,
                foundActive: false,
                adoptionActive: false
            })
        }
        else {
            this.setState({
                adoptionActive: !this.state.adoptionActive,
                foundActive: false,
                lostActive: false
            })
        }
    }

    render() {
        return (
            <div className="search-navbar">
                <SearchNavbarItem text={"ENCONTRADOS"} isActive={this.state.foundActive} value={1} onClick={this.onClick} />
                <SearchNavbarItem text={"PERDIDOS"} isActive={this.state.lostActive} value={2} onClick={this.onClick} />
                <SearchNavbarItem text={"ADOÇÃO"} isActive={this.state.adoptionActive} value={3} onClick={this.onClick} />
            </div>
        )
    }
}

export default SearchNavbar;