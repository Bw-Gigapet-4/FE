import axios from 'axios';

export function getToken () {
    return localStorage.getItem("token")
}

export function setToken (token) {
    return localStorage.setItem("token", token)
}

export function clearToken () {
    return localStorage.removeItem("token")
}

export const AxiosWithAuth = () => {
    return axios.create({
        baseURL: "https://gigapetapi.herokuapp.com/api/",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
}