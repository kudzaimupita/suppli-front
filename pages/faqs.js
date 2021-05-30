import React from 'react';

import FooterDefault from '../components/shared/footers/FooterMarketPlace2';
import BreadCrumb from '../components/elements/BreadCrumb';
import FaqsContent from '../components/partials/page/FaqsContent';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';

const FaqsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'FAQs',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <FaqsContent />
                </div>
            </div>
            {/* <Newletters layout="container" /> */}
            <FooterDefault />
        </div>
    );
};

export default FaqsPage;
