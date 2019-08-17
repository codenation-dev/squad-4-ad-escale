import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputLine from '../../components/InputLine'
import ButtonLogin from '../../components/ButtonLogin'
import logo from '../../_assets/img/logo-login.png'
import './login.css';


class Login extends Component {

    render() {


        return (
            <div className="div-center">
                <div className="div-logo">
                    <img className="img-logo" src={logo} />
                </div>
                <div className="div-input">
                    <InputLine placeholder="E-mail" />
                </div>
                <div className="div-input">
                    <InputLine placeholder="Senha" />
                </div>
                <div className="div-right">
                    <Link to="/forgotPassword">
                        <p className="p-link">Esqueceu sua senha?</p>
                    </Link>
                </div>

                <ButtonLogin />
                <div className="row div-center-content">
                    <Link to="/register">
                        <p className="p-login">Não tem uma conta?</p> <p className="p-link">Cadastre-se</p>
                    </Link>
                </div>
            </div>


        )
    }
}

export default Login; 