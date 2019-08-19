import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './pet-card.css'

class PetCard extends Component {
    render() {
        return (
          <Link to="/pet-detail">
            <div className="card">
                <img className='pet-image' src='https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=H0FcH69a'/>
              <div className="pet-info">
                <p>Gato - SRD</p>
                <p>São Paulo</p>
              </div>
          </div>
        </Link>
        )
    }
}

export default PetCard