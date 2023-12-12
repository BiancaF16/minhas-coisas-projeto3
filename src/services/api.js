import axios from 'axios';

const api = axios.create({
    baseURL: 'ip'

});

export default api;