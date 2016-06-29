import React, {Component} from 'react';
import GoogleMap from './GoogleMap';
import Marker from './Marker';
import Places from './Places';
import {connect} from 'react-redux';
import {fetchDoodles} from '../actions/index';

class DoodlesMap extends Component {
    state = {
        center: null,
        marker: null,
        directions: null
    };

    componentWillMount() {
        this.props.fetchDoodles();

        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                marker: {
                    position: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                }
            });


        });
    }

    renderYouAreHereMarker() {
        return (
            <Marker
                position={this.state.center}
                icon="/img/marker.png"
            />
        )
    }

    render() {

        if (!this.state.center) {
            return (
                <div>Loading...</div>
            )
        }

        if (!this.props.doodles) {
            return (<p>No hay doodles</p>);
        }

        console.log(this.props.doodles);

        return (
            <div>
                <GoogleMap
                    style={{height: '89vh'}}
                    center={this.state.center}
                    zoom={15}
                >
                    <Places />
                    {this.renderYouAreHereMarker()}

                    {
                        this.props.doodles.map((doodle, index) => {
                            var info = `<h3>${doodle.name}</h3>`;

                            return (
                                <Marker
                                    key={index}
                                    position={doodle.deliveryAddress}
                                    icon="/img/marker.png"
                                    info={info}
                                />
                            )
                        })
                    }

                </GoogleMap>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {doodles: state.doodles.all}
}

export default connect(mapStateToProps, {fetchDoodles})(DoodlesMap);