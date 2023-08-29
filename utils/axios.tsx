import axios from "axios"

const Axios =  axios.create({
    baseURL: "http://localhost:8000/",
    withCredentials: false,  
})

export default Axios;