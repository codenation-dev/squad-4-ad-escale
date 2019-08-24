import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './pet-card.css'
import mock from '../../_assets/mock.json'

class PetCard extends Component {

    render() {

        return (
          <>
          <h2 className="h2-title">Últimos pets encontrados</h2>
          <div class="all-cards">
            {mock.results.map((pets) => (
              <Link to="/pet-detail">
                <div className="card">
                    <img className='pet-image' src={pets.image}/>
                  <div className="pet-info">
                    <p>{pets.pet}</p>
                    <p>{pets.city}</p>
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