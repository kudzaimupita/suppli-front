import api from './api';

const setAuthToken = (token) => {
    console.log(token);
    if (token) {
        api.defaults.headers.common['authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['authorization'];
    }
};

export default setAuthToken;
