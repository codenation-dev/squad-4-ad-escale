import React, { Component } from 'react';
import './register.css';
import InputLine from '../../components/InputLine'
import InputLinePassword from '../../components/InputLinePassword'
import ButtonSubmit from '../../components/ButtonSubmit'


class Register extends Component {

    render() {


        return (
            <div className="div-center">
                <p className="p-title">Cadastre-se</p>
                
                <form>
                <InputLine placeholder="Nome" />   

                <InputLine placeholder="Telefone" />

                <InputLine placeholder="E-mail" />

                <InputLinePassword placeholder="Senha" />

                <InputLinePassword placeholder="Confirme sua senha" />   

                <ButtonSubmit />
                </form>
            </div>

        )
    }
}

export default Register; 