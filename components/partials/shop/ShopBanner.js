import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';

class ShopBanner extends Component {
    render() {
        const carouselSetting = {
            autoplay:true,
            autoplaySpeed:3000,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 4000,
            slidesToShow: 1,
            slidesToScroll: 2,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        return (
            <div className="ps-shop-banner" style={{height:'350px'}}>
                <Slider {...carouselSetting} className="ps-carousel">
                    <img style={{height:'40px'}} src="/static/img/slider/shop-default/1.jpg" alt="Suppl-i" />
                    <img src="/static/img/slider/shop-default/2.jpg" alt="Suppl-i" />
                </Slider>
            </div>
        );
    }
}

export default ShopBanner;
