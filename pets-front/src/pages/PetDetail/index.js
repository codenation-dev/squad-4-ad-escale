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
              <div className="pet-detail">
                <div class="text-center">
                  <img className='pet-image-detail' src={pet.image}/>
                </div>
                <div className="pet-description">
                  Raça {pet.gender} Filhote {pet.size}
                  <div className="pet-info">
                    <span>{pet.city}</span>
                    <span class="badge badge-success">{pet.category}</span>
                  </div>
                </div>
                <section>
                  {pet.details}
                  In eu sapien lectus. Donec euismod facilisis congue. Mauris facilisis fermentum vulputate. Pellentesque pellentesque dictum arcu, nec maximus augue cursus vitae. Praesent eget enim porttitor, malesuada est in, efficitur quam. Integer commodo convallis ullamcorper. Praesent commodo nisi quis sollicitudin blandit. Quisque convallis interdum hendrerit.
                </section>
              </div>
             )
            })}
       </div>
    );
}

export default withRouter(PetDetail);