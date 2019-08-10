import React, { Component } from 'react'
import './pet-card.css'

class PetCard extends Component {
    render() {
        return (
          <div className="card">
              <img className='pet-image' src='https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=H0FcH69a'/>
            <div className="pet-info">
              <p>Gato - SRD</p>
              <p>São Paulo</p>
            </div>
        </div>
        )
    }
}

export default PetCard