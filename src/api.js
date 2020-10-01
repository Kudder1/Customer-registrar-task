import axios from 'axios';

const userAPI = axios.create({
    baseURL: "https://5f721ff764a3720016e61508.mockapi.io/",
    headers: {
        'Content-type': 'application/json'
    }
})

const randomFactAPI = axios.create({
    baseURL: "https://meowfacts.herokuapp.com/",
    headers: {
        'Content-type': 'application/json'
    }
})

export {
    userAPI,
    randomFactAPI
}