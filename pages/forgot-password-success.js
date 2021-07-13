import React from 'react';
import FooterDefault from '../components/shared/footers/FooterMarketPlace2';


// import VendorBestFees from '../components/partials/vendor/VendorBestFees';
import Suc from '../components/partials/account/forgot-password-success';
// import VendorFaqs from '../../components/partials/vendor/VendorFaqs';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';

const BecomeAVendorPage = () => {


    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div
                className="ps-page--single"
                style={{ backgroundColor: '#eeeeee' }}>
                {/* <BreadCrumb breacrumb={breadCrumb} /> */}

                <Suc />

            </div>
            <FooterDefault />
        </div>
    );
};

export default BecomeAVendorPage;
