import React, { Component } from 'react'
import { withRouter } from 'react-router';
import mock from '../../_assets/mock.json'
import PetCard from '../../components/PetCard'
import './pet-search.css';

class PetSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pets: []
    }
  }

  render() {
    return (
      <div className="search-container">
        <h4>Resultados da busca</h4>
        <PetCard />
      </div>
    );
  }

}

export default withRouter(PetSearch);