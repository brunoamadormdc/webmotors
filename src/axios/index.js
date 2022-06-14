import axios from 'axios'

export const webmotorsService = {
    getAll(path_name) {
       return axios.get(path_name,{withCredentials:false})
    },
}