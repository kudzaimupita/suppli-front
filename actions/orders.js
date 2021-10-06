import api from "../utils/api";
import { setAlert } from "./alert";
import Router from 'next/router';
import axios from 'axios'
import {
    GET_MY_ORDERS_FAIL,
    GET_MY_ORDERS_REQUEST,
    GET_MY_ORDERS_SUCCESS,
    CREATE_ORDER_FAIL,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_REQUEST, SET_CURRENT_ORDER,
    GET_ORDER_FAIL,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS
} from "../constants/orderConstants";

// Register User

export const getMyOrders = () => async (dispatch, getState) => {
    console.log(getState().auth1.token);
    api.defaults.headers.common['authorization'] = `Bearer ${getState().auth1.token
        }`;
    dispatch({
        type: GET_MY_ORDERS_REQUEST,
    });

    try {
        const res = await api.get("/orders/myorders");

        dispatch({
            type: GET_MY_ORDERS_SUCCESS,
            payload: res.data.data,
        });
        console.log(res.data.data);
    } catch (err) {
        const errors = err.response.data.error;

        const errorArray = errors.split(",");

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, "success")));
        }

        dispatch({
            type: GET_MY_ORDERS_FAIL,
        });
    }
};

export const getOrder = (id) => async (dispatch, getState) => {
    console.log(getState().auth1.token);
    api.defaults.headers.common['authorization'] = `Bearer ${getState().auth1.token
        }`;
    dispatch({
        type: GET_ORDER_REQUEST,
    });

    try {
        const res = await api.get(`orders/${id}`);

        dispatch({
            type: GET_ORDER_SUCCESS,
            payload: res.data.data,
        });
        console.log(res.data.data);
    } catch (err) {
        const errors = err.response.data.error;

        const errorArray = errors.split(",");

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, "error")));
        }

        dispatch({
            type: GET_ORDER_FAIL,
        });
    }
};

export const createOrderAction = (formData) => async (dispatch, getState) => {
    api.defaults.headers.common['authorization'] = `Bearer ${getState().auth1.token
        }`;
    dispatch({
        type: CREATE_ORDER_REQUEST,
    });

    try {
        const res = await api.post('/orders/create-session', formData);

        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: res.data.data,
        });
        // Router.push('/account/payment')
    } catch (err) {
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'warning')));
        }

        dispatch({
            type: CREATE_ORDER_FAIL,
        });
    }
};

export const setCurrentOrder = (order) => async (dispatch, getState) => {
    dispatch({
        type: SET_CURRENT_ORDER,
        payload: order
    });
};
