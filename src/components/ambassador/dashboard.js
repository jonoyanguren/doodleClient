import React, {Component} from 'react';

class AmbassadorDashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div>
                    <button className="btn btn-primary btn-lg button-big">Ver mi perfil</button>
                </div>
                <div>
                    <button className="btn btn-warning btn-lg button-big">Ver mis doodles</button>
                </div>
            </div>
        );
    }
}

export default AmbassadorDashboard;