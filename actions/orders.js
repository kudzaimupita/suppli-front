import api, { api2 } from "../utils/api";
import { setAlert } from "./alert";
import Router from 'next/router';
import axios from 'axios'
import {
    GET_MY_ORDERS_FAIL,
    GET_MY_ORDERS_REQUEST,
    GET_MY_ORDERS_SUCCESS,
    CREATE_ORDER_FAIL,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_REQUEST
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


export const createOrderAction = (formData) => async (dispatch, getState) => {
    api2.defaults.headers.common['authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2Y0MjQ0YTQ4MDMwMmUxMDE2ZDE1YSIsImlhdCI6MTYyNDE5NTY1NiwiZXhwIjoxNjMxOTcxNjU2fQ.2C6T_EuQU9apD6E4hIVAZqETScEJkGJQ8mdrUzaL2Hg`;
    dispatch({
        type: CREATE_ORDER_REQUEST,
    });

    try {
        const res = await api2.post('/orders/create-session', formData);

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
