import {
    fetchDoodles,
    fetchOneDoodle,
    doLogin
} from './';

export const boundAllDoodles = (nextState, replaceState) => fetchDoodles(nextState);
export const boundOneDoodle = (nextState, replaceState) => fetchOneDoodle(nextState);

// export const boundUser = () => doLogin();
