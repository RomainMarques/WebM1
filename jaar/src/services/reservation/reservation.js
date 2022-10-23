import { SERVER_URL } from '../const';
import axios from 'axios';

function addToCart(data,user) {
    return new Promise((resolve, reject) => {
        axios.post(SERVER_URL + "/cart/" + user, data)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function getCart(user) {
    return new Promise((resolve, reject) => {
        axios.get(SERVER_URL + "/cart/" + user)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function removeFromCart(data,user) {
    return new Promise((resolve, reject) => {
        axios.delete(SERVER_URL + "/cart/" + user, data)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function addToReservation(data,user) {
    return new Promise((resolve, reject) => {
        axios.post(SERVER_URL + "/reservation/" + user, data)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function getReservation(user) {
    return new Promise((resolve, reject) => {
        axios.get(SERVER_URL + "/reservation/" + user)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function removeFromReservation(data,user) {
    return new Promise((resolve, reject) => {
        axios.delete(SERVER_URL + "/reservation/" + user, data)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export {
    addToCart,
    getCart,
    removeFromCart,
    addToReservation,
    getReservation,
    removeFromReservation
}