import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import PetCard from '../../components/PetCard'
import SearchCard from '../../components/SearchCard'
import SearchNavbar from '../../components/SearchNavbar';
import InputSearch from '../../components/InputSearch';
import ButtonSearch from '../../components/ButtonSearch';
import AdvancedButtonSearch from '../../components/AdvancedButtonSearch'
import AdvancedSearch from '../AdvancedSearch';
import Carousel from '../../components/Carousel'
class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />  
                <SearchCard>
                    <SearchNavbar></SearchNavbar>
                    <br></br>
                    <InputSearch placeholder="Digite a espécia ou a raça do pet"/>
                    <br></br>
                    <ButtonSearch></ButtonSearch>
                    <br></br>
                    <AdvancedButtonSearch></AdvancedButtonSearch>
                </SearchCard>
                <PetCard></PetCard>
                <div>

                </div>
            </div>


        )
    }
}

export default Home; 