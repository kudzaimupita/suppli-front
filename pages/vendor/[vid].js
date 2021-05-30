import React from 'react';
import Router, { useRouter } from 'next/router';

import FooterDefault from '../../components/shared/footers/FooterMarketPlace2';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Newletters from '../../components/partials/commons/Newletters';
import HeaderDefault from '../../components/shared/headers/HeaderMarketPlace';
import VendorStore from '../../components/partials/vendor/VendorStore';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const VendorStorePage = () => {
    const router = useRouter();
    const { vid } = router.query;
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Store',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single ps-page--vendor">
                <BreadCrumb breacrumb={breadCrumb} />
                <VendorStore vendorId={vid} />
            </div>

            <FooterDefault />
        </div>
    );
};

export default VendorStorePage;
