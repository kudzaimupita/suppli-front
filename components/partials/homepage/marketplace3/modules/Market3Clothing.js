import React, { Component } from 'react';
import Link from 'next/link';
import { Tabs } from 'antd';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import Product from '../../../../elements/products/Product';
import ProductHorizontal from '../../../../elements/products/ProductHorizontal';
import NextArrow from '../../../../elements/carousel/NextArrow';
import PrevArrow from '../../../../elements/carousel/PrevArrow';
const { TabPane } = Tabs;

class Market3ConsumerElectronics extends Component {
    constructor(props) {
        super(props);
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
                        <i className="icon-shirt"></i> Clothing & Appreal
                    </h3>
                    <ul>
                        <li>
                            <Link href="/shop">
                                <a>Women</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Men</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Girl</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Boy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Baby</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Accessories</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-block__content">
                    <div className="ps-block__left">
                        <Slider
                            {...carouselSetting}
                            className="ps-carousel inside">
                            <div className="item">
                                <Link href="/shop">
                                    <a>
                                        <img
                                            src="/static/img/8.png"
                                            alt="Suppl-i"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/shop">
                                    <a>
                                        <img
                                            src="/static/img/22.png"
                                            alt="Suppl-i"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </Slider>
                        <div className="ps-block__products">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="New Arrivals" key="1">
                                    <div className="row">
                                        {data.map((product, index) => {
                                            if (index < 4) {
                                                return (
                                                    <div
                                                        className="col-md-3 col-sm-4 col-6"
                                                        key={product.id}>
                                                        <Product
                                                            product={product}
                                                        />
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </TabPane>
                                <TabPane tab="Best Seller" key="2">
                                    <div className="row">
                                        {data.map((product, index) => {
                                            if (index > 1 && index < 6) {
                                                return (
                                                    <div
                                                        className="col-md-3 col-sm-4 col-6"
                                                        key={product.id}>
                                                        <Product
                                                            product={product}
                                                        />
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </TabPane>
                                <TabPane tab="Sale" key="3">
                                    <div className="row">
                                        {data.map((product, index) => {
                                            if (index > 0 && index < 5) {
                                                return (
                                                    <div
                                                        className="col-md-3 col-sm-4 col-6"
                                                        key={product.id}>
                                                        <Product
                                                            product={product}
                                                        />
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                    {/* <div className="ps-block__right">
                        <figure>
                            <figcaption>Recommended For You</figcaption>
                            {data.map((product, index) => {
                                if (index < 5) {
                                    return (
                                        <ProductHorizontal
                                            product={product}
                                            key={product.id}
                                        />
                                    );
                                }
                            })}
                        </figure>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Market3ConsumerElectronics;
