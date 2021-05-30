import React from 'react';
import { connect } from 'react-redux';
import FooterDefault from '../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import Newletters from '../components/partials/commons/Newletters';
import BreadCrumb from '../components/elements/BreadCrumb';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import LayoutShopSidebarWithoutBanner from '../components/partials/shop/OnSpecial';

class ShopSidebarWithoutBannerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Sale',
            },
        ];

        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-page--shop" id="shop-sidebar">
                    <div className="container">
                        <LayoutShopSidebarWithoutBanner />
                    </div>
                </div>

                <FooterDefault />
            </div>
        );
    }
}

export default ShopSidebarWithoutBannerPage;
