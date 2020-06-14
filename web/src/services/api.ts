import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecoleta-imm.herokuapp.com/'
});

export default api;