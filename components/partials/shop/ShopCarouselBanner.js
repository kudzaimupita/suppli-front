import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';
import './slider.scss';

class ShopCarouselBanner extends Component {
    render() {
        const carouselSetting = {
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        return (
            <div className="ps-shop-banner" style={{ marginBottom: '20px' }}>
                {/* <img src="/static/img/slider/shop-default/1.jpg" alt="Suppl-i" style={{height:'300px'}} className='faded faded-wide faded-right'/> */}
                <Slider {...carouselSetting} className="ps-carousel inside">
                    <div className="item">
                        <img src="/static/img/1.png" alt="Suppl-i" />
                    </div>
                    <div className="item">
                        <img src="/static/img/2.png" alt="Suppl-i" />
                    </div>
                    <div className="item">
                        <img src="/static/img/3.png" alt="Suppl-i" />
                    </div>
                    <div className="item">
                        <img src="/static/img/4.png" alt="Suppl-i" />
                    </div>
                    <div className="item">
                        <img src="/static/img/5.png" alt="Suppl-i" />
                    </div>
                    <div className="item">
                        <img src="/static/img/6.png" alt="Suppl-i" />
                    </div>
                    <div className="item">
                        <img src="/static/img/7.png" alt="Suppl-i" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default ShopCarouselBanner;
