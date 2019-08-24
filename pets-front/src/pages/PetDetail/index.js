import React, { Component } from 'react'
import './pet-detail.css'

class PetDetail extends Component {
    render() {
        return (
            <div>
              <img className='pet-image-detail' src='https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=H0FcH69a'/>
              <div className="pet-description">
                Raça Sexo Filhote Cor
                <p>Santo André</p>

              </div>
            </div>
        )
    }
}

export default PetDetail;