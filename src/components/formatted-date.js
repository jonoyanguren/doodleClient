import React from 'react';

export const FormattedDate = ({date}) => {
    var d = new Date(date);
    var formattedDate = d.getDay() + '-' + d.getMonth();
    return (
        <span>{formattedDate}</span>
    );
}