import React, { Component } from 'react';
import Link from 'next/link';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import Rating from '../Rating';
class ProductHorizontal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product, currency } = this.props;
        return (
            <div className="ps-product--horizontal">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product._id}`}>
                        <a>
                            <img
                                src={`https://suppli-images.s3.af-south-1.amazonaws.com/${product.imageCover}`}
                                alt="Suppl-i"
                            />
                        </a>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product._id}`}>
                        <a className="ps-product__title">{product.name}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating />
                    </div>
                    {product.sale === true ? (
                        <p className="ps-product__price sale">
                            {'R'}
                            {product.price}
                            <del className="ml-2">
                                {'R'}
                                {product.was}
                            </del>
                        </p>
                    ) : (
                        <p className="ps-product__price">
                            {'R'}
                            {product.price}
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
export default connect(mapStateToProps)(ProductHorizontal);
