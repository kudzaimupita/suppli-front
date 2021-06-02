import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getVendors, getVendor } from './../../../../actions/vendors';

class FurnitureCategories extends Component {
    componentDidMount() {
        this.props.getVendors();
    }
    render() {
        return (
            <div className="ps-home-categories ps-section--furniture">
                <div className="container">
                    <div className="ps-section__content">
                        <div
                            className="ps-section__header center"
                            style={{ textAlign: 'center' }}>
                            <h3><strong>Our stores</strong></h3>
                        </div>
                        <div className="row">
                            {this.props.vendors &&
                                this.props.vendors.slice(0, 8).map((vendor) => (
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
                                                style={{ borderRadius: '50px' }}
                                                src={`https://suppli-images.s3.af-south-1.amazonaws.com/${vendor.logo}`}
                                                alt="Suppl-i"
                                            />
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
        );
    }
}

FurnitureCategories.defaultProps = {
    vendors: [],
};

const mapStateToProps = (state) => ({
    vendors: state.allVendors.vendors,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, { getVendors })(FurnitureCategories);
