import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Product from '../../elements/products/Product';
import ProductWide from '../../elements/products/ProductWide';
import { Spin } from 'antd';
import { getSpecials, getNewArrivals } from '../../../actions/products';
import { getCatergory } from '../../../actions/catergories';

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
                    <div
                        className="example"
                        style={{
                            borderRadius: ' 4px',
                            textAlign: 'center',
                            // margin: ' 20px 0',
                            marginBottom: '20px',
                            padding: '300px 500px',
                            right: '50px',
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
                <div className="ps-home-categories ps-section--furniture">
                    <div className="container">
                        <div className="ps-section__content">
                            <div
                                className="ps-section__header center"
                                style={{
                                    textAlign: 'center',
                                    marginTop: '30px',
                                }}>
                                <h3>
                                    {this.props.category &&
                                        this.props.category.name}
                                </h3>
                            </div>
                            <div className="row">
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
