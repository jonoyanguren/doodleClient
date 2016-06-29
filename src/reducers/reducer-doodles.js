import {FETCH_DOODLES} from '../actions/index';

const INITIAL_STATE = {all: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_DOODLES:
            return {...state, all: action.payload.data.doodles};
        default:
            return state;
    }
}