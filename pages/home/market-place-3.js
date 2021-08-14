import React from 'react';

import '../../scss/market-place-3.scss';
// import "./../../assets/scss/theme.scss"//
import { connect } from 'react-redux';
import { Spin } from 'antd';
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
import Modal from 'react-modal'
import { Spinner } from 'react-activity';
import './../../components/tailwind.scss'
import "react-activity/dist/Spinner.scss";
const HomeMarketPlace3Page = (props) => (
    <div className="site-content"  >
        <>
            {/* {props.productsLoading && props.productsLoading && (
                <div
                    style={{
                        borderRadius: ' 4px',
                        textAlign: 'center',
                        // left: ' 20px',
                        // top: '60px',
                        marginBottom: '20px',
                        padding: '300px 100px',
                        background: '#fff',
                        zIndex: '99',
                        width: '100%',
                        height: '100%',
                        margin: 'auto',
                        display: 'block',
                        position: 'fixed',
                    }}>
                    <Spin size="large" />
                </div>
            )} */}
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <SubscribePopup />
            <main id="homepage-5">
                <ShopBanner />{' '}
                {props.productsLoading || props.vendorsLoading ? (
                    <Modal style={{ zIndex: 99999 }} isOpen={true} ariaHideApp={false}
                        overlayClassName={`flex w-screen position-float fixed top-0 left-0 h-screen bg-opacity-50 bg-white z-50`}
                        className={`border-none m-auto select-none outline-none w-content z-50`}>
                        <Spinner
                            color="black"
                            size={32}
                            speed={2}
                            animating={true} /></Modal>
                ) : null}
                {/* <MarketPlace3SearchTrending /> */}
                {/* <ShopBanner /> */}
                <FurnitureCategories />
                <MarketPlace3DealOfDay />
                <MarketPlace3ProductBox />
                {/* <MarketPlace3ProductBox /> */}
                {/* <MarketPlace3SearchTrending /> */}
            </main>
            <FooterMarketPlace2 />
        </>
    </div>
);

const mapStateToProps = (state) => ({
    vendors: state.allVendors.vendors,
    vendorsLoading: state.allVendors.loading,
    productsLoading: state.popularProducts.loading,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, {})(HomeMarketPlace3Page);
