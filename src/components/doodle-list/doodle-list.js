import React from 'react';

import {SearchBar} from '../searchBar';

import {DoodleItem} from './doodle-item';

export const DoodleList = ({doodles}) => {
    const handleChange = e => {
        e.preventDefault();
        console.log(e.target.value);
    };

    return (
        <div>
            <SearchBar handleChange={ handleChange }/>
            <div className="row doodle-list">
                {
                    doodles.map((item, index) => {
                        return (
                            <DoodleItem key={index} doodle={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
};