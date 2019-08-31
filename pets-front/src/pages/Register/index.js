import React, { Component } from "react";
import { Redirect } from "react-router";
import "./register.css";
import InputLine from "../../components/InputLine";
import InputLinePassword from "../../components/InputLinePassword";
import ButtonSubmit from "../../components/ButtonSubmit";
import { connect } from "react-redux";
import {
  changeUsername,
  changeTelephone,
  changeEmail,
  changePassword
} from "./actions";
import Modal from "../../components/Modal"
import * as thunks from "./thunk";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      redirect: false
    }
  }

  onChangeUsername = event => {
    this.props.dispatch(changeUsername(event.target.value));
  };

  onChangeTelephone = event => {
    this.props.dispatch(changeTelephone(event.target.value));
  };

  onChangeEmail = event => {
    this.props.dispatch(changeEmail(event.target.value));
  };

  onChangePassword = event => {
    this.props.dispatch(changePassword(event.target.value));
  };

  handleShowModal = (event) => {
    event.preventDefault();

    this.setState({ showModal: !this.state.showModal });

    if (this.state.showModal === true) {
      this.setState({
        redirect: true
      })
    }
  };

  handleRegister = event => {
    event.preventDefault();

    this.setState({
      showModal: true
    })

    this.props.dispatch(
      thunks.register(
        this.props.username,
        this.props.telephone,
        this.props.email,
        this.props.password
      )
    );
  };

  render() {
    const {
      username,
      telephone,
      email,
      password,
      isLogged,
      tryLogin
    } = this.props;


    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="div-center">
        <Modal showModal={this.state.showModal} onCloseModal={this.handleShowModal}

          title="Cadastrado"
          message="Seu cadastro foi realizado com sucesso." />

        <p className="p-title">Cadastre-se</p>

        <InputLine
          placeholder="Nome"
          value={username}
          onChange={this.onChangeUsername}
        />

        <InputLine
          placeholder="Telefone"
          value={telephone}
          onChange={this.onChangeTelephone}
        />

        <InputLine
          placeholder="E-mail"
          value={email}
          onChange={this.onChangeEmail}
        />

        <InputLinePassword
          placeholder="Senha"
          value={password}
          onChange={this.onChangePassword}
        />

        <InputLinePassword placeholder="Confirme sua senha" />

        <ButtonSubmit onClick={this.handleRegister} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    username: state.username,
    telephone: state.telephone,
    email: state.email,
    password: state.password,
    success: state.sucess
  };
}

export default connect(mapStateToProps)(Register);
