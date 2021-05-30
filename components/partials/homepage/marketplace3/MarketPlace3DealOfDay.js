import React, { Component } from 'react';

import Slider from 'react-slick';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import CountDownSimple from '../../../elements/CountDownSimple';
import { producDealOfDay } from '../../../../public/static/data/technology';
import Product from '../../../elements/products/Product';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getSpecials } from './../../../../actions/products';

class MarketPlaceDealOfDay extends Component {
    componentDidMount() {
        this.props.getSpecials();
    }
    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };

        return (
            <div className="ps-deal-of-day">
                <div className="container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>Today's Deals</h3>
                            </div>
                        </div>
                        <a href="/sale">View all</a>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselSetting}
                            className="ps-carousel outside">
                            {this.props.products &&
                                this.props.products.map((product) => (
                                    <Product
                                        product={product}
                                        key={product._id}
                                    />
                                ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

MarketPlaceDealOfDay.defaultProps = {
    vendors: [],
};

const mapStateToProps = (state) => ({
    products: state.popularProducts.products,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, { getSpecials })(MarketPlaceDealOfDay);
