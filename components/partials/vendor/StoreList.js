import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getVendors } from './../../../actions/vendors';
import { Spin } from 'antd'
import '../../tailwind.scss'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { LockClosedIcon } from '@heroicons/react/solid'
import '../../../components/tailwind.scss'
import { Spinner } from 'react-activity';
import Modal from 'react-modal'
import { PlusSmIcon } from '@heroicons/react/solid'
class FurnitureCategories extends Component {
    componentDidMount() {
        this.props.getVendors();
    }
    render() {
        return (
            <>
                {this.props.vendorsLoading && this.props.vendorsLoading && (
                    <Modal style={{ zIndex: 99999 }} isOpen={true} ariaHideApp={false}
                        overlayClassName={`flex w-screen position-float fixed top-0 left-0 h-screen bg-opacity-50 bg-white z-50`}
                        className={`border-none m-auto select-none outline-none w-content z-50`}>
                        <Spinner
                            color="black"
                            size={32}
                            speed={1}
                            animating={true} /></Modal>
                )}
                <div className="ps-home-categories ps-section--furniture bg-gray-100" style={{ backgroundColor: '#eeeeee' }}>
                    <div className="container ">
                        <div className="ps-section__content">
                            {/* <div
                                className="ps-section__header center"
                                style={{
                                    textAlign: 'center',
                                    marginTop: '30px',
                                }}>
                                <h3>Our stores</h3>
                            </div> */}
                            <div className="relative mb-6 mt-4" >
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-500" />
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="px-3  text-2xl font-medium text-gray-900" style={{ backgroundColor: '#eeeeee' }}>Our Stores</span>
                                </div>
                            </div>
                            <div className="row">
                                {this.props.vendors &&
                                    this.props.vendors.map((vendor) => (
                                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                            <div
                                                className="ps-block--category"
                                                style={{
                                                    backgroundColor: 'white',
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

                                {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                <div
                                    className="ps-block--category"
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '50px',
                                    }}>
                                    <Link href="/shop">
                                        <a></a>
                                    </Link>

                                    <p>See All </p>
                                    <i
                                        class="fa fa-arrow-circle-right"
                                        style={{ fontSize: '30px' }}></i>
                                </div>
                            </div> */}
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
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, { getVendors })(FurnitureCategories);
