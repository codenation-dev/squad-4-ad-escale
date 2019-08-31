import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import "./pet-create.css";
import FormPet from "../../components/FormPet";
import {
  changeType,
  changeUrlImage,
  changeSize,
  changeGender,
  changeCategory,
  changeLocalization,
  changeDescription
} from "./actions";
import * as thunks from "./thunk";

class PetCreate extends Component {
  constructor(props) {
    super(props);
  }

  onChangeType = event => {
    this.props.dispatch(changeType(event.value));
  };

  onChangeUrlImage = event => {
    this.props.dispatch(changeUrlImage(event.target.value));
  };

  onChangeSize = event => {
    this.props.dispatch(changeSize(event.target.id));
  };

  onChangeGender = event => {
    this.props.dispatch(changeGender(event.target.id));
  };

  onChangeCategory = event => {
    this.props.dispatch(changeCategory(event.target.id));
  };

  onChangeLocalization = event => {
    this.props.dispatch(changeLocalization(event.target.value));
  };

  onChangeDescription = event => {
    this.props.dispatch(changeDescription(event.target.value));
  };

  handleCreate = event => {
    event.preventDefault();
    this.props.dispatch(thunks.createPet(this.props));
  };

  render() {
    const {
      type,
      urlImage,
      size,
      gender,
      category,
      localization,
      description,
      isCreated
    } = this.props;

    if (isCreated != undefined && isCreated != false) {
      alert("Pet cadastrado!");
      return <Redirect to="/" />;
    }

    return (
      <div className="div-center">
        <p className="p-title">Dados do Pet</p>

        <FormPet
          value={this.props}
          onChangeType={this.onChangeType}
          onChangeUrlImage={this.onChangeUrlImage}
          onChangeSize={this.onChangeSize}
          onChangeGender={this.onChangeGender}
          onChangeCategory={this.onChangeCategory}
          onChangeLocalization={this.onChangeLocalization}
          onChangeDescription={this.onChangeDescription}
          handleSubmit={this.handleCreate}
        />
      </div>
    );
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
  };
}

export default connect(mapStateToProps)(PetCreate);
