import React from 'react';

const Marker = React.createClass({
    componentDidMount: function() {
        console.log("Marker on mount");
    },
    render: function() {
        return false;
    }
});

export default Marker;