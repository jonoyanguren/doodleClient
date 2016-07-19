import React, {Component} from 'react';
import { Link } from 'react-router';

class AmbassadorDashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <h3>Hi! {localStorage.getItem("username")}, what are you going to do today?</h3>
                <div>
                    <Link to={`/profile/${localStorage.getItem("id")}`}>
                        <button className="btn btn-primary btn-lg button-big">
                            Ver mi perfil
                        </button>
                    </Link>
                </div>
                <div>
                    <button className="btn btn-warning btn-lg button-big">Ver mis doodles</button>
                </div>
            </div>
        );
    }
}

export default AmbassadorDashboard;
