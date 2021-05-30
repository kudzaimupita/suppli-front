import React from 'react';

import FooterDefault from '../components/shared/footers/FooterMarketPlace2';
import BreadCrumb from '../components/elements/BreadCrumb';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import ShippingPolicyContent from '../components/partials/page/ShippingPolicy';

const ShippingPolicy = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Delivery Policy',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <ShippingPolicyContent />
            </div>
            <FooterDefault />
        </div>
    );
};

export default ShippingPolicy;
