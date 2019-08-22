import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './pet-card.css'
import mock from '../../_assets/mock.json'

class PetCard extends Component {

    render() {

        return (
          <>
            <h2 className="h2-title">Últimos pets encontrados</h2>
            <div className="all-cards">
              {mock.results.map((pet) => (
                <Link to={`/pet-detail/${pet.id}`} key={pet.id}>
                  <div className="card">
                      <img className='pet-image' src={pet.image}/>
                    <div className="pet-info">
                      <p>{pet.pet}</p>
                      <p>{pet.city}</p>
                    </div>
                </div>
               </Link>
            ))}
          </div>
        </>
        )
    }
}

export default PetCard