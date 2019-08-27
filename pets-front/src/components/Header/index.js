import React, { Component } from "react";
import "./header.css";
import logopetcodes from "../../_assets/img/logo-petcodes.png";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    this.openMenu = () => {
      document.documentElement.classList.add("menu-ativo");
    };

    this.closeMenu = () => {
      document.documentElement.classList.remove("menu-ativo");
    };

    return (
      <div className="nav-bar">
        <button type="button" className="menu-abrir" onClick={this.openMenu}>
          <IoIosMenu size={25} />
        </button>
        <div href="#" className="navbar-brand">
          <img src={logopetcodes} alt="Logo" className="navbar-logo" />
        </div>
        <nav className="barra-nav">
          <button
            type="button"
            className="menu-fechar"
            onClick={this.closeMenu}
          >
            X
          </button>
          <ul className="menu-principal">
            <li>
            {/* TODO - Add opção de logout quando isLogged*/}
              <Link to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
