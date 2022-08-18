import axios from "axios";

const  axiosInstance = axios.create({
    baseURL : "https://hotel-booking00.herokuapp.com",
})

export default axiosInstance;