import React, { Component } from 'react';
import Link from 'next/link';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import Rating from '../Rating';

class ProductResult extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product, currency } = this.props;

        return (
            <div className="ps-product ps-product--wide ps-product--search-result">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product._id}`}>
                        <a>
                            <img
                                src={`https://suppli-api.herokuapp.com/img/products/${
                                    product.imageCover && product.imageCover
                                }`}
                                alt="Suppl-i"
                            />
                        </a>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product._id}`}>
                        <a className="ps-product__title">
                            {product.name && product.name}
                        </a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rate
                            disabled
                            defaultValue={
                                product.ratingsAverage && product.ratingsAverage
                            }
                        />
                        <span>
                            {product.ratingsQuantity && product.ratingsQuantity}
                        </span>
                    </div>
                    {product.was && product.was ? (
                        <p className="ps-product__price sale">
                            {'R'}
                            {product.price && product.price}
                            <del className="ml-1">
                                {'R'}
                                {product.was && product.was}
                            </del>
                        </p>
                    ) : (
                        <p className="ps-product__price">
                            {'R'}
                            {product.price && product.price}
                        </p>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductResult);
