import React, { Component } from 'react';
import Link from 'next/link';
import { Tabs } from 'antd';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import {
    getSpecials,
    getNewArrivals,
    getRandomProducts,
} from '../../../../../actions/products';

import Product from '../../../../elements/products/Product';
import ProductHorizontal from '../../../../elements/products/ProductHorizontal';
import NextArrow from '../../../../elements/carousel/NextArrow';
import PrevArrow from '../../../../elements/carousel/PrevArrow';
import './slider.scss';
const { TabPane } = Tabs;

class Market3ConsumerElectronics extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getNewArrivals();
        this.props.getRandomProducts();
    }

    render() {
        const carouselSetting = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        const { data } = this.props;
        return (
            <div className="ps-block--product-box">
                <div className="ps-block__header">
                    <h3>
                        <i className="icon-laundry"></i><strong> Recommended</strong>
                    </h3>
                    {/* <ul>
                        <li>
                            <Link href="/new-arrivals">
                                <a>New Arrivals</a>
                            </Link>
                        </li>
                    </ul> */}
                </div>
                <div className="ps-block__content">
                    <div className="ps-block__left">
                        <Slider
                            {...carouselSetting}
                            className="ps-carousel inside">
                            <div className="item">
                                <a href='/vendor/the-super'>
                                    <img
                                        src="/static/img/Banner 1.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </div>
                            <div className="item">
                                <a href="/vendor/origin-fitness">
                                    <img
                                        src="/static/img/Banner 2.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </div>
                            {/* <div className="item">
                                <a href='/vendor/live-streamz'>
                                    <img
                                        src="/static/img/Banner 3.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </div> */}
                            <div className="item">
                                <a href='/vendor/creative-stamps'>
                                    <img
                                        src="/static/img/Banner 4.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </div>
                            <div className="item">
                                <a href='/vendor/paint-centre-hn'>
                                    <img
                                        src="/static/img/Banner 5.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </div>
                            {/* <div className="item">
                                <a href='/vendor/Banner 6'>
                                    <img
                                        src="/static/img/5555.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </div> */}
                            <div className="item">
                                <a href='https://live.insure/livecover/pa?schemecode=zivikele&referredby=suppli'>
                                    <img
                                        src="/static/img/Banner 6.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </div>
                        </Slider>
                        <div className="ps-block__products">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="New Arrivals" key="1">
                                    <div className="row">
                                        {this.props.newArrivals &&
                                            this.props.newArrivals.map(
                                                (product, index) => {
                                                    if (
                                                        index > 1 &&
                                                        index < 6
                                                    ) {
                                                        return (
                                                            <div
                                                                className="col-md-3 col-sm-4 col-6"
                                                                key={
                                                                    product._id
                                                                }>
                                                                <Product
                                                                    product={
                                                                        product
                                                                    }
                                                                />
                                                            </div>
                                                        );
                                                    }
                                                }
                                            )}
                                    </div>
                                </TabPane>
                                <TabPane tab="On Special" key="2">
                                    <div className="row">
                                        {this.props.products &&
                                            this.props.products.map(
                                                (product, index) => {
                                                    if (
                                                        index > 1 &&
                                                        index < 6
                                                    ) {
                                                        return (
                                                            <div
                                                                className="col-md-3 col-sm-4 col-6"
                                                                key={
                                                                    product._id
                                                                }>
                                                                <Product
                                                                    product={
                                                                        product
                                                                    }
                                                                />
                                                            </div>
                                                        );
                                                    }
                                                }
                                            )}
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                    <div className="ps-block__right">
                        <figure>
                            <figcaption>Recommended For You</figcaption>
                            {this.props.randomProducts &&
                                this.props.randomProducts.map(
                                    (product, index) => {
                                        if (index < 5) {
                                            return (
                                                <ProductHorizontal
                                                    product={product}
                                                    key={product._id}
                                                />
                                            );
                                        }
                                    }
                                )}
                        </figure>
                    </div>
                </div>
            </div>
        );
    }
}

// MarketPlace.defaultProps = {
//     vendors: [],
// };

const mapStateToProps = (state) => ({
    products: state.popularProducts.products,
    newArrivals: state.newArrivals.products,
    randomProducts: state.randomProducts.products,
});

export default connect(mapStateToProps, {
    getSpecials,
    getNewArrivals,
    getRandomProducts,
})(Market3ConsumerElectronics);
