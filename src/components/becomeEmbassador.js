import React, {Component} from 'react';

class BecomeEmbassador extends Component {

    render() {

        return (
            <div>
                <h3>Want to become an embassador</h3>
                <Link to="/register" type="submit" className="btn btn-primary">Start today</Link>
            </div>
        );
    }
}

export default BecomeEmbassador;
