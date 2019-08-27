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
import * as thunks from "./thunk";

class Register extends Component {
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

  handleRegister = event => {
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

    if (isLogged) return <Redirect to="/" />;
    if (!isLogged && tryLogin) {
      return <p></p>; //<Modal showModal={true} title="Falha" message="E-mail e/ou senha incorretos." />
    }

    return (
      <div className="div-center">
        <p className="p-title">Cadastre-se</p>

        <form>
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
        </form>
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
    isLogged: state.isLogged,
    tryLogin: state.tryLogin
  };
}

export default connect(mapStateToProps)(Register);
