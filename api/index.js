import axios from 'axios'

const URL = 'https://fakestoreapi.com'

const axiosApi = axios.create({
    baseURL: URL
})

export default axiosApi