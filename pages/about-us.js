import React from 'react';

import FooterDefault from '../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import BreadCrumb from '../components/elements/BreadCrumb';
import AboutAwards from '../components/partials/page/about-us/AboutAwards';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';

const AboutUsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'About Us',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <AboutAwards />
            </div>
            <FooterDefault />
        </div>
    );
};
export default AboutUsPage;
