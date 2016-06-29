import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    state = {
        value: "Jon"
    };

    render() {
        return (
            <header>
                <h1>Doodle client</h1>
                <ul className="nav">
                    <Link to="/createDoodle">Crear Doodle</Link>
                    <Link to="/doodlesMap">Mapa Doodles</Link>
                    <Link to="/doodlesList">Lista Doodles</Link>
                </ul>
            </header>
        );
    }
}

export default Header;