import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.10.177:5555',

});

export default api;