import ThumbnailBox from './modules/thumbnail/ThumbnailBox';
import InformationBox from './modules/information/InformationBox';
import DescriptionBox from './modules/description/DescriptionBox';
import Product from '../products/Product';
import { connect } from 'react-redux';
import { sample, products } from '../../../public/static/data/product';
import { getProduct } from '../../../actions/products';
import Widgets from '../../partials/product/ProductWidgets';
import React, { Component } from 'react';
import { Spin } from 'antd';
import '../../../components/tailwind.scss'
import { Spinner } from 'react-activity';
import Modal from 'react-modal'
export class ProductDetailBox extends Component {
    componentDidMount() {
        this.props.getProduct(this.props.pid);
    }
    render() {
        console.log(this.props);
        const { newProduct } = this.props;
        return (
            <>
                {this.props.productLoading && this.props.productLoading && (
                    <Modal style={{ zIndex: 99999 }} isOpen={true} ariaHideApp={false}
                        overlayClassName={`flex w-screen position-float fixed top-0 left-0 h-screen bg-opacity-50 bg-white z-50`}
                        className={`border-none m-auto select-none outline-none w-content z-50`}>
                        <Spinner
                            color="black"
                            size={32}
                            speed={1}
                            animating={true} /></Modal>
                )}
                <div>
                    <div className="ps-product--detail ps-product--box">
                        <div className="ps-product__header ps-product__box">
                            <ThumbnailBox
                                product={
                                    this.props.newProduct &&
                                    this.props.newProduct
                                }
                            />
                            {this.props.newProduct && (
                                <InformationBox
                                    product={
                                        this.props.newProduct &&
                                        this.props.newProduct
                                    }
                                />
                            )}
                        </div>
                        <div className="ps-product__content">
                            <div className="row">
                                <div className="col-xl-9">
                                    <DescriptionBox
                                        product={
                                            this.props.newProduct &&
                                            this.props.newProduct
                                        }
                                    />
                                </div>
                                <div className="col-xl-3">
                                    <div className="ps-product__box">
                                        <Widgets />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.popularProducts.products,
    newArrivals: state.newArrivals.products,
    randomProducts: state.randomProducts.products,
    newProduct: state.newProduct.product,
    productLoading: state.newProduct.loading,
});

export default connect(mapStateToProps, { getProduct })(ProductDetailBox);
