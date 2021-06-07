import React, { Component } from 'react';

import Slider from 'react-slick';
import Link from 'next/link';

class AboutAwards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSetting = {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            arrows: false,
            infinite: true,
            speed: 100,
            slidesToShow: 5,
            slidesToScroll: 3,
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
            <div className="" style={{ marginTop: '20px' }}>
                <div className="container">
                    <div className="" style={{ marginBottom: '30px' }}>
                        <h3>About Us</h3>
                        <p>
                            Suppl-i is a proudly South African company that aims
                            to assist all South Africans with a better online
                            shopping experience. At Suppl-i, everything we do is
                            guided by the fundamental value that our local
                            vendors and customers are the most important factor
                            to supporting local business and communities. By
                            creating a local online marketplace, we can support
                            small business owners with a seller-friendly site
                            while giving local consumers access to their
                            favourite local stores online. By shopping at your
                            favourite, local, neighbourhood stores you support
                            small businesses and their employees and help
                            improve the lifestyles of local communities.
                            Shopping at local stores gives consumers access to
                            locally manufactured and distributed goods and often
                            helps people find amazing products and deals that
                            they might otherwise not have found.
                        </p>
                    </div>
                    <div className="" style={{ marginBottom: '30px' }}>
                        <h4>Mission Statement</h4>
                        <p>
                            Our mission is to be South Africa's most trusted and
                            convenient online shopping platform, giving
                            consumers access to groceries and common consumer
                            goods with a safe, secure and affordable shopping
                            platform.
                        </p>
                    </div>

                    <div className="" style={{ marginBottom: '30px' }}>
                        <h4>Company Vision</h4>
                        <p>
                            Our goal is to give all small and medium size
                            enterprises an online presence while offering
                            variety, efficiency and affordability to all
                            consumers. We aim to provide the ultimate online
                            shopping experience that gives consumers access to
                            many small, medium and large retailers in your areas
                            with a single and cost-effective delivery solution.
                        </p>
                    </div>
                    <div className="" style={{ marginBottom: '30px' }}>
                        <h4>
                            Value Proposition: “Your Favorite Local Stores…
                            Delivered Safely And Efficiently.”
                        </h4>
                        <p>
                            Suppl-i takes away the need to physically visit one
                            or several different stores, allowing consumers to
                            save time and effort when purchasing goods. We offer
                            a safe and efficient platform for retailers and
                            consumers with minimized risks of exposure to
                            crowded stores and the generally high associated
                            delivery costs
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutAwards;
