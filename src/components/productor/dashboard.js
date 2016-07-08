import React, {Component} from 'react';
import {Link} from 'react-router';

class ProductorDashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div>
                    <Link to="/create-doodle">
                        <button className="btn btn-primary btn-lg button-big">Create doodle</button>
                    </Link>
                </div>
                <div>
                    <button className="btn btn-warning btn-lg button-big">Ver mis doodles</button>
                </div>
            </div>
        );
    }
}

export default ProductorDashboard;