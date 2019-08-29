import React, { Component } from 'react';
import './form-pet.css';
import 'react-dropdown/style.css'
import Dropdown from '../Dropdown'
import InputSearch from '../InputSearch';
import ItemSelected from '../ItemSelected';
import ButtonSubmit from '../ButtonSubmit'

const options = [
    'cachorro', 'gato', 'coelho', 'roedor'
]

const defaultOption = options[0]

class FormPet extends Component {
    constructor(props) {
        super(props);
        this.state = { picture: '', picturePreview: '' };
    }

    render() {
        const {
            type,
            urlImage,
            size,
            gender,
            category,
            localization,
            description,
            isCreated } = this.props.value;

        return (


            <form onSubmit={this.props.handleSubmit}>

                <div className="row">
                    <p className="label">Tipo</p>
                </div>
                <div className="row">
                    <Dropdown onChange={this.props.onChangeType} value={type} />
                </div>

                <div className="row row-margin">
                    <p className="label">Cole o link da foto do pet</p>
                </div>
                <div className="row">
                    <InputSearch 
                    placeholder="Ex: https://www.petrolfordogs.com/wp-content/uploads/2018/01/pup-1.png"
                     value={urlImage} 
                     onChange={this.props.onChangeUrlImage}
                     />
                     
                </div>

                <div className="row row-margin" >
                    <p className="label">Porte do pet</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ItemSelected text="Pequeno" />
                    </div>
                    <div className="col-4">
                        <ItemSelected text="Médio" />
                    </div>
                    <div className="col-4">
                        <ItemSelected text="Grande" />
                    </div>
                </div>

                <div className="row row-margin" >
                    <p className="label">Sexo</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ItemSelected text="Macho" />
                    </div>
                    <div className="col-4">
                        <ItemSelected text="Fêmea" />
                    </div>
                </div>

                <div className="row row-margin" >
                    <p className="label">Categoria</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ItemSelected text="Achado" />
                    </div>
                    <div className="col-4">
                        <ItemSelected text="Perdido" />
                    </div>
                    <div className="col-4">
                        <ItemSelected text="Adoção" />
                    </div>
                </div>

                <div className="row row-margin">
                    <p className="label">Digite sua cidade</p>
                </div>
                <div className="row">
                    <InputSearch placeholder="Ex: São Paulo" onChange={this.props.onChangeLocalization} value={localization} /> <br />
                </div>

                <div className="row row-margin">
                    <p className="label">Descrição</p>
                </div>
                <div className="row">
                    <InputSearch placeholder="Descreva algo sobre o pet" onChange={this.props.onChangeDescription} value={description} /> <br />
                </div>

                <ButtonSubmit/>

            </form>
        )
    }
}

export default FormPet; 