import { SERVER_URL } from '../const';
import axios from 'axios';

function signin(email, password) {
    return new Promise((resolve, reject) => {
        const data = {
            username: email,
            password: password
        };
        axios.post(SERVER_URL + "/login", data, {"Access-Control-Allow-Origin": "*"})
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });

    });
}

function signup(email, password) {
    return new Promise((resolve, reject) => {
        const data = {
            username: email,
            password: password
        };
        axios.post(SERVER_URL + "/register", data)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });

    });
}

function signout() {
    return new Promise((resolve, reject) => {
        //TODO: Remove possible tokens, and login cache
        let removed = true;
        if (removed){
            resolve();
        }
        else {
            reject("Error while signing out");
        }
    });
}

export {
    signin,
    signup,
    signout
};