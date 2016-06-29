import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
    	 var divStyle = {
            position: "relative",
            float: "left",
            top: 25,
            width: "auto",
            height: 100
        };
        var inputStyle = {
        	position: "relative",
            float: "left",
            width: 900,
            height: 30
        }

        return(
            <div style={divStyle}>
                <input style={inputStyle}/>
                <button className="btn btn-primary">Search</button>
            </div>
        )
    }
}

export default SearchBar;