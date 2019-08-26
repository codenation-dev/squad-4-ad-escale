import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { changeUsername, changePassword, } from './actions'
import InputLine from '../../components/InputLine'
import ButtonLogin from '../../components/ButtonLogin'
import Modal from '../../components/Modal'
import logo from '../../_assets/img/logo-login.png'
import './login.css';
import * as thunks from "./thunk";
import * as EmailValidator from 'email-validator';


class Login extends Component {


    onChangeUsername = (event) => {
        this.props.dispatch(changeUsername(event.target.value));
    }

    onChangePassword = (event) => {
        this.props.dispatch(changePassword(event.target.value));
    }

    handleLogin = (event) => {
        this.props.dispatch(thunks.login(this.props.username, this.props.password));
    }

    handleShowModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    render() {

        const { username, password, isLogged, tryLogin } = this.props;

        if (isLogged)
            return <Redirect to="/" />
        if (!isLogged && tryLogin) {
            return <p></p> //<Modal showModal={true} title="Falha" message="E-mail e/ou senha incorretos." />
        }

        return (
            <div className="div-center">
                <div className="div-logo">
                    <img className="img-logo" src={logo} />
                </div>
                <div className="div-input">
                    <InputLine placeholder="E-mail" value={username} onChange={this.onChangeUsername} />
                </div>
                <div className="div-input">
                    <InputLine placeholder="Senha" value={password} onChange={this.onChangePassword} />
                </div>
                <div className="div-right">
                    <Link to="/forgotPassword">
                        <p className="p-link">Esqueceu sua senha?</p>
                    </Link>
                </div>

                <ButtonLogin onClick={this.handleLogin} />
                <div className="row div-center-content">
                    <Link to="/register">
                        <p className="p-login">Não tem uma conta?</p> <p className="p-link">Cadastre-se</p>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        username: state.username,
        password: state.password,
        isLogged: state.isLogged,
        tryLogin: state.tryLogin
    }
}

export default connect(mapStateToProps)(Login); 