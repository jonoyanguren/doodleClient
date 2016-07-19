import React from 'react';
import { connect } from 'react-redux';

import { DoodleList } from './doodle-list';

import { LoadingPages } from '../loading-pages';

const DoodleListContainer = ({ doodles, err, isFetched }) => {
    if (!isFetched) {
        return <LoadingPages />
    }
    else if (err === null) {
        return <DoodleList doodles={doodles} />
    } else if (err) {
        return <h4>No doodles</h4>
    }
};

const mapState = state => state.doodles;

export default connect(mapState)(DoodleListContainer);
