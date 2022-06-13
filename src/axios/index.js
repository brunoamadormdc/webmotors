import axios from 'axios'

const HTTP = axios.create({
    baseURL: process.env.REACT_APP_URL_WEBMOTORS,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    }
})

export const webmotorsService = {
    getAll(path_name) {
       return HTTP.get(path_name,{withCredentials:false})
    },
}