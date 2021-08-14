import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import Link from 'next/link';
import Modal from 'react-modal'
import { getVendors, getVendor } from './../../../../actions/vendors';
import '../../../tailwind.scss'
class FurnitureCategories extends Component {
    componentDidMount() {
        this.props.getVendors();
    }
    render() {
        return (
            <>
                {' '}

                {this.props.vendorsLoading && this.props.vendorsLoading && (
                    <Modal isOpen={true} ariaHideApp={false}
                        overlayClassName={`flex w-screen position-float fixed top-0 left-0 h-screen bg-opacity-50 bg-white z-50`}
                        className={`z-index-90  border-none m-auto select-none outline-none w-content z-50`}>
                        <Spin size="large" /></Modal>
                )}
                {this.props.productsLoading && this.props.productsLoading && (
                    <Modal isOpen={true} ariaHideApp={false}
                        overlayClassName={`flex w-screen position-float fixed top-0 left-0 h-screen bg-opacity-50 bg-white z-50`}
                        className={` border-none m-auto select-none outline-none w-content z-50`}>
                        <Spin size="large" /></Modal>
                )}
                <div className="ps-home-categories ps-section--furniture">
                    <div className="container">
                        <div className="ps-section__content">
                            <div
                                className="ps-section__header center"
                                style={{ textAlign: 'center' }}>
                                <h3>
                                    <strong>Our stores</strong>
                                </h3>
                            </div>
                            <div className="row">
                                {this.props.vendors &&
                                    this.props.vendors
                                        .slice(0, 8)
                                        .map((vendor) => (
                                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                                <div
                                                    className="ps-block--category"
                                                    style={{
                                                        backgroundColor:
                                                            'white',
                                                        borderRadius: '50px',
                                                    }}>
                                                    <Link
                                                        href="/vendor/[vid]"
                                                        as={`/vendor/${vendor._id}`}>
                                                        <a className="ps-product__title"></a>
                                                    </Link>
                                                    {vendor.logo ? <img
                                                        style={{
                                                            borderRadius:
                                                                '50px',
                                                        }}
                                                        src={`https://suppli-images.s3.af-south-1.amazonaws.com/${vendor.logo}`}
                                                        alt="Suppl-i"
                                                    /> : <img
                                                        style={{
                                                            borderRadius:
                                                                '50px',
                                                        }}
                                                        src="/static/img/555.jpg"
                                                        alt="Suppl-i"
                                                    />}
                                                    <p>{vendor.name}</p>
                                                </div>
                                            </div>
                                        ))}

                                {this.props.vendors &&
                                    this.props.vendors.length > 8 && (
                                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                            <div
                                                className="ps-block--category"
                                                style={{
                                                    backgroundColor: 'white',
                                                    borderRadius: '50px',
                                                }}>
                                                <Link href="/stores">
                                                    <a></a>
                                                </Link>

                                                <p>See All </p>
                                                <i
                                                    class="fa fa-arrow-circle-right"
                                                    style={{
                                                        fontSize: '30px',
                                                    }}></i>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

FurnitureCategories.defaultProps = {
    vendors: [],
};

const mapStateToProps = (state) => ({
    vendors: state.allVendors.vendors,
    vendorsLoading: state.allVendors.loading,
    productsLoading: state.popularProducts.loading,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, { getVendors })(FurnitureCategories);
