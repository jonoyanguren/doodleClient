import axios from 'axios';

export const FETCH_DOODLES = 'FETCH_DOODLES';
export const RECEIVE_ALL_DOODLES = 'RECEIVE_ALL_DOODLES';

export const RECEIVE_ONE_DOODLE = 'FETCH_ONE_DOODLE';

export const CREATE_DOODLE = 'CREATE_DOODLE';
export const REGISTER_AMBASSADOR = 'REGISTER_AMBASSADOR';
export const REGISTER_PRODUCTOR = 'REGISTER_PRODUCTOR';

export const LOGIN = 'LOGIN';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

export const FETCH_AMBASSADORS = 'FETCH_AMBASSADORS';
export const FETCH_AMBASSADORS_BY_VALUE = 'FETCH_AMBASSADORS_BY_VALUE';

// const BASE_URL = 'http://localhost:3131';
const BASE_URL = 'https://doodle-api.herokuapp.com';


export const fetchDoodles = (doodles) => {

    const promise = new Promise((resolve, reject) => {
        const request = axios
            .get(`${BASE_URL}/doodle/all`)
            .then(res => resolve(res.data.doodles))
            .catch(err => reject(err));
    });

    return {
        type: RECEIVE_ALL_DOODLES,
        payload: promise
    }
};

export const fetchOneDoodle = (route) => {
    const promise = new Promise((resolve, reject) => {
        const request = axios
            .get(`${BASE_URL}/doodle/individual/${route.params.id}`)
            .then(res => resolve(res.data.doodle))
            .catch(err => reject(err));
    });

    return {
        type: RECEIVE_ONE_DOODLE,
        payload: promise
    }
};

export function createDoodle(data) {
    debugger;
    var doodleObject = {
        name: data.props.name,
        endsAt: data.endsAt.toDate(),
        packagingType: data.props.packagingType,
        products: data.products,
        description: data.props.description,
        ambassadorId: data.ambassadorId
    };

    debugger;

    const request = axios.post(`${BASE_URL}/doodle/save`, doodleObject);

    return {
        type: CREATE_DOODLE,
        payload: request
    }
}

export function registerAmbassador(data) {
    const promise = new Promise((resolve, reject) => {
        const request = axios
            .post(`${BASE_URL}/auth/register/ambassador`, data)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });

    return {
        type: REGISTER_AMBASSADOR,
        payload: promise
    }
}

export function registerProductor(data) {
    const promise = new Promise((resolve, reject) => {
        const request = axios
            .post(`${BASE_URL}/auth/register/productor`, data)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });

    return {
        type: REGISTER_PRODUCTOR,
        payload: promise
    }
}

export const doLogin = (data) => {
    const promise = new Promise((resolve, reject) => {
        const request = axios
            .post(`${BASE_URL}/auth/login`, data)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });

    return {
        type: LOGIN,
        payload: promise
    }
};

// export function doLogin(data) {
//
//     const promise = new Promise((resolve, reject) => {
//         const request = axios.post(`${BASE_URL}/auth/login`, data);
//     })
//
//
//     return {
//         type: LOGIN,
//         payload: promise
//     }
// }
//
// export const doLogin = (data) => {
//     const getData = () => {
//         return {
//             name: JSON.parse(localStorage.setItem("username")),
//             type: JSON.parse(localStorage.setItem("type")3),
//             token: JSON.parse(localStorage.setItem("token")),
//             id: JSON.parse(localStorage.setItem("id"))
//         }
//     }
//     const promise = new Promise((resolve, reject) => {
//         const request = axios.post(`${BASE_URL}/auth/login`, getData());
//     });
//
//     return {
//         type: RECEIVE_USER_DATA,
//         payload: promise
//     }
// }
//
// // Save in the localstorage
// //             localStorage.setItem("username", action.payload.data.name);
// //             localStorage.setItem("type", action.payload.data.type);
// //             localStorage.setItem("token", action.payload.data.token);
// //             localStorage.setItem("id", action.payload.data.id);

export function getAllAmbassadors() {
    const request = axios.get(`${BASE_URL}/ambassadors/all`);

    return {
        type: FETCH_AMBASSADORS,
        payload: request
    }
}

export function getAmbassadorsByValue(val) {

    const promise = new Promise((resolve, reject) => {
        const request = axios
            .get(`${BASE_URL}/ambassadors/value/${val}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err));
    });

    return {
        type: FETCH_AMBASSADORS_BY_VALUE,
        payload: promise
    }
}
