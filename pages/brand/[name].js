import React from 'react';
import Router, { useRouter } from 'next/router';

import FooterDefault from '../../components/shared/footers/FooterMarketPlace2';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Newletters from '../../components/partials/commons/Newletters';
import HeaderDefault from '../../components/shared/headers/HeaderMarketPlace';
import VendorStore from '../../components/partials/vendor/VendorStore';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import LayoutShopSidebarWithoutBanner from '../components/partials/shop/newArrivals';

const VendorStorePage = () => {
    const router = useRouter();
    const { name } = router.query;
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Brands',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--shop" id="shop-sidebar">
                <div className="container">
                    <LayoutShopSidebarWithoutBanner />
                </div>
            </div>

            <FooterDefault />
        </div>
    );
};

export default VendorStorePage;
