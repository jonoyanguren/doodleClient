import React, {Component} from 'react';

class AmbassadorsList extends Component {
    render() {
        return (
            <div className="ambassadors-list">
                <h4>Ambassadors that match your search</h4>
                {
                    this.props.ambassadors.map((ambassador, index) => {
                        return (

                            <div
                                key={index}
                                className="list-group-item ambassador-item"
                                onClick={this.props.onClick.bind(this, ambassador)}>

                                {!ambassador.image ? <img src="img/no-image.jpg"/> : <img src={this.state.selectedAmbassador.image}/>}

                                {ambassador.name} - {ambassador.email}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default AmbassadorsList;