import axios from "axios";

export  const  axiosInstance = axios.create({
    baseURL : "https://hotel-booking00.herokuapp.com",
})