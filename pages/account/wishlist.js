import React from 'react';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../../components/shared/headers/HeaderMarketPlace';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Wishlist from '../../components/partials/account/Wishlist';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const WishlistPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Wishlist',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Wishlist />
            </div>

            <FooterDefault />
        </div>
    );
};

export default WishlistPage;
