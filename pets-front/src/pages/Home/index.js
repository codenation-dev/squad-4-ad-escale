import React, { Component } from 'react'
import PetCard from '../../components/PetCard'
import Header from '../../components/Header'
import SearchCard from '../../components/SearchCard'
import SearchNavbar from '../../components/SearchNavbar';




class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <SearchCard>
                    <SearchNavbar></SearchNavbar>
                </SearchCard>
                <PetCard></PetCard>
            </div>

        )
    }
}

export default Home; 