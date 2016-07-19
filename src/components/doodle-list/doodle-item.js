import React, {Component} from 'react';
import {FormattedDate} from '../formatted-date';
import {Link} from 'react-router';
export const DoodleItem = ({doodle}) => {
    const hasProducts = doodle.products.length != 0;
    var hasImages = false;

    if (hasProducts) {
        hasImages = doodle.products[0].images.length != 0;
    }

    return (
        <Link to={`/doodle/${doodle._id}`}>
            <div className="doodle-item">
                <div>
                    {
                        hasImages ?
                            <img src={doodle.products[0].images[0].secureUrl}/> :
                            <img src="/doodleClient/img/no-image-evangify.jpg"/>
                    }
                </div>
                <h4>{doodle.name}</h4>
                <div className="doodle-info">
                    Fecha fin: <FormattedDate date={doodle.endsAt}/>
                </div>
                <button className="btn btn-orange">Ver doodle</button>
            </div>
        </Link>
    )
}
