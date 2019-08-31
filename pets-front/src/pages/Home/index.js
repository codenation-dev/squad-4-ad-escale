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
  getPetsSuccess,
  changeSearch
} from "./actions";
import * as thunks from "./thunk";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(thunks.getPets());
  }

  onChangeSearchText = (event) => {
    let e = event;
    this.props.dispatch(changeSearch(event.target.value));
  }

  render() {
    console.log(this.props);
    const { pets, handleSelectedCard } = this.props;
    const onSelectedCard = pet => {
      handleSelectedCard(pet);
    };

    let search = ""

    if (this.props.searchText === "cachorro") {
      search = "dog"
    } else { search = "pets" }

    return (
      <div>
        <Carousel />
        <SearchCard>
          <SearchNavbar></SearchNavbar>
          <br></br>
          <InputSearch
            placeholder="Digite a espécie ou cidade do pet"
            onChange={this.onChangeSearchText}
            value={this.props.searchText}
          />
          <br></br>
          <Link to={`/pet-search/${search}`} >
            <ButtonSearch />
          </Link>
          <br></br>
          <AdvancedButtonSearch></AdvancedButtonSearch>
        </SearchCard>
        <h2 className="h2-title">Últimos pets adicionados</h2>

        <div className="all-cards">
          {pets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>

        <div></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pets: state.pet.pets,
    searchText: state.pet.searchText
  };
}

export default connect(mapStateToProps)(Home);
