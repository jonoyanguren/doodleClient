import axios from 'axios';

export const FETCH_DOODLES = 'FETCH_DOODLES';
export const CREATE_DOODLE = 'CREATE_DOODLE';
export const REGISTER_AMBASSADOR = 'REGISTER_AMBASSADOR';
export const REGISTER_PRODUCTOR = 'REGISTER_PRODUCTOR';
export const LOGIN = 'LOGIN';
export const FETCH_AMBASSADORS = 'FETCH_AMBASSADORS';
export const FETCH_AMBASSADORS_BY_VALUE = 'FETCH_AMBASSADORS_BY_VALUE';

// const BASE_URL = 'http://localhost:3131';
const BASE_URL = 'https://doodle-api.herokuapp.com';

export function fetchDoodles() {
    const request = axios.get(`${BASE_URL}/doodle/all`);

    return {
        type: FETCH_DOODLES,
        payload: request
    }
}

export function createDoodle(data) {
    var doodleObject = {
        name: data.props.name,
        deliveryAddress: data.location,
        endsAt: data.endsAt.toDate(),
        packagingType: data.props.packagingType,
        products: data.products
    };

    const request = axios.post(`${BASE_URL}/doodle/save`, doodleObject);

    return {
        type: CREATE_DOODLE,
        payload: request
    }
}

export function registerAmbassador(data) {
    const request = axios.post(`${BASE_URL}/auth/register/ambassador`, data);

    return {
        type: REGISTER_AMBASSADOR,
        payload: request
    }
}

export function registerProductor(data) {
    const request = axios.post(`${BASE_URL}/auth/register/productor`, data);

    return {
        type: REGISTER_PRODUCTOR,
        payload: request
    }
}

export function doLogin(data) {
    const request = axios.post(`${BASE_URL}/auth/login`, data);

    return {
        type: LOGIN,
        payload: request
    }
}

export function getAllAmbassadors() {
    const request = axios.get(`${BASE_URL}/ambassadors/all`);

    return {
        type: FETCH_AMBASSADORS,
        payload: request
    }
}

export function getAmbassadorsByValue(val) {
    const request = axios.get(`${BASE_URL}/ambassadors/value/${val}`);

    return {
        type: FETCH_AMBASSADORS_BY_VALUE,
        payload: request
    }
}