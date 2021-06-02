import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../carousel/NextArrow';
import PrevArrow from '../../../carousel/PrevArrow';

class ThumbnailQuickView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
        };
    }
    componentDidMount() {
        this.setState({
            galleryCarousel: this.slider1,
            variantCarousel: this.slider2,
        });
    }

    render() {
        const gallerySetting = {
            dots: false,
            infinite: true,
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        const { product } = this.props;
        return (
            <div className="ps-product__thumbnail" data-vertical="false">
                <figure>
                    <div className="ps-wrapper">
                        <Slider
                            {...gallerySetting}
                            className="ps-product__gallery ps-carousel inside">
                            {this.props.product &&
                                this.props.product.images &&
                                this.props.product.images.map((variant) => (
                                    <div className="item" key={variant}>
                                        <img
                                            src={`https://suppli-images.s3.af-south-1.amazonaws.com/${
                                                variant && variant
                                            }`}
                                            alt="Suppl-i"
                                        />
                                    </div>
                                ))}
                        </Slider>
                    </div>
                </figure>
            </div>
        );
    }
}

export default ThumbnailQuickView;
