import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getVendors } from './../../../actions/vendors';
import { Spin } from 'antd';
class FurnitureCategories extends Component {
    componentDidMount() {
        this.props.getVendors();
    }
    render() {
        return (
            <>
                {this.props.vendorsLoading && this.props.vendorsLoading && (
                    <div
                        style={{
                            borderRadius: ' 4px',
                            textAlign: 'center',
                            // left: ' 20px',
                            // top: '60px',
                            marginBottom: '20px',
                            padding: '300px 100px',
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
                )}
                <div className="ps-home-categories ps-section--furniture">
                    <div className="container">
                        <div className="ps-section__content">
                            <div
                                className="ps-section__header center"
                                style={{
                                    textAlign: 'center',
                                    marginTop: '30px',
                                }}>
                                <h3>Our stores</h3>
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
                                                <img
                                                    style={{
                                                        borderRadius: '50px',
                                                    }}
                                                    src={`https://suppli-images.s3.af-south-1.amazonaws.com/${vendor.logo}`}
                                                    alt="Suppl-i"
                                                />
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
