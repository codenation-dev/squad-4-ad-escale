import React, { Component } from 'react'
import './header.css';
import logopetcodes from '../../_assets/img/logo-petcodes.png'


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-fixed-top navbar-inverse ">
                <div className="container">
                    <div className="navbar-header header">
                        <div href="#" className="navbar-brand">
                            <img src={logopetcodes} alt="Logo" className="navbar-logo" />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;