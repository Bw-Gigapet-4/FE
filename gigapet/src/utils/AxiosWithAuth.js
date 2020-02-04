import axios from 'axios';

export function getToken () {
    return localStorage.getItem("token")
}

export function setToken () {
    return localStorage.setItem("token", token)
}

export function clearToken () {
    return localStorage.removeItem("token")
}

export const AxiosWithAuth = () => {
    return axios.create({
        // baseURL: "",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
}