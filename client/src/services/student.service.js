import config from 'config';
import {authHeader, handleResponse } from '../helpers';


export const userService = {
    getAll,
    getById,
};

let getAll = () => {
    const requestOptions = { method:'GET', headers: authHeader()};
    return fetch(`${config.apiURL}/student`, requestOptions).then(handleResponse);
};

let getById = () => {
    const requestOptions = { method: 'GET', headers: authHeader()}; 
    return fetch(`${config.apiURL}/student/${id}`, requestOptions).then(handleResponse);
};
