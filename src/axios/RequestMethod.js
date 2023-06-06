import axios from "axios"

const BASE_URL = "https://finalprojectbackend-production-331f.up.railway.app"

export const privateRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,

})