import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { handleResponse } from '../helpers';


const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage
    .getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value}
}


const login = (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringif({ email, password })
    };
    
    return fetch(`${config.apiURL}/student/login`)
}
