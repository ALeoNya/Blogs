import axios from 'axios'
// const baseURL = 'http://localhost:3060'
const baseURL = 'http://43.142.32.223:3060'
const request =  axios.create({
    baseURL,
    timeout: 5000,
 })
export default request;