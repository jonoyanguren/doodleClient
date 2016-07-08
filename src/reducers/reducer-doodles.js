import {FETCH_DOODLES} from '../actions/index';

const INITIAL_STATE = {all: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_DOODLES:
            if(action.error) {
                return{error: action.error, message: "Error: " + action.payload.error}
            }
            return {...state, all: action.payload.data.doodles};
        default:
            return state;
    }
}