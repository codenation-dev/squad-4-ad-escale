import React, { Component } from 'react'
import './pet-card.css'

class PetCard extends Component {
    render() {
        return (
          <div className="card">
            <div className="pet-image"></div>
            <div className="pet-info">
              <p>Gato</p>
              <p>Porte Médio</p>
              <p>São Paulo</p>
            </div>
        </div>
        )
    }
}

export default PetCard