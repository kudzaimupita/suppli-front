import { combineReducers } from 'redux';
import post from './post/reducer';
import product from './product/reducer';
import setting from './setting/reducer';
import cart from './cart/reducer';
import compare from './compare/reducer';
import auth from './auth/reducer';
import wishlist from './wishlist/reducer';
import { sendMessageReducer } from './../reducers/contactFormReducer';
import auth1, { forgotPasswordReducer, authLoadingReducer } from './../reducers/authReducer';

import {
    addToWishlistReducer,
    removeFromWishlistReducer,
} from './../reducers/wishlistReducer';

import { joinMaillistReducer } from './../reducers/maillistReducer';

// import {
//     getVendorReviewsReducer,
//     getVendorReviewReducer,
//     updateVendorReviewReducer,
//     createVendorReviewReducer,
//     deleteVendorReviewReducer,
// } from './../reducers/VendorReviewsReducer';

import {
    getProductReviewsReducer,
    getProductReviewReducer,
    updateProductReviewReducer,
    createProductReviewReducer,
    deleteProductReviewReducer,
} from './../reducers/productReviewsReducer';

import {
    getCatergoriesReducer,
    getCatergoryReducer,
    updateCatergoryReducer,
    createCatergoryReducer,
    deleteCatergoryReducer,
} from './../reducers/catergoryReducer';

import {
    getSubCatergoriesReducer,
    getSubCatergoryReducer,
    updateSubCatergoryReducer,
    createSubCatergoryReducer,
    deleteSubCatergoryReducer,
} from './../reducers/subCatergoryReducer';

import {
    createVendorReducer,
    getMyVendorReducer,
    getVendorReducer,
    getVendorsReducer,
    deleteVendorReducer,
    updateVendorReducer,
    followVendorReducer,
    unfollowVendorReducer,
    inviteAFriendReducer,
} from './../reducers/vendorReducer';

import {
    getAllProductsReducer,
    getFilteredResultsReducer,
    getPopularProductsReducer,
    getNewArrivalsReducer,
    getProductReducer,
    getProductsByVendorReducer,
    getRandomProductsReducer,
    getSearchedProductsReducer,
    getUserFeedProductsReducer,
    createProductReducer,
    updateProductReducer,
    deleteProductReducer,
    getProductStats,
} from './../reducers/productReducer';

import {
    getMyOrdersReducer,
    createOrderReducer,
    getOrdersList,
    getUnbalancedSales,
    deleteOrderReducer,
    updateOrderReducer,
    setCurrentOrder
} from './../reducers/orderReducer';

import { updateUserReducer } from './../reducers/authReducer';

import {
    createRefundReducer,
    getMyRefundsReducer,
    getRefundReducer,
    updateRefundReducer,
} from './../reducers/refundsReducer';

// import {
//     getVendorReviewsReducer,
//     getVendorReviewReducer,
//     updateVendorReviewReducer,
//     createVendorReviewReducer,
//     deleteVendorReviewReducer,
// } from './../reducers/plugReviewsReducer';

import alertReducer from './../reducers/alertReducer';
export default combineReducers({
    currentOrder: setCurrentOrder,
    auth1: auth1,
    authLoading: authLoadingReducer,
    forgotPassword: forgotPasswordReducer,
    createdVendor: createVendorReducer,
    auth,
    post,
    product,
    setting,
    cart,
    compare,
    wishlist,
    allVendors: getVendorsReducer,
    invite: inviteAFriendReducer,
    // updatedUser: updateUserReducer,

    allSubCatergories: getSubCatergoriesReducer,
    allCatergories: getCatergoriesReducer,
    allProducts: getAllProductsReducer,
    removedFromwishlist: removeFromWishlistReducer,
    addedToWishlist: addToWishlistReducer,
    createdRefund: createRefundReducer,
    myRefunds: getMyRefundsReducer,
    refund: getRefundReducer,
    updatedRefund: updateRefundReducer,
    joinedMaillist: joinMaillistReducer,
    sentMessage: sendMessageReducer,
    alert: alertReducer,
    // auth: authtReducer,
    // cart: cartReducer,
    // vendorReviews: getVendorReviewsReducer,
    // vendorReview: getVendorReviewReducer,
    // deletedVendorReview: deleteVendorReviewReducer,
    // createdVendorReview: createVendorReviewReducer,
    // updatedVendorReview: updateVendorReviewReducer,

    productReviews: getProductReviewsReducer,
    productReview: getProductReviewReducer,
    deletedProductReview: deleteProductReviewReducer,
    createdProductReview: createProductReviewReducer,
    updatedProductReview: updateProductReviewReducer,

    catergories: getCatergoriesReducer,
    catergory: getCatergoryReducer,
    deletedCatergory: deleteCatergoryReducer,
    createdCatergory: createCatergoryReducer,
    updatedCatergory: updateCatergoryReducer,
    subCatergories: getSubCatergoriesReducer,
    subCatergory: getSubCatergoryReducer,
    deletedSubCatergory: deleteSubCatergoryReducer,
    createdSubCatergory: createSubCatergoryReducer,
    updatedSubCatergory: updateSubCatergoryReducer,
    vendor: getVendorReducer,
    // vendors: getVendorsReducer,
    followedPlug: followVendorReducer,
    unfollowedVendor: unfollowVendorReducer,
    updatedVendor: updateVendorReducer,
    myVendor: getMyVendorReducer,

    filteredProducts: getFilteredResultsReducer,
    popularProducts: getPopularProductsReducer,
    newArrivals: getNewArrivalsReducer,
    randomProducts: getRandomProductsReducer,
    newProduct: getProductReducer,
    // products: getProductsByVendorReducer,
    // randomProducts: getRandomProductsByVendorReducer,
    searchedProducts: getSearchedProductsReducer,
    userFeed: getUserFeedProductsReducer,
    productStats: getProductStats,
    createdProduct: createProductReducer,
    updatedProduct: updateProductReducer,
    deletedProduct: deleteProductReducer,

    myOrders: getMyOrdersReducer,
    createdOrder: createOrderReducer,

    orders: getOrdersList,
    unBalancedSales: getUnbalancedSales,
    deletedOrder: deleteOrderReducer,
    updatedOrder: updateOrderReducer,
    // createdEmailCampaign: createEmailCampaignReducer,
});
