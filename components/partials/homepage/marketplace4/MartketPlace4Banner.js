import React, { Component } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import MenuCategories from '../../../shared/headers/modules/MenuCategories';

class MartketPlace4Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSettings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <section className="ps-home-banner">
                <Slider {...carouselSettings}>
                    <div
                        className="ps-banner--market-4"
                        style={{ backgroundImage: `url(/static/img/slider/home-6/1.jpg)` }}>
                        <img src="/static/img/slider/home-6/1.jpg" alt="Suppl-i" />
                        <div className="ps-banner__content">
                            <h4>Limit Edition</h4>
                            <h3>
                                HAPPY SUMMER <br /> COMBO SUPER COOL <br /> UP TO{' '}
                                <strong> 40%</strong>
                            </h3>
                            <a className="ps-btn" href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div
                        className="ps-banner--market-4"
                        style={{ backgroundImage: `url(/static/img/slider/home-6/2.jpg)` }}>
                        <img src="/static/img/slider/home-6/2.jpg" alt="Suppl-i" />
                        <div className="ps-banner__content">
                            <h4>Version 2018</h4>
                            <h3>
                                EXPERIENCE FEEL <br /> GREATEST WITH VITURAL <br /> REALITY JUST{' '}
                                <strong> $599</strong>
                            </h3>
                            <a className="ps-btn" href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}

export default MartketPlace4Banner;
