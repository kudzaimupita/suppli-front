import api from '../utils/api';
import { setAlert } from './alert';
import Router from 'next/router';
import {
    GET_PLUG_SALES_LIST_FAIL,
    GET_PLUG_SALES_LIST_REQUEST,
    GET_PLUG_SALES_LIST_SUCCESS,
    GET_UNBALANCED_SALES_FAIL,
    GET_UNBALANCED_SALES_REQUEST,
    GET_UNBALANCED_SALES_SUCCESS,
    GET_PLUG_WEEKLY_STATS_SUCCESS,
    GET_PLUG_WEEKLY_STATS_FAIL,
    GET_PLUG_WEEKLY_STATS_REQUEST,
    GET_PLUG_DAILY_STATS_SUCCESS,
    GET_PLUG_DAILY_STATS_FAIL,
    GET_PLUG_DAILY_STATS_REQUEST,
} from '../constants/orderConstants';

import {
    GET_VENDOR_FAIL,
    GET_VENDOR_REQUEST,
    GET_VENDOR_SUCCESS,
    UPDATE_PLUG_FAIL,
    UPDATE_PLUG_REQUEST,
    UPDATE_PLUG_SUCCESS,
    CREATE_VENDOR_FAIL,
    CREATE_VENDOR_SUCCESS,
    CREATE_VENDOR_REQUEST,
    GET_PLUG_FAIL,
    GET_VENDORS_FAIL,
    GET_VENDORS_REQUEST,
    GET_VENDORS_SUCCESS,
    INVITE_A_FRIEND_FAIL,
    INVITE_A_FRIEND_REQUEST,
    INVITE_A_FRIEND_SUCCESS,
    SUGGEST_A_STORE_SUCCESS,
    SUGGEST_A_STORE_REQUEST,
    SUGGEST_A_STORE_FAIL,
} from '../constants/vendorConstants';

// Register User

export const suggestAVendorAction = (formData) => async (dispatch) => {
    dispatch({
        type: SUGGEST_A_STORE_REQUEST,
    });

    try {
        const res = await api.post('/vendors/suggestAVendor', formData);

        dispatch({
            type: SUGGEST_A_STORE_SUCCESS,
            payload: res.data.data,
        });
        dispatch(
            setAlert('Successfully suggested vendor. Thank you :)', 'success')
        );
    } catch (err) {
        console.log(err);
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'warning')));
        }

        dispatch({
            type: SUGGEST_A_STORE_FAIL,
        });
    }
};

export const inviteAFriendAction = (formData) => async (dispatch) => {
    dispatch({
        type: INVITE_A_FRIEND_REQUEST,
    });

    try {
        const res = await api.post('/users/inviteAFriend', formData);
        dispatch(
            setAlert('Invite successfully sent your friend. :)', 'success')
        );
        dispatch({
            type: INVITE_A_FRIEND_SUCCESS,
            payload: res.data.data,
        });
    } catch (err) {
        console.log(err);
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'warning')));
        }

        dispatch({
            type: INVITE_A_FRIEND_FAIL,
        });
    }
};

export const createVendorAction = (formData, history) => async (dispatch, getState) => {
    api.defaults.headers.common['authorization'] = `Bearer ${getState().auth1.token
        }`;
    dispatch({
        type: CREATE_VENDOR_REQUEST,
    });

    try {
        const res = await api.post('/vendors', formData);

        dispatch({
            type: CREATE_VENDOR_SUCCESS,
            payload: res.data.data.data,
        });
        Router.push('/vendor/success')
    } catch (err) {
        console.log(err);
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'warning')));
        }

        dispatch({
            type: CREATE_VENDOR_FAIL,
        });
    }
};

export const getVendors = () => async (dispatch) => {
    dispatch({
        type: GET_VENDORS_REQUEST,
    });

    try {
        const res = await api.get('/vendors');

        dispatch({
            type: GET_VENDORS_SUCCESS,
            payload: res.data.data.doc,
        });
        console.log(res.data.data);
    } catch (err) {
        console.log(err.response.data);
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            // errorArray.map((error) => dispatch(setAlert(error, "success")));
        }

        dispatch({
            type: GET_VENDORS_FAIL,
        });
    }
};
// export const getPlugStats = (id) => async (dispatch) => {
//   dispatch({
//     type: GET_PLUG_SALES_LIST_REQUEST,
//   });

//   try {
//     const res = await api.get(`/orders/sales`);
//     console.log(res.data.data);
//     dispatch({
//       type: GET_PLUG_SALES_LIST_SUCCESS,
//       payload: res.data.data,
//     });
//   } catch (err) {
//     const errors = err.response.data.error;
//     const errorArray = errors.split(",");
//     if (errorArray) {
//       errorArray.map((error) => dispatch(setAlert(error, "success")));
//     }
//     dispatch({
//       type: GET_PLUG_SALES_LIST_FAIL,
//     });
//   }
// };

// export const getDueAmount = () => async (dispatch) => {
//   dispatch({
//     type: GET_UNBALANCED_SALES_REQUEST,
//   });

//   try {
//     const res = await api.get(`/orders/salesdue`);
//     console.log(res.data.data);
//     dispatch({
//       type: GET_UNBALANCED_SALES_SUCCESS,
//       payload: res.data.data,
//     });
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//     const errors = err.response.data.error;

//     const errorArray = errors.split(",");

//     if (errorArray) {
//       errorArray.map((error) => dispatch(setAlert(error, "success")));
//     }

//     dispatch({
//       type: GET_UNBALANCED_SALES_FAIL,
//     });
//   }
// };

// export const getPlugWeeklyStats = () => async (dispatch) => {
//   dispatch({
//     type: GET_PLUG_WEEKLY_STATS_REQUEST,
//   });

//   try {
//     const res = await api.get(`/orders/weeklystats`);
//     console.log(res.data.data);
//     dispatch({
//       type: GET_PLUG_WEEKLY_STATS_SUCCESS,
//       payload: res.data.data,
//     });
//   } catch (err) {
//     const errors = err.response.data.error;

//     const errorArray = errors.split(",");

//     if (errorArray) {
//       errorArray.map((error) => dispatch(setAlert(error, "success")));
//     }

//     dispatch({
//       type: GET_PLUG_WEEKLY_STATS_FAIL,
//     });
//   }
// };

// export const getPlugDailyStats = () => async (dispatch) => {
//   dispatch({
//     type: GET_PLUG_DAILY_STATS_REQUEST,
//   });

//   try {
//     const res = await api.get(`/orders/dailystats`);
//     console.log(res.data.data);
//     dispatch({
//       type: GET_PLUG_DAILY_STATS_SUCCESS,
//       payload: res.data.data,
//     });
//   } catch (err) {
//     const errors = err.response.data.error;

//     const errorArray = errors.split(",");

//     if (errorArray) {
//       errorArray.map((error) => dispatch(setAlert(error, "success")));
//     }

//     dispatch({
//       type: GET_PLUG_DAILY_STATS_FAIL,
//     });
//   }
// };

export const getVendor = (id) => async (dispatch) => {
    dispatch({
        type: GET_VENDOR_REQUEST,
    });

    try {
        const res = await api.get(`/vendors/${id}`);
        console.log(res.data.data);
        dispatch({
            type: GET_VENDOR_SUCCESS,
            payload: res.data.data,
        });
        console.log(res.data);
    } catch (err) {
        const errors = err.response.data.error;

        const errorArray = errors.split(',');

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, 'success')));
        }

        dispatch({
            type: GET_VENDOR_FAIL,
        });
    }
};

// export const followPlug = (id) => async (dispatch) => {
//   dispatch({
//     type: FOLLOW_PLUG_REQUEST,
//   });

//   try {
//     const res = await api.put(`/vendors/follow/${id}`);
//     console.log(res.data.data);
//     dispatch({
//       type: FOLLOW_PLUG_SUCCESS,
//       payload: res.data.data,
//     });
//     dispatch(getPlug(id));
//     console.log(res.data);
//   } catch (err) {
//     const errors = err.response.data.error;
//     console.log(err.response.data.error);
//     const errorArray = errors.split(",");

//     if (errorArray) {
//       errorArray.map((error) => dispatch(setAlert(error, "success")));
//     }

//     dispatch({
//       type: FOLLOW_PLUG_FAIL,
//     });
//   }
// };

// export const unfollowPlug = (id) => async (dispatch) => {
//   dispatch({
//     type: UNFOLLOW_PLUG_REQUEST,
//   });

//   try {
//     const res = await api.put(`/vendors/unfollow/${id}`);
//     console.log(res.data.data);
//     dispatch({
//       type: UNFOLLOW_PLUG_SUCCESS,
//       payload: res.data.data,
//     });
//     dispatch(getPlug(id));
//     console.log(res.data);
//   } catch (err) {
//     const errors = err.response.data.error;
//     console.log(err.response.data.error);
//     const errorArray = errors.split(",");

//     if (errorArray) {
//       errorArray.map((error) => dispatch(setAlert(error, "success")));
//     }

//     dispatch({
//       type: UNFOLLOW_PLUG_FAIL,
//     });
//   }
// };

// export const updatePlug = (data, history) => async (dispatch) => {
//   dispatch({
//     type: UPDATE_PLUG_REQUEST,
//   });

//   try {
//     const res = await api.patch(`/vendors`, data);

//     dispatch({
//       type: UPDATE_PLUG_SUCCESS,
//       payload: res.data.data,
//     });
//     dispatch(loadMyPlug());
//     dispatch(setAlert("Details successfully updated", "success"));
//     console.log(res.data);
//   } catch (err) {
//     const errors = err.response.data.error;
//     console.log(err.response.data.error);
//     const errorArray = errors.split(",");

//     if (errorArray) {
//       errorArray.map((error) => dispatch(setAlert(error, "success")));
//     }

//     dispatch({
//       type: UPDATE_PLUG_FAIL,
//     });
//   }
// };
