import {RECEIVE_ALL_DOODLES} from '../actions/index';

const INITIAL_STATE = {
    all: [],
    isFetched: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${RECEIVE_ALL_DOODLES}_PENDING`:
            return {};
        case `${RECEIVE_ALL_DOODLES}_FULFILLED`:
            return {
                doodles: action.payload,
                err: null,
                isFetched: true
            };
        case `${RECEIVE_ALL_DOODLES}_REJECTED`:
            return {
                doodles: null,
                err: action.payload,
                isFetched: true
            };
        default:
            return state;
    }
}
