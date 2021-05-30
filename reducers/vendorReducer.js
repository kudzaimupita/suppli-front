import {
    DELETE_VENDOR_REQUEST,
    DELETE_VENDOR_SUCCESS,
    DELETE_VENDOR_FAIL,
    CREATE_VENDOR_REQUEST,
    CREATE_VENDOR_SUCCESS,
    CREATE_VENDOR_FAIL,
    UPDATE_VENDOR_REQUEST,
    UPDATE_VENDOR_SUCCESS,
    UPDATE_VENDOR_FAIL,
    GET_MY_VENDOR_REQUEST,
    GET_MY_VENDOR_SUCCESS,
    GET_MY_VENDOR_FAIL,
    GET_VENDORS_BY_CATERGORY_REQUEST,
    GET_VENDORS_BY_CATERGORY_SUCCESS,
    GET_VENDORS_BY_CATERGORY_FAIL,
    GET_VENDORS_REQUEST,
    GET_VENDORS_SUCCESS,
    GET_VENDORS_FAIL,
    GET_VENDOR_REQUEST,
    GET_VENDOR_SUCCESS,
    GET_VENDOR_FAIL,
    UNFOLLOW_VENDOR_REQUEST,
    UNFOLLOW_VENDOR_SUCCESS,
    UNFOLLOW_VENDOR_FAIL,
    FOLLOW_VENDOR_REQUEST,
    FOLLOW_VENDOR_SUCCESS,
    FOLLOW_VENDOR_FAIL,
    INVITE_A_FRIEND_FAIL,
    INVITE_A_FRIEND_REQUEST,
    INVITE_A_FRIEND_SUCCESS,
    SUGGEST_A_STORE_FAIL,
    SUGGEST_A_STORE_REQUEST,
    SUGGEST_A_STORE_SUCCESS,
} from '../constants/vendorConstants';

export const createVendorReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_VENDOR_REQUEST:
            return { loading: true };
        case CREATE_VENDOR_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                vendor: action.payload,
            };
        case CREATE_VENDOR_FAIL:
            return { loading: false, error: action.payload };
        // case PRODUCT_CREATE_RESET:
        //   return {};
        default:
            return state;
    }
};

export const inviteAFriendReducer = (state = { invite: {} }, action) => {
    switch (action.type) {
        case INVITE_A_FRIEND_REQUEST:
            return { loading: true };
        case INVITE_A_FRIEND_SUCCESS:
            return {
                ...state,
                loading: false,
                invite: action.payload,
            };
        case INVITE_A_FRIEND_FAIL:
            return { loading: false, error: action.payload };
        // case PRODUCT_UPDATE_RESET:
        //   return { product: {} };
        default:
            return state;
    }
};

export const suggestVendorReducer = (state = { vendor: {} }, action) => {
    switch (action.type) {
        case SUGGEST_A_STORE_REQUEST:
            return { loading: true };
        case SUGGEST_A_STORE_SUCCESS:
            return {
                ...state,
                loading: false,
                vendor: action.payload,
            };
        case SUGGEST_A_STORE_FAIL:
            return { loading: false, error: action.payload };
        // case PRODUCT_UPDATE_RESET:
        //   return { product: {} };
        default:
            return state;
    }
};

export const updateVendorReducer = (state = { vendor: {} }, action) => {
    switch (action.type) {
        case UPDATE_VENDOR_REQUEST:
            return { loading: true };
        case UPDATE_VENDOR_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                vendor: action.payload,
            };
        case UPDATE_VENDOR_FAIL:
            return { loading: false, error: action.payload };
        // case PRODUCT_UPDATE_RESET:
        //   return { product: {} };
        default:
            return state;
    }
};

export const getMyVendorReducer = (state = { vendor: {} }, action) => {
    switch (action.type) {
        case GET_MY_VENDOR_REQUEST:
            return {
                loading: true,
            };
        case GET_MY_VENDOR_SUCCESS:
            return { ...state, loading: false, vendor: action.payload };
        case GET_MY_VENDOR_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getVENDORSByCatergoryReducer = (
    state = { vendors: [] },
    action
) => {
    switch (action.type) {
        case GET_VENDORS_BY_CATERGORY_REQUEST:
            return {
                loading: true,
            };
        case GET_VENDORS_BY_CATERGORY_SUCCESS:
            return { ...state, loading: false, vendors: action.payload };
        case GET_VENDORS_BY_CATERGORY_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getVendorsReducer = (state = { vendors: [] }, action) => {
    switch (action.type) {
        case GET_VENDORS_REQUEST:
            return {
                loading: true,
            };
        case GET_VENDORS_SUCCESS:
            return { ...state, loading: false, vendors: action.payload };
        case GET_VENDORS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getVendorReducer = (state = { vendor: {} }, action) => {
    switch (action.type) {
        case GET_VENDOR_REQUEST:
            return {
                loading: true,
            };
        case GET_VENDOR_SUCCESS:
            return { ...state, loading: false, vendor: action.payload };
        case GET_VENDOR_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const deleteVendorReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_VENDOR_REQUEST:
            return { loading: true };
        case DELETE_VENDOR_SUCCESS:
            return { loading: false, success: true };
        case DELETE_VENDOR_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const followVendorReducer = (state = {}, action) => {
    switch (action.type) {
        case FOLLOW_VENDOR_REQUEST:
            return { loading: true };
        case FOLLOW_VENDOR_SUCCESS:
            return { ...state, loading: false, success: true };
        case FOLLOW_VENDOR_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const unfollowVendorReducer = (state = {}, action) => {
    switch (action.type) {
        case UNFOLLOW_VENDOR_REQUEST:
            return { loading: true };
        case UNFOLLOW_VENDOR_SUCCESS:
            return { ...state, loading: false, success: true };
        case UNFOLLOW_VENDOR_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
