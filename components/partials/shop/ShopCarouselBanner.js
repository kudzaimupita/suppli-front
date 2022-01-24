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
                <Slider {...carouselSetting} className="ps-carousel inside">

                    <a href='/vendor/creative-stamps' className="item">
                        <img src="/static/img/1.png" alt="Suppl-i" />
                    </a>
                    <a href='/vendor/beit-yosef-kosher-butchery'>    <div className="item">
                        <img src="/static/img/2.png" alt="Suppl-i" />
                    </div></a>
                    <a href='/vendor/origin-fitness'>    <div className="item">
                        <img src="/static/img/3.png" alt="Suppl-i" />
                    </div></a>
                    <a href='/vendor/nano-life'>    <div className="item">
                        <img src="/static/img/4.png" alt="Suppl-i" />
                    </div></a>

                    <a href='/contact'>    <div className="item">
                        <img src="/static/img/5.png" alt="Suppl-i" />
                    </div></a>
                    <a href='vendor/i-sandler-and-co' className="item">
                        <img src="/static/img/6.png" alt="Suppl-i" />
                    </a>
                    <a href='/vendor/afrigraphix'>    <div className="item">
                        <img src="/static/img/7.png" alt="Suppl-i" />
                    </div></a>
                    <a href='https://live.insure/livecover/pa?schemecode=zivikele&referredby=suppli'>    <div className="item">
                        <img src="/static/img/45.png" alt="Suppl-i" />
                    </div></a>
                </Slider>
            </div>
        );
    }
}

export default ShopCarouselBanner;
