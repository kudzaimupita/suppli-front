import api from '../utils/api';
import { setAlert } from './alert';

import {
    GET_SUBCATERGORIES_FAIL,
    GET_SUBCATERGORIES_SUCCESS,
    GET_SUBCATERGORIES_REQUEST,
    GET_SUBCATERGORY_REQUEST,
    GET_SUBCATERGORY_FAIL,
    GET_SUBCATERGORY_SUCCESS,
} from '../constants/subCatergoryConstants';

export const getSubCategories = () => async (dispatch) => {
    dispatch({
        type: GET_SUBCATERGORIES_REQUEST,
    });

    try {
        const res = await api.get('/subcatergories');

        dispatch({
            type: GET_SUBCATERGORIES_SUCCESS,
            payload: res.data.data.doc,
        });
    } catch (err) {
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'success')));
        }

        dispatch({
            type: GET_SUBCATERGORIES_FAIL,
        });
    }
};

export const getSubCategory = (id) => async (dispatch) => {
    dispatch({
        type: GET_SUBCATERGORY_REQUEST,
    });

    try {
        const res = await api.get(`/subcatergories/${id}`);

        dispatch({
            type: GET_SUBCATERGORY_SUCCESS,
            payload: res.data.data.doc,
        });
    } catch (err) {
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'success')));
        }

        dispatch({
            type: GET_SUBCATERGORY_FAIL,
        });
    }
};
