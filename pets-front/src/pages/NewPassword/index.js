import React, { Component } from 'react';
import './new-password.css';
import InputLine from '../../components/InputLine'
import ButtonLogin from '../../components/ButtonLogin'
import logo from '../../_assets/img/logo-password.png'


class NewPassword extends Component {


    render() {


        return (
            <div className="div-center">
                <div className="div-logo">
                    <img className="img-logo" src={logo} />
                </div>

                <div className="row div-center-content">
                    <p className="p-login">Uma nova senha será enviada</p>
                    <p className="p-login">para o e-mail solicitado abaixo</p>
                </div>

                <div className="div-input">
                    <InputLine placeholder="E-mail" />
                </div>

                <div className="div-input">
                    <ButtonLogin />
                </div>

                <div className="row div-center-content">
                    <p className="p-link">Cancelar</p>
                </div>

            </div>

        )
    }
}

export default NewPassword; 