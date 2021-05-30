import React from 'react';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import FooterDefault from '../components/shared/footers/FooterMarketPlace2';
import BreadCrumb from '../components/elements/BreadCrumb';
import Newletters from '../components/partials/commons/Newletters';

import StoreList from '../components/partials/vendor/StoreList';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';

const StoreListPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Stores',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single ps-page--vendor">
                <BreadCrumb breacrumb={breadCrumb} />
                <StoreList />
            </div>
            {/* <Newletters layout="container" /> */}
            <FooterDefault />
        </div>
    );
};

export default StoreListPage;
