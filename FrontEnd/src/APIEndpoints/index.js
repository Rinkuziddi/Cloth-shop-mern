import axios from "axios";
const token = localStorage.getItem("TOKEN");
console.log("TOKEN", token);

export const CREATE_USER = (body) =>
    axios.post('http://localhost:8080/auth/register', body).then((response) => {
        return response;
    });

export const LOGIN = (body) =>
    axios.post('http://localhost:8080/auth/login', body).then((response) => {
        return response;
    });

export const GET_SIDEBAR = () =>
    axios.get('http://localhost:8080/sidebar', {
        headers: {
            Authorization: `${token}`
        }
    }).then((response) => {
        return response;
    });
