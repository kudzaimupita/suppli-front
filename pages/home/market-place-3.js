import React from 'react';

import '../../scss/market-place-3.scss';
// import "./../../assets/scss/theme.scss"//
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import FooterMarketPlace2 from '../../components/shared/footers/FooterMarketPlace2';
import NavigationList from '../../components/shared/navigation/NavigationList';
import MarketPlace3ProductBox from '../../components/partials/homepage/marketplace3/MarketPlace3ProductBox';
import MartketPlace3Banner from '../../components/partials/homepage/marketplace3/MartketPlace3Banner';
import MarketPlace3DealOfDay from '../../components/partials/homepage/marketplace3/MarketPlace3DealOfDay';
import MarketPlace3SearchTrending from '../../components/partials/homepage/marketplace3/MarketPlace3SearchTrending';
import HeaderMarketPlace3 from '../../components/shared/headers/HeaderMarketPlace3';
import SubscribePopup from '../../components/shared/SubscribePopup';
import HeaderDefault from '../../components/shared/headers/HeaderMarketPlace';
import FurnitureCategories from '../../components/partials/homepage/furniture/FurnitureCategories';
import ShopBrands from '../../components/partials/shop/ShopBrands';
import ShopBanner from '../../components/partials/shop/ShopCarouselBanner';

const HomeMarketPlace3Page = () => (
    <div className="site-content">
        <HeaderDefault />
        <HeaderMobile />
        <NavigationList />
        <SubscribePopup />
        <main id="homepage-5">
            <ShopBanner />
            {/* <MarketPlace3SearchTrending /> */}
            {/* <ShopBanner /> */}
            <FurnitureCategories />
            <MarketPlace3DealOfDay />
            <MarketPlace3ProductBox />
            {/* <MarketPlace3ProductBox /> */}
            {/* <MarketPlace3SearchTrending /> */}
        </main>
        <FooterMarketPlace2 />
    </div>
);

export default HomeMarketPlace3Page;
