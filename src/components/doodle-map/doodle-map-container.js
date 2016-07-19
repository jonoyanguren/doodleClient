import React from 'react';
import { connect } from 'react-redux';

import DoodleMap from './doodles-map';
import {LoadingPages} from '../loading-pages';

const DoodleMapContainer = ({doodles, err, isFetched}) => {
    if(!isFetched) {
        return <LoadingPages/>
    } else if (err === null) {
        return <DoodleMap doodles={doodles} />
    } else if (err) {
        return <h4>No doodles</h4>
    }
};

const mapState = state => state.doodles;

export default connect(mapState)(DoodleMapContainer);