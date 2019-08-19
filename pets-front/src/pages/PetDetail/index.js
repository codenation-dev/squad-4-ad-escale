import React, { Component } from 'react'
import { withRouter } from 'react-router';
import mock from '../../_assets/mock.json'
import './pet-detail.css'

const PetDetail = ({ match }) => {
  const petId = match.params.id;

  const pets = mock.results.filter(pet => pet.id === petId)

    return (
        <div>
           {pets.map((pet) => {
             return (
              <div>
                <img className='pet-image-detail' src={pet.image}/>
                <div className="pet-description">
                  Raça Sexo Filhote Cor
                  <p>{pet.city}</p>
                </div>
              </div>
             )
            })}
       </div>
    );
}

export default withRouter(PetDetail);