import axios from 'axios';
// import { storee } from '../store/store';

// console.log(storee.getState().auth1 && storee.getState().auth1.token);

const api = axios.create({
    baseURL: 'https://suppli-api.herokuapp.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
