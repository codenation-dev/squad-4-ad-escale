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
        this.state = {
            size: {
                smallActive: false,
                mediumActive: false,
                bigActive: false
            },
            gender: {
                maleActive: false,
                femaleActive: false
            },
            category: {
                findActive: false,
                lostActive: false,
                adoptionActive: false
            }
        }
    }

    onClickSize = (event) => {
        if (event.target.id === "small") {
            console.log(event.target);
            this.setState({
                size: {
                    smallActive: !this.state.size.smallActive,
                    mediumActive: false,
                    bigActive: false
                }

            })
        }
        else if (event.target.id === "medium") {
            this.setState({
                size: {
                    mediumActive: !this.state.size.mediumActive,
                    smallActive: false,
                    bigActive: false
                }
            })
        }
        else {
            this.setState({
                size: {
                    bigActive: !this.state.size.bigActive,
                    mediumActive: false,
                    smallActive: false
                }

            })
        }

        this.props.onChangeSize(event);
    }

    onClickGender = (event) => {
        if (event.target.id === "male") {
            console.log(event.target);
            this.setState({
                gender: {
                    maleActive: !this.state.gender.maleActive,
                    femaleActive: false
                }
            })
        }
        else {
            this.setState({
                gender: {
                    femaleActive: !this.state.gender.femaleActive,
                    maleActive: false
                }
            })
        }

        this.props.onChangeGender(event);
    }

    onClickCategory = (event) => {
        if (event.target.id === "find") {
            console.log(event.target);
            this.setState({
                category: {
                    findActive: !this.state.size.findActive,
                    lostActive: false,
                    adoptionActive: false
                }

            })
        }
        else if (event.target.id === "lost") {
            this.setState({
                category: {
                    findActive: false,
                    lostActive: !this.state.size.lostActive,
                    adoptionActive: false
                }
            })
        }
        else {
            this.setState({
                category: {
                    findActive: false,
                    lostActive: false,
                    adoptionActive: !this.state.size.adoptionActive
                }

            })
        }

        this.props.onChangeCategory(event);
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
                        <ItemSelected
                            isActive={this.state.size.smallActive}
                            onClick={this.onClickSize}
                            value="small"
                            text="Pequeno" />
                    </div>
                    <div className="col-4">
                        <ItemSelected
                            isActive={this.state.size.mediumActive}
                            onClick={this.onClickSize}
                            value="medium"
                            text="Médio" />
                    </div>
                    <div className="col-4">
                        <ItemSelected
                            isActive={this.state.size.bigActive}
                            onClick={this.onClickSize}
                            value="big"
                            text="Grande" />
                    </div>
                </div>

                <div className="row row-margin" >
                    <p className="label">Sexo</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ItemSelected
                            isActive={this.state.gender.maleActive}
                            onClick={this.onClickGender}
                            value="male"
                            text="Macho" />
                    </div>
                    <div className="col-4">
                        <ItemSelected
                            isActive={this.state.gender.femaleActive}
                            onClick={this.onClickGender}
                            value="female"
                            text="Fêmea" />
                    </div>
                </div>

                <div className="row row-margin" >
                    <p className="label">Categoria</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ItemSelected
                            isActive={this.state.category.findActive}
                            onClick={this.onClickCategory}
                            value="find"
                            text="Achado" />
                    </div>
                    <div className="col-4">
                        <ItemSelected
                            isActive={this.state.category.lostActive}
                            onClick={this.onClickCategory}
                            value="lost"
                            text="Perdido" />
                    </div>
                    <div className="col-4">
                        <ItemSelected
                            isActive={this.state.category.adoptionActive}
                            onClick={this.onClickCategory}
                            value="adoption"
                            text="Adoção" />
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

                <ButtonSubmit />

            </form>
        )
    }
}

export default FormPet; 