import React from 'react';

export const SearchBar = ({handleChange}) =>
    <div className="search">
        <h4>Los últimos doodles</h4>
        <div className="search-box">
            <input placeholder="Look for a doodle" onChange={handleChange.bind(this)}/>
            <button className="btn btn-primary"><img src="/doodleClient/img/search-icon.png"/></button>
        </div>
    </div>
