import axios from 'axios';

// Wraps axios.get/post functions to automatically use paths relative to the API_URL
// Additionally if the token is stored in localStorage, add it to the request headers

// Creates a function url() that when given a path returns the URL relative to the API root
// const API_URL = process.env.REACT_APP_API_URL
const API_URL = 'http://localhost:3001'
const url = (path) => `${API_URL}/${path}`

// Adds the JWT token to the requestion configuration if it's stored in local storage
const configWithToken = (config = {}) => {
    // Get token from local storage
    let token = localStorage.getItem('token')
    // If we got the token
    if (token) {
        // Then create config.headers if it doesn't exist
        config.headers = config.headers || {}
        // And set the Authorization header to "Bearer <contents of token>"
        config.headers.Authorization = `Bearer ${token}`
    }
}

// Wrap get and post and export them for usage throughout the app
const get = (path, config) => axios.get(url(path), configWithToken(config))
const post = (path, data, config) => axios.post(url(path), data, configWithToken(config))

// To use these import them with `import {get, post} from './lib/api.js'`
export { get, post };
