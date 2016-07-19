import {FETCH_AMBASSADORS_BY_VALUE} from '../actions/index';

export const AmbassadorsReducer = (state = {ambassadors: [], isFetched: false}, action) => {
    switch (action.type) {
        case `${FETCH_AMBASSADORS_BY_VALUE}_PENDING`:
            return {};
        case `${FETCH_AMBASSADORS_BY_VALUE}_FULFILLED`:
            return {
                ambassadors: action.payload,
                isFetched: true,
                err: null
            };
        case `${FETCH_AMBASSADORS_BY_VALUE}_REJECTED`:
            return {
                ambassadors: null,
                isFetched: true,
                err: action.payload
            }
        default:
            return state;
    }
}
