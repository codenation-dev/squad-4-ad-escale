import React, { Component } from 'react'
import './header.css';
import logopetcodes from '../../_assets/img/logo-petcodes.png'
import { IoIosMenu } from "react-icons/io";


class Header extends Component {
    render() {

        this.openMenu = () => {
            document.documentElement.classList.add('menu-ativo');
        }

        this.closeMenu = () => {
            document.documentElement.classList.remove('menu-ativo');
        }

        return (
            <div className="nav-bar">
                <button type="button"
                    className="menu-abrir"
                    onClick={this.openMenu}>
                    <IoIosMenu />
                </button>
                <div href="#" className="navbar-brand">
                    <img src={logopetcodes} alt="Logo" className="navbar-logo" />
                </div>
                <nav className="barra-nav">
                    <button type="button"
                        className="menu-fechar"
                        onClick={this.closeMenu}>
                        X
                    </button>
                    <ul className="menu-principal">
                        <li><a href="#">Entrar</a></li>
                        <li><a href="#">Cadastrar</a></li>
                    </ul>
                </nav>
		</div>
        )
    }
}

export default Header;