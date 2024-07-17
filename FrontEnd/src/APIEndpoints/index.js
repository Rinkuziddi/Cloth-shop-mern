import axios from "axios";

export const CREATE_USER = (body) =>
    axios.post('http://localhost:8080/auth/register', body).then((response) => {
        return response;
    });

export const LOGIN = (body) =>
    axios.post('http://localhost:8080/auth/login', body).then((response) => {
        return response;
    });