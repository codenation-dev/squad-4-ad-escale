import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import PetCard from "../../components/PetCard";
import SearchCard from "../../components/SearchCard";
import SearchNavbar from "../../components/SearchNavbar";
import InputSearch from "../../components/InputSearch";
import ButtonSearch from "../../components/ButtonSearch";
import AdvancedButtonSearch from "../../components/AdvancedButtonSearch";
import AdvancedSearch from "../AdvancedSearch";
import Carousel from "../../components/Carousel";
import { connect } from "react-redux";
import {
  getPets as actionGetPets,
  selectCard,
  getPetsFailed,
  getPetsSuccess
} from "./actions";
import * as thunks from "./thunk";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(thunks.getPets());
  }
  render() {
    console.log(this.props);
    const { pets, handleSelectedCard } = this.props;
    const onSelectedCard = pet => {
      handleSelectedCard(pet);
    };
    return (
      <div>
        <Carousel />
        <SearchCard>
          <SearchNavbar></SearchNavbar>
          <br></br>
          <InputSearch placeholder="Digite a espécie ou cidade do pet" />
          <br></br>
          <ButtonSearch></ButtonSearch>
          <br></br>
          <AdvancedButtonSearch></AdvancedButtonSearch>
        </SearchCard>
        <h2 className="h2-title">Últimos pets adicionados</h2>

        <div className="all-cards">
          {pets.map(pet => (
            <PetCard onSelectedCard={onSelectedCard} key={pet.id} pet={pet} />
          ))}
        </div>

        <div></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pets: state.pet.pets
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     handleSelectedCard: pet => dispatch(selectCard(pet))
//   };
// }

export default connect(mapStateToProps)(Home);
