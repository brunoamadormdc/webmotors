import axios from 'axios'

const HTTP = axios.create({
    baseURL: 'https://desafioonline.webmotors.com.br/',

})

export const webmotorsService = {
    getAll(path_name) {
       return HTTP.get(path_name,{withCredentials:false})
    },
}