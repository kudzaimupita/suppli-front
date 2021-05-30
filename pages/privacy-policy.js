import React from 'react';

import FooterDefault from '../components/shared/footers/FooterMarketPlace2';
import BreadCrumb from '../components/elements/BreadCrumb';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import PrivacyPolicyContent from '../components/partials/page/PrivacyPolicy';

const PrivacyPolicy = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Privacy Policy',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <PrivacyPolicyContent />
            </div>
            <FooterDefault />
        </div>
    );
};

export default PrivacyPolicy;
