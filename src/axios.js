import axios from "axios";

/**
 * Axios instance for making HTTP requests.
 *
 * @type {import("axios").AxiosInstance}
 */
const instance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers:{
        "Content-Type": "application/json"
    }
})

export default instance;