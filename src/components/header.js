import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    state = {
        value: "Jon"
    };

    doLogout() {
        localStorage.clear();
        window.location.pathname = "/";
    }

    render() {
        const username = localStorage.getItem("username");
        const productor = username && localStorage.getItem("type") == "productor";
        const ambassador = username && localStorage.getItem("type") == "ambassador";

        return (
            <header>
                <div className="row">
                    <div className="col-lg-2">
                        <Link to="/">
                            <img className="logo" src="/doodleClient/img/logo.png"/>
                        </Link>
                    </div>
                    <div className="col-lg-10">
                        <div className="nav">
                            <Link to="/create-doodle">Crear Doodle</Link>
                            <Link to="/doodlesMap">Mapa Doodles</Link>
                        </div>
                        <div className="auth-nav">
                            {
                                !username ? <div>
                                    <Link className="btn btn-red" to="/registerAmbassador">Register ambassador</Link>
                                    <Link className="btn btn-red" to="/registerProductor">Register productor</Link>
                                    <Link className="btn btn-red" to="/login">Login</Link>
                                </div> : null
                            }
                            {
                                productor ? <Link to="/productor-dashboard">Hi {username}</Link> : null
                            }
                            {
                                ambassador ? <Link to="/ambassador-dashboard">Hi {username}</Link> : null
                            }
                            {
                                username ? <a className="btn btn-red" onClick={this.doLogout.bind(this)}>Logout</a> : null
                            }
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;