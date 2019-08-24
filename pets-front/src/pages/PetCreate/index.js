import React, { Component } from 'react';
import './pet-create.css';
import InputLine from '../../components/InputLine'
import InputLinePassword from '../../components/InputLinePassword'
//import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Dropdown from '../../components/Dropdown'

const options = [
    'cachorro', 'gato', 'coelho'
]

const defaultOption = options[0]

class PetCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { picture: '', picturePreview: '' };
    }

    render() {

        return (
            <div className="div-center">
                <p className="p-title">Perfil</p>

                <form>
                    <p className="label">Tipo</p> <br />
                    <Dropdown />
                </form>
            </div >


        )
    }
}

export default PetCreate; 