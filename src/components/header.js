import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    state = {
        value: "Jon"
    };

    render() {
        return (
            <header>
                <Link to="/">
                    <img className="logo" src="doodleClient/img/logo.png"/>
                </Link>
                <ul className="nav">
                    <Link to="/create-doodle">Crear Doodle</Link>
                    <Link to="/doodlesMap">Mapa Doodles</Link>
                    <Link to="/doodlesList">Lista Doodles</Link>
                    <Link to="/individual">Individual Doodle</Link>
                    <Link to="/registerAmbassador">Register ambassador</Link>
                    <Link to="/registerProductor">Register productor</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </header>
        );
    }
}

export default Header;