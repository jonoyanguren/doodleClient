import React, {Component} from 'react';
import GoogleMap from '../GoogleMap';
import Marker from '../Marker';
import Places from '../Places';
import {connect} from 'react-redux';
import {fetchDoodles} from '../../actions/index';

import {LoadingPages} from '../loading-pages';

class DoodlesMap extends Component {
    state = {
        center: null,
        marker: null,
        directions: null
    };

    componentWillMount() {
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
                icon="/doodleClient/img/markers/you-are-here.png"
            />
        )
    }

    createinfoWindow(doodle) {
        var result = `<div className="info-window">
                         <h3>${doodle.name}</h3>`;

        if (doodle.primaryImage) {
            result += `<div>
                          <img src=${doodle.primaryImage}/>
                       </div>`;
        }

        if (doodle.description) {
            result += `<div>
                          <p>${doodle.description}</p>
                       </div>`;
        }

        result += `</div>`;

        return result;
    }

    render() {
        if (!this.state.center) {
            return <LoadingPages />
        }

        return (
            <div>
                <GoogleMap
                    style={{height: '75vh'}}
                    center={this.state.center}
                    zoom={15}
                >
                    <Places />
                    {this.renderYouAreHereMarker()}

                    {
                        this.props.doodles.map((doodle, index) => {
                            // var info = `<h3>${doodle.name}</h3>`;
                            var info = this.createinfoWindow(doodle);

                            return (
                                <Marker
                                    key={index}
                                    position={doodle.deliveryAddress}
                                    icon="../../img/markers/marker.png"
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

export default DoodlesMap;
