import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const GoogleMap = React.createClass({
    componentDidMount: function() {
        var mapOptions = {
            center: this.createLatLng(this.props.center),
            zoom: this.props.zoom || 14
        };

        var map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);

        //Render all the markers (children of this component)
        React.Children.map(this.props.children, (child) => {
            //If has places child display places
            if(!child) {
                return;
            }

            if(child.type.displayName == "Places") {
                var input = this.refs.search;
                map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
                var autocomplete = new google.maps.places.Autocomplete(input);
                autocomplete.bindTo('bounds', map);

                autocomplete.addListener('place_changed', function() {
                    var place = autocomplete.getPlace();
                    if (!place.geometry) {
                        window.alert("Autocomplete's returned place contains no geometry");
                        return;
                    }

                    // If the place has a geometry, then present it on a map.
                    if (place.geometry.viewport) {
                        map.fitBounds(place.geometry.viewport);
                    } else {
                        map.setCenter(place.geometry.location);
                        map.setZoom(17);  // Why 17? Because it looks good.
                    }
                });
            } else {
                //render markers
                var markerOptions = {
                    position: this.createLatLng(child.props.position),
                    title: child.props.title || "",
                    animation: google.maps.Animation.DROP,
                    icon: child.props.icon || null,
                    draggable: child.props.draggable,
                    map: map
                };

                var marker = new google.maps.Marker(markerOptions);

                if(child.props.draggable) {
                    marker.addListener('dragend', child.props.onDragendEvent.bind(event))
                }


                if(child.props.info) {
                    var infowindow = new google.maps.InfoWindow({
                        content: child.props.info
                    });

                    marker.addListener('click', function() {
                        infowindow.open(map, marker);
                    });
                }
            }


        });

        this.setState({map});
    },
    createLatLng: function(element) {
        if(element) {
            return new google.maps.LatLng(element.lat, element.lng);
        }
    },
    render: function() {
        return (
            <div className="map" style={this.props.style}>
                <input ref="search" className="search-input"/>
            </div>
        )
    }
});

export default GoogleMap;