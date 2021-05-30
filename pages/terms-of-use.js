import React from 'react';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import FooterDefault from '../components/shared/footers/FooterMarketPlace2';
import BreadCrumb from '../components/elements/BreadCrumb';

import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import TermsOfUseContent from '../components/partials/page/TermsOfUse';

const TermsOfUse = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Terms Of Use',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <TermsOfUseContent />
            </div>

            <FooterDefault />
        </div>
    );
};

export default TermsOfUse;
