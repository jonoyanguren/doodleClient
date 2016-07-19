import {RECEIVE_ONE_DOODLE} from '../actions/index';

const INITIAL_STATE = {
    doodle: {},
    isFetched: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${RECEIVE_ONE_DOODLE}_PENDING`:
            return {};
        case `${RECEIVE_ONE_DOODLE}_FULFILLED`:
            return {
                doodle: action.payload,
                err: null,
                isFetched: true
            };
        case `${RECEIVE_ONE_DOODLE}_REJECTED`:
            return {
                doodle: null,
                error: action.payload,
                isFetched: true
            };
        default:
            return state;
    }
}