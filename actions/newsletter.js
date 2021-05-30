import api from '../utils/api';
import { setAlert } from './alert';

import {
    JOIN_MAILING_LIST_FAIL,
    JOIN_MAILING_LIST_REQUEST,
    JOIN_MAILING_LIST_SUCCESS,
} from '../constants/newsletterConstants';

// Register User

export const joinNewsletterAction = (formData) => async (dispatch) => {
    dispatch({
        type: JOIN_MAILING_LIST_REQUEST,
    });

    try {
        const res = await api.post('/newsletter', formData);

        dispatch({
            type: JOIN_MAILING_LIST_SUCCESS,
            payload: res.data.data.data,
        });

        dispatch(
            setAlert('Successfully subscribed to the newsletter', 'success')
        );
    } catch (err) {
        console.log(err);
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'warning')));
        }

        dispatch({
            type: JOIN_MAILING_LIST_FAIL,
        });
    }
};
