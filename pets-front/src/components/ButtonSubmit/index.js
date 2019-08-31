import React, { Component } from 'react'
import './button-submit.css';

class ButtonSubmit extends Component {
    render() {
        return (
            <button className="button-submit" onClick={(e) => this.props.onClick(e)}>
                Enviar
            </button>
        )
    }
}

export default ButtonSubmit;