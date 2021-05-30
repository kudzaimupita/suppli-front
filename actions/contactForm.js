import api from '../utils/api';
import { setAlert } from './alert';

import {
    SEND_MESSAGE_FAIL,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
} from '../constants/contactFormConstants';

export const sendMessageAction = (formData) => async (dispatch) => {
    dispatch({
        type: SEND_MESSAGE_REQUEST,
    });

    try {
        const res = await api.post('/inquiries', formData);

        dispatch({
            type: SEND_MESSAGE_SUCCESS,
            payload: res.data.data,
        });
        dispatch(
            setAlert('Successfully sent message. :)', 'success')
        );
    } catch (err) {
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'warning')));
        }

        dispatch({
            type: SEND_MESSAGE_FAIL,
        });
    }
};
