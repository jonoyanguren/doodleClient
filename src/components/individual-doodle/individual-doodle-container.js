import React from 'react';
import { connect } from 'react-redux';

import { IndividualDoodle } from './individual-doodle';

import { LoadingPages } from '../loading-pages';

const IndividualDoodleContainer = ({ doodle, err, isFetched }) => {
    if (!isFetched) {
        return <LoadingPages />
    }
    else if (err === null) {
        return <IndividualDoodle doodle={doodle} />
    } else if (err) {
        return <h4>No doodles</h4>
    }
};

const mapState = state => state.doodle;

export default connect(mapState)(IndividualDoodleContainer);
