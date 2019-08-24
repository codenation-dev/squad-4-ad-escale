import React from 'react'
import { withRouter } from 'react-router';
import mock from '../../_assets/mock.json'
import PetCard from '../../components/PetCard'
import './pet-search.css';

const PetSearch = ({ match }) => {

    return (
      <div className="search-container">
        <h2>Resultados da busca</h2>
        <PetCard />
      </div>
    );
}

export default withRouter(PetSearch);