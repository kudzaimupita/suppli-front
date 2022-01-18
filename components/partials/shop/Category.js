import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Product from '../../elements/products/Product';
import ProductWide from '../../elements/products/ProductWide';
import { Spin } from 'antd';
import { getSpecials, getNewArrivals } from '../../../actions/products';
import { getCatergory } from '../../../actions/catergories';
import Modal from 'react-modal'
// import { getVendors, getVendor } from './../../../../actions/vendors';
import '../../tailwind.scss'
import { Spinner } from 'react-activity';
class LayoutShopSidebarWithoutBanner extends Component {
    state = {
        listView: true,
    };

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };
    componentDidMount() {
        this.props.getNewArrivals();
        this.props.getCatergory(this.props.cid);
    }

    render() {
        const viewMode = this.state.listView;
        return (
            <>
                {' '}
                {this.props.subCatLoading && this.props.subCatLoading && (
                    <Modal style={{ zIndex: 99999 }} isOpen={true} ariaHideApp={false}
                        overlayClassName={`flex w-screen position-float fixed top-0 left-0 h-screen bg-opacity-50 bg-white z-50`}
                        className={`border-none m-auto select-none outline-none w-content z-50`}>
                        <Spinner
                            color="black"
                            size={32}
                            speed={1}
                            animating={true} /></Modal>
                )}{' '}
                <div className="ps-home-categories ps-section--furniture">
                    <div className="container divide-y">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                            <img
                                className="mx-auto mt-2 h-24 w-auto"
                                src={`https://suppli-images.s3.af-south-1.amazonaws.com/${this.props.category && this.props.category.imageCover
                                    }`}

                                alt="suppl-i"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">   <h3>
                                {this.props.category &&
                                    this.props.category.name}
                            </h3></h2>

                        </div>
                        <div className="ps-section__content ">

                            <div className="row mt-4">
                                {this.props.category &&
                                    this.props.category.subCatergories &&
                                    this.props.category.subCatergories.map(
                                        (vendor) => (
                                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                                <div
                                                    className="ps-block--category"
                                                    style={{
                                                        backgroundColor:
                                                            'white',
                                                        borderRadius: '50px',
                                                    }}>
                                                    <Link
                                                        href="/sub-category/[cid]"
                                                        as={`/sub-category/${vendor._id}`}>
                                                        <a></a>
                                                    </Link>
                                                    <i
                                                        class="fa fa-shopping-bag"
                                                        style={{
                                                            fontSize: '60px',
                                                            marginBottom:
                                                                '30px',
                                                            // color: 'white',
                                                        }}></i>
                                                    <p>{vendor.name}</p>
                                                </div>
                                            </div>
                                        )
                                    )}

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
const mapStateToProps = (state) => ({
    products: state.newArrivals.products,
    // newArrivals: state.newArrivals.products,
    randomProducts: state.randomProducts.products,
    vendors: state.allVendors.vendors,
    category: state.catergory.catergory,
    subCatLoading: state.catergory.loading,
});

export default connect(mapStateToProps, {
    getSpecials,
    getNewArrivals,
    getCatergory,
})(LayoutShopSidebarWithoutBanner);
