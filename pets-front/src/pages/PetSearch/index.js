import React from 'react'
import { withRouter } from 'react-router';
import mock from '../../_assets/mock.json'
import PetCard from '../../components/PetCard'

const PetSearch = ({ match }) => {

    return (
      <PetCard />
    );
}

export default withRouter(PetSearch);