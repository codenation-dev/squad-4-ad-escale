import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './pet-search.css'
import mock from '../../_assets/mock.json'
import PetCard from '../../components/PetCard'
import './pet-search.css';
import cats from '../../_assets/pet-cats-db.json'
import dogs from '../../_assets/pet-dogs-db.json'
import pets from '../../_assets/all-pets-db.json'

class PetSearch extends Component {

  constructor(props) {
    super(props);

    console.log(cats);

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    let search = this.props.match.params.searchText;

    if (search === "cat") {
      this.setState({
        pets: cats.data.animals
      })
    }
    else if (search === "dog") {
      this.setState({
        pets: dogs.data.animals
      })
    }
    else {
      this.setState({
        pets: pets.data.animals
      })
    }

  }


  render() {
    return (
      <div className="search-container">
        <h4 className="title-pet">Resultados da busca</h4>
        <div className="row" style={{ justifyContent: "center" }}>
          {this.state.pets.map((pet) => (
            <PetCard pet={pet} />
          ))}
        </div>
      </div>
    );
  }

}

export default withRouter(PetSearch);