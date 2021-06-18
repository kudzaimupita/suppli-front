import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../../components/shared/headers/HeaderMarketPlace';
import BreadCrumb from '../../components/elements/BreadCrumb';
import SuggestAVendor from '../../components/partials/vendor/SuggestAVendor';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const LoginPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Suggest A Store',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div
                className="ps-page--my-account"
                style={{ backgroundColor: '#eeeeee', marginBottom: '30px' }}>
                <BreadCrumb breacrumb={breadCrumb} />
                <SuggestAVendor />
            </div>
            <FooterDefault />
        </div>
    );
};

export default LoginPage;
