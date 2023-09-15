import axios from 'axios'
const baseURL = 'http://localhost:8080'
const request =  axios.create({
    baseURL,
    timeout: 5000,
 })
export default request;