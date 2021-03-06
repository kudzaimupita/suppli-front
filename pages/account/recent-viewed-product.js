import React from 'react';

import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../../components/shared/headers/HeaderMarketPlace';
import BreadCrumb from '../../components/elements/BreadCrumb';
import RecentViewedProducts from '../../components/partials/account/RecentViewedProducts';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const RecentViewedProductsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Recent Viewed Products',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <RecentViewedProducts />
            </div>

            <FooterDefault />
        </div>
    );
};

export default RecentViewedProductsPage;
