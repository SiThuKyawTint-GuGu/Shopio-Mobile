import axios from "axios";

const Ax = axios.create({
    baseURL:"Localhost:8000/api/"
})

export default Ax;