import ThumbnailBox from './modules/thumbnail/ThumbnailBox';
import InformationBox from './modules/information/InformationBox';
import DescriptionBox from './modules/description/DescriptionBox';
import Product from '../products/Product';
import { connect } from 'react-redux';
import { sample, products } from '../../../public/static/data/product';
import { getProduct } from '../../../actions/products';
import Widgets from '../../partials/product/ProductWidgets';
import React, { Component } from 'react';

export class ProductDetailBox extends Component {
    componentDidMount() {
        this.props.getProduct(this.props.pid);
    }
    render() {
        console.log(this.props);
        const { newProduct } = this.props;
        return (
            <div>
                <div className="ps-product--detail ps-product--box">
                    <div className="ps-product__header ps-product__box">
                        <ThumbnailBox
                            product={
                                this.props.newProduct && this.props.newProduct
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
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.popularProducts.products,
    newArrivals: state.newArrivals.products,
    randomProducts: state.randomProducts.products,
    newProduct: state.newProduct.product,
});

export default connect(mapStateToProps, { getProduct })(ProductDetailBox);
