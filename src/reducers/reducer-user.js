import {LOGIN} from '../actions/index';

const INITIAL_STATE = {user: {}, isFetched: false};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case `${LOGIN}_PENDING`:
            return {};
        case `${LOGIN}_FULFILLED`:
            // if(action.error) {
            //     return{error: action.error, message: "Error: " + action.payload.error}
            // }

            //Save in the localstorage
            localStorage.setItem("username", action.payload.name);
            localStorage.setItem("type", action.payload.type);
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("id", action.payload.id);

            return {
                ...state,
                user: action.payload,
                isFetched: true,
                err: null
            };
        case `${LOGIN}_REJECTED`:
            return {
                user: null,
                isFetched: true,
                err: action.payload
            }
        default:
            return state;
    }
}
