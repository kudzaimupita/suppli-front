import React from 'react';
import Newsletters from '../components/partials/commons/Newletters';
import FooterDefault from '../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import BreadCrumb from '../components/elements/BreadCrumb';
import Checkout from '../components/partials/account/Checkout';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import { connect } from 'react-redux';

import FormCheckoutInformation from '../components/partials/account/modules/FormCheckoutInformation';

const OrderTrackingPage = (props) => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Checkout Information',
        },
    ];
    const { amount, cartTotal, cartItems } = props;
    return (
        <div className="site-content" >
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple" style={{ backgroundColor: '#eeeeee' }}>
                <BreadCrumb breacrumb={breadCrumb} />
                <FormCheckoutInformation
                    amount={amount}
                    cartTotal={cartTotal}
                    cartItems={cartItems}
                />
            </div>
            {/* <Newsletters layout="container" /> */}
            <FooterDefault />
        </div>
    );
};

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(OrderTrackingPage);
