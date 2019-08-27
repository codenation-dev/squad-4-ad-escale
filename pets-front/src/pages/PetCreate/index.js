import React, { Component } from 'react';
import { connect } from 'react-redux';
import './pet-create.css';
import FormPet from '../../components/FormPet'
import { changeType, changeUrlImage, changeSize, changeGender, changeCategory, changeLocalization, changeDescription } from './actions';

class PetCreate extends Component {

    onChangeType = (event) => {
        this.props.dispatch(changeType(event.value));
    }

    onChangeUrlImage = (event) => {
        this.props.dispatch(changeUrlImage(event.target.value));
    }

    onChangeSize = (event) => {
        this.props.dispatch(changeSize(event.target.value));
    }

    onChangeGender = (event) => {
        this.props.dispatch(changeGender(event.target.value));
    }

    onChangeCategory = (event) => {
        this.props.dispatch(changeCategory(event.target.value));
    }

    onChangeLocalization = (event) => {
        this.props.dispatch(changeLocalization(event.target.value));
    }

    onChangeDescription = (event) => {
        this.props.dispatch(changeDescription(event.target.value));
    }

    // handleCreate = (event) => {
    //     this.props.dispatch(thunks.login(this.props));
    // }


    render() {
        const { type, urlImage, size, gender, category, localization, description, isCreated } = this.props;

        return (
            <div className="div-center">
                <p className="p-title">Cadastrar pet</p>

                <FormPet
                    value={this.props}
                    onChangeType={this.onChangeType}
                    onChangeUrlImage={this.onChangeUrlImage}
                    onChangeSize={this.onChangeSize}
                    onChangeGender={this.onChangeGender}
                    onChangeCategory={this.onChangeCategory}
                    onChangeLocalization={this.onChangeLocalization}
                    onChangeDescription={this.onChangeDescription}
                />
            </div >


        )
    }
}

function mapStateToProps(state) {
    console.log(state.petCreate);
    return {
        type: state.petCreate.type,
        urlImage: state.petCreate.urlImage,
        size: state.petCreate.size,
        gender: state.petCreate.gender,
        category: state.petCreate.category,
        localization: state.petCreate.localization,
        description: state.petCreate.description,
        isCreated: state.petCreate.isCreated
    }
}

export default connect(mapStateToProps)(PetCreate); 