import api from '../utils/api';
import { setAlert } from './alert';

import {
    GET_CATERGORIES_FAIL,
    GET_CATERGORIES_SUCCESS,
    GET_CATERGORIES_REQUEST,
    GET_CATERGORY_FAIL,
    GET_CATERGORY_REQUEST,
    GET_CATERGORY_SUCCESS,
} from '../constants/catergoryConstants';

export const getCatergories = () => async (dispatch) => {
    dispatch({
        type: GET_CATERGORIES_REQUEST,
    });

    try {
        const res = await api.get('/catergories');

        dispatch({
            type: GET_CATERGORIES_SUCCESS,
            payload: res.data.data.doc,
        });
    } catch (err) {
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'success')));
        }

        dispatch({
            type: GET_CATERGORIES_FAIL,
        });
    }
};

export const getCatergory = (id) => async (dispatch) => {
    dispatch({
        type: GET_CATERGORY_REQUEST,
    });

    try {
        const res = await api.get(`/catergories/${id}`);

        dispatch({
            type: GET_CATERGORY_SUCCESS,
            payload: res.data.data.doc,
        });
    } catch (err) {
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'success')));
        }

        dispatch({
            type: GET_CATERGORY_FAIL,
        });
    }
};
