import React, { Component } from 'react'
import './button-login.css';

class ButtonLogin extends Component {
    render() {
        return (
            <button className="button-login"
                onClick={this.props.onClick}>
                Entrar
            </button>
        )
    }
}

export default ButtonLogin;