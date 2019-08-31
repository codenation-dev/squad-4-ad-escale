import React, { Component } from "react";
import "./header.css";
import logopetcodes from "../../_assets/img/logo-petcodes.png";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { isLogged } = this.props;
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
          <Link to="/">
            <img src={logopetcodes} alt="Logo" className="navbar-logo" />
          </Link>
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
              <Link to="/">Home</Link>
            </li>
            {!isLogged ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Cadastrar</Link>
                </li>
              </>
            ) : null}

            {isLogged ? (
              <>
                <li>
                  <Link to="/profile">Perfil</Link>
                </li>
                <li>
                  <Link to="/my-pets">Meus Pets</Link>
                </li>
                <li>
                  <Link to="/pet-create">Add Pet</Link>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.login.isLogged
  };
}

export default connect(mapStateToProps)(Header);
