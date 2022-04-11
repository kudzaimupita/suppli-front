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
                        <img src="/static/img/banners/Banner 1.png" alt="Suppl-i" />
                    </a>
                    {/* <div className="item">
                        <img src="/static/img/delivery banner.png" alt="Suppl-i" />
                    </div> */}
                    <a href='/vendor/clean-co'>    <div className="item">
                        <img src="/static/img/Clean Co.png" alt="Suppl-i" />
                    </div></a>
                    <a href='/vendor/beit-yosef-kosher-butchery'>    <div className="item">
                        <img src="/static/img/banners/Banner 2.png" alt="Suppl-i" />
                    </div></a>
                    <a href='/vendor/origin-fitness'>    <div className="item">
                        <img src="/static/img/banners/Banner 3.png" alt="Suppl-i" />
                    </div></a>
                    <a href='/vendor/i-sandler-and-co'>    <div className="item">
                        <img src="/static/img/banners/Banner 4.png" alt="Suppl-i" />
                    </div></a>

                    <a href="/vendor/paint-centre-hn">    <div className="item">
                        <img src="/static/img/banners/Banner 5.png" alt="Suppl-i" />
                    </div></a>
                    <a href='vendor/the-super' className="item">
                        <img src="/static/img/banners/Banner 6.png" alt="Suppl-i" />
                    </a>


                </Slider>
            </div>
        );
    }
}

export default ShopCarouselBanner;
