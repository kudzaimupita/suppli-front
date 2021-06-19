import React, { Component } from 'react';
import Slider from 'react-slick';
import { relatedProduct } from '../../../public/static/data/product';
// import { getVendor } from '../../../actions/vendors';
import { Spin } from 'antd';
import Product from '../../elements/products/Product';
import VendorProducts from './modules/VendorProducts';
import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';
import Rating from '../../elements/Rating';
import { connect } from 'react-redux';
import { getVendor } from './../../../actions/vendors';

class VendorStore extends Component {
    componentDidMount(props) {
        this.props.getVendor(this.props.vendorId);
    }
    render() {
        const carouselSetting = {
            dots: false,
            arrow: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 4,
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
            <>
                {this.props.vendorLoading && this.props.vendorLoading && (
                    <div
                        className="example"
                        style={{
                            borderRadius: ' 4px',
                            textAlign: 'center',
                            // margin: ' 20px 0',
                            marginBottom: '20px',
                            padding: '30px 50px',
                            background: '#fff',
                            zIndex: '99',
                            width: '100%',
                            height: '100%',
                            margin: 'auto',
                            display: 'block',
                            position: 'fixed',
                        }}>
                        <Spin size="large" />
                    </div>
                )}{' '}
                <div className="ps-vendor-store">
                    <div className="container">
                        <div className="ps-section__container">
                            <div className="ps-section__left">
                                <div className="ps-block--vendor">
                                    <div className="ps-block__thumbnail">
                                        {this.props.vendor &&
                                            this.props.vendor.doc &&
                                            this.props.vendor.doc.logo ? <img
                                            src={`https://suppli-images.s3.af-south-1.amazonaws.com/${this.props.vendor &&
                                                this.props.vendor.doc &&
                                                this.props.vendor.doc.logo
                                                }`}
                                            alt="Suppl-i"
                                        /> : <img
                                            style={{
                                                borderRadius:
                                                    '50px',
                                            }}
                                            src="/static/img/555.jpg"
                                            alt="Suppl-i"
                                        />}
                                        
                                    </div>
                                    <div className="ps-block__container">
                                        <div className="ps-block__header">
                                            <h4>
                                                {this.props.vendor &&
                                                    this.props.vendor.doc &&
                                                    this.props.vendor.doc.name}
                                            </h4>
                                            <Rating />({'    '}
                                            {this.props.vendor &&
                                                this.props.vendor.doc &&
                                                this.props.vendor.doc
                                                    .ratingsQuantity}{' '}
                                            ) Reviews
                                            {/* <p>
                                            <strong>85% Positive</strong> (562
                                            rating)
                                        </p> */}
                                        </div>
                                        <div className="ps-block__divider"></div>
                                        <div className="ps-block__content">
                                            <p>
                                                {this.props.vendor &&
                                                    this.props.vendor.doc &&
                                                    this.props.vendor.doc
                                                        .aboutUs}
                                            </p>
                                            <span className="ps-block__divider"></span>
                                            <p>
                                                {this.props.vendor &&
                                                    this.props.vendor.doc &&
                                                    this.props.vendor.doc
                                                        .address && (
                                                        <strong>Address</strong>
                                                    )}{' '}
                                                {this.props.vendor &&
                                                    this.props.vendor.doc &&
                                                    this.props.vendor.doc
                                                        .address && (
                                                        <>
                                                            {' '}
                                                            {
                                                                this.props
                                                                    .vendor.doc
                                                                    .address
                                                            }
                                                            ,
                                                        </>
                                                    )}{' '}
                                                {this.props.vendor &&
                                                    this.props.vendor.doc &&
                                                    this.props.vendor.doc
                                                        .city && (
                                                        <>
                                                            {' '}
                                                            {
                                                                this.props
                                                                    .vendor.doc
                                                                    .city
                                                            }
                                                            ,
                                                        </>
                                                    )}{' '}
                                                {this.props.vendor &&
                                                    this.props.vendor.doc &&
                                                    this.props.vendor.doc
                                                        .postalCode && (
                                                        <>
                                                            {' '}
                                                            {
                                                                this.props
                                                                    .vendor.doc
                                                                    .postalCode
                                                            }
                                                            ,
                                                        </>
                                                    )}{' '}
                                                {this.props.vendor &&
                                                    this.props.vendor.doc &&
                                                    this.props.vendor.doc
                                                        .country}
                                            </p>
                                            <figure>
                                                {(this.props.vendor &&
                                                    this.props.vendor.doc &&
                                                    this.props.vendor.doc
                                                        .facebookLink) ||
                                                (this.props.vendor &&
                                                    this.props.vendor.doc &&
                                                    this.props.vendor.doc
                                                        .instagramLink) ? (
                                                    <figcaption>
                                                        Follow us on social
                                                    </figcaption>
                                                ) : null}
                                                <ul className="ps-list--social-color">
                                                    {this.props.vendor &&
                                                        this.props.vendor.doc &&
                                                        this.props.vendor.doc
                                                            .facebookLink && (
                                                            <li>
                                                                <>
                                                                    <>
                                                                        <a
                                                                            className="facebook"
                                                                            style={{
                                                                                fontSize:
                                                                                    '12px',
                                                                            }}
                                                                            href={`www.facebook.com/${
                                                                                this
                                                                                    .props
                                                                                    .vendor &&
                                                                                this
                                                                                    .props
                                                                                    .vendor
                                                                                    .doc &&
                                                                                this
                                                                                    .props
                                                                                    .vendor
                                                                                    .doc
                                                                                    .facebookLink
                                                                            }`}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer">
                                                                            <i className="fa fa-facebook"></i>{' '}
                                                                        </a>
                                                                    </>
                                                                </>
                                                            </li>
                                                        )}
                                                    {this.props.vendor &&
                                                        this.props.vendor.doc &&
                                                        this.props.vendor.doc
                                                            .instagramLink && (
                                                            <li>
                                                                <a
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="instagram"
                                                                    href="https://www.instagram.com/suppli_sa/">
                                                                    <i
                                                                        className="fa fa-instagram"
                                                                        style={{
                                                                            fontSize:
                                                                                '30px',
                                                                        }}></i>
                                                                </a>
                                                            </li>
                                                        )}

                                                    {/* <li>
                                                    <a
                                                        className="linkedin"
                                                        href="#">
                                                        <i className="fa fa-linkedin"></i>
                                                    </a>
                                                </li> */}
                                                    {/* <li>
                                                    <a
                                                        className="feed"
                                                        href="#">
                                                        <i className="fa fa-feed"></i>
                                                    </a>
                                                </li> */}
                                                </ul>
                                            </figure>
                                        </div>
                                        <div className="ps-block__footer">
                                            <p>
                                                Call us directly
                                                <strong>
                                                    {' '}
                                                    {this.props.vendor &&
                                                        this.props.vendor.doc &&
                                                        this.props.vendor.doc
                                                            .phone}
                                                </strong>
                                            </p>
                                            <p>
                                                or Or if you have any question
                                            </p>
                                            <a
                                                className="ps-btn ps-btn--fullwidth"
                                                href={`mailto:${
                                                    this.props.vendor &&
                                                    this.props.vendor.doc &&
                                                    this.props.vendor.doc
                                                        .companyEmail
                                                }
                                            `}>
                                                Contact Seller
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-section__right">
                                <VendorProducts
                                    products={
                                        this.props.vendor &&
                                        this.props.vendor.doc &&
                                        this.props.vendor.doc.products
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

VendorStore.defaultProps = {
    vendor: {},
};
const mapStateToProps = (state) => ({
    vendor: state.vendor.vendor,
    isAuthenticated: state.auth,
    loading: state.auth.loading,
    createdPlugLoading: state.createdPlug,
    vendorLoading: state.vendor.loading,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, { getVendor })(VendorStore);
