import axios from 'axios';

export const FETCH_DOODLES = 'FETCH_DOODLES';
export const CREATE_DOODLE = 'CREATE_DOODLE';

//const BASE_URL = 'http://localhost:3131';
const BASE_URL = 'https://doodle-api.herokuapp.com/';

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