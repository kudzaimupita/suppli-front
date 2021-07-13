import api from '../utils/api';
import { setAlert } from './alert';
import { getUserFeedProducts } from './products';
import Router from 'next/router';
import { login as authLogin, logOut as signOut } from '../store/auth/action';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    REGISTER_REQUEST,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    UPDATE_ME_REQUEST,
    UPDATE_ME_FAIL,
    UPDATE_ME_SUCCESS,
    UPDATE_MY_PASSWORD_FAIL,
    UPDATE_MY_PASSWORD_REQUEST,
    UPDATE_MY_PASSWORD_SUCCESS,
        FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS
} from '../constants/authConstants';

import // GET_MY_PLUG_REQUEST,
// GET_MY_PLUG_SUCCESS,
// GET_MY_PLUG_FAIL,
'../constants/vendorConstants';
import { GET_CATERGORIES_FAIL } from '../constants/catergoryConstants';
// import { GET_UNBALANCED_SALES_FAIL } from '../constants/orderConstants';

export const updateMe = (formData) => async (dispatch, getState) => {
    api.defaults.headers.common['authorization'] = `Bearer ${
        getState().auth1.token
    }`;
    dispatch({
        type: UPDATE_ME_REQUEST,
    });

    try {
        const res = await api.patch(`/users/updateme`, formData);

        dispatch({
            type: UPDATE_ME_SUCCESS,
            payload: res.data,
        });
        dispatch(setAlert('Details updated', 'success'));
        // dispatch(loadUser());
    } catch (err) {
        console.log(err);

        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'success')));
        }

        dispatch({
            type: UPDATE_ME_FAIL,
        });
    }
};
export const updateMyPassword = (formData) => async (dispatch, getState) => {
    api.defaults.headers.common['authorization'] = `Bearer ${
        getState().auth1.token
    }`;
    dispatch({
        type: UPDATE_MY_PASSWORD_REQUEST,
    });

    try {
        const res = await api.patch(`/users/updatemypassword`, formData);

        dispatch({
            type: UPDATE_MY_PASSWORD_SUCCESS,
            payload: res.data,
        });
//         dispatch(setAlert('Password updated', 'success'));
        dispatch(logout());
        dispatch(signOut());
    } catch (err) {
        console.log(err);

        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'success')));
        }

        dispatch({
            type: UPDATE_MY_PASSWORD_FAIL,
        });
    }
};

// export const facebook = () => (dispatch) => {
//     console.log('win');
//     dispatch({
//         type: REGISTER_REQUEST,
//     });

//     try {
//         const res = api.get('/users/facebook');

//         dispatch({
//             type: REGISTER_SUCCESS,
//             payload: res.data,
//         });

//         dispatch(loadUser());
//         dispatch(loadMyPlug());
//         dispatch(setAlert('Welcome!', 'success'));
//     } catch (err) {
//         console.log(err);

//         const errors = err.response.data.error;

//         const errorArray = errors.split(',');

//         if (errorArray) {
//             errorArray.map((error) => dispatch(setAlert(error, 'success')));
//         }

//         dispatch({
//             type: REGISTER_FAIL,
//         });
//     }
// };
// // Register User
export const register = (formData) => async (dispatch, getState) => {
    dispatch({
        type: REGISTER_REQUEST,
    });

    try {
        const res = await api.post('/users/signup', formData);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        dispatch(authLogin());
        localStorage.setItem('token', res.data.token);

        //         dispatch(setAlert('Welcome!', 'success'));
    } catch (err) {
        console.log(err);

        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'success')));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

export const login = (formData) => async (dispatch, getState) => {
    console.log(getState());
    dispatch({
        type: LOGIN_REQUEST,
    });

    try {
        const res = await api.post('/users/login', formData);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        console.log(res.data);
        api.defaults.headers.common[
            'authorization'
        ] = `Bearer ${res.data.token}`;
        localStorage.setItem('token', res.data.token);
        dispatch(loadUser());
        //         dispatch(setAlert('Welcome!', 'success'));
    } catch (err) {
        console.log(err);

        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'warning')));
        }

        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

export const loadUser = () => async (dispatch, getState) => {
    console.log(getState().auth1.token);
    api.defaults.headers.common['authorization'] = `Bearer ${
        getState().auth1.token
    }`;
    dispatch({
        type: REGISTER_REQUEST,
    });

    try {
        const res = await api.get('/users/me');

        dispatch({
            type: USER_LOADED,
            payload: res.data.data.doc,
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

// export const loadMyPlug = () => async (dispatch) => {
//     dispatch({
//         type: GET_MY_PLUG_REQUEST,
//     });

//     try {
//         const res = await api.get('/vendors/myplug');
//         // if(!res.data.data.vendor){
//         //     return dispatch(setAlert('Sorry you dont have a shop', 'danger'))
//         //   }
//         dispatch({
//             type: GET_MY_PLUG_SUCCESS,
//             payload: res.data.data.vendor,
//         });

//         console.log(res.data.data.vendor);
//     } catch (err) {
//         console.log(err);
//         dispatch({
//             type: GET_MY_PLUG_FAIL,
//         });
//     }
// };

export const forgotPassword = (formData) => async (dispatch) => {
    dispatch({
        type: FORGOT_PASSWORD_REQUEST,
    });

    try {
        const res = await api.post('/users/forgotpassword', formData);
        // if(!res.data.data.vendor){
        //     return dispatch(setAlert('Sorry you dont have a shop', 'danger'))
        //   }
        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: res.data.data,
        });
        Router.push('/forgot-password-success')
    } catch (err) {
        console.log(err);

        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'warning')));
        }

        dispatch({
            type: FORGOT_PASSWORD_FAIL,
        });
    }
};

export const logout = () => async (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
    localStorage.removeItem('token');
};
