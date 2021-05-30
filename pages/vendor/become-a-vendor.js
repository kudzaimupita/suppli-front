import React from 'react';
import FooterDefault from '../../components/shared/footers/FooterMarketPlace2';
import BreadCrumb from '../../components/elements/BreadCrumb';
import VendorAbout from '../../components/partials/vendor/VendorAbout';
import Create from '../../components/partials/vendor/createVendor';
import VendorBestFees from '../../components/partials/vendor/VendorBestFees';
import VendorFaqs from '../../components/partials/vendor/VendorFaqs';
import HeaderDefault from '../../components/shared/headers/HeaderMarketPlace';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const BecomeAVendorPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Become a Vendor',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div
                className="ps-page--single"
                style={{ backgroundColor: '#eeeeee' }}>
                <BreadCrumb breacrumb={breadCrumb} />
                <VendorAbout />
                <Create />
                <VendorBestFees />
                <VendorFaqs />
            </div>
            <FooterDefault />
        </div>
    );
};

export default BecomeAVendorPage;
