import React, { Component } from 'react';
import SearchNavbar from '../../components/SearchNavbar'
import SpeciesList from '../../components/SpeciesList'

class AdvancedSearch extends Component {
  render() {
    return (
      <div>
        <p className="title">Busca Avançada</p>
        <SearchNavbar></SearchNavbar>
        <br></br>
        <SpeciesList />
      </div>

    )
  }
}

export default AdvancedSearch; 