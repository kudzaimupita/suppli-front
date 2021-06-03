import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart, removeItem } from '../../../store/cart/action';
import Link from 'next/link';

class PanelCartMobile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleRemoveCartItem = (product) => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartItems } = this.props;
        return (
            <div className="ps-panel--wrapper">
                <div className="ps-panel__header">
                    <h3>Shopping Cart</h3>
                </div>
                <div className="ps-panel__content">
                    <div className="ps-cart--mobile">
                        <div className="ps-cart__content">
                            {cartItems && cartItems.length > 0 ? (
                                cartItems.map((product) => (
                                    <div
                                        className="ps-product--cart-mobile"
                                        key={product._id}>
                                        <div className="ps-product__thumbnail">
                                            <Link
                                                href="/product/[pid]"
                                                as={`/product/${product._id}`}>
                                                <a>
                                                    <img
                                                        src={`https://suppli-images.s3.af-south-1.amazonaws.com/${
                                                            product.imageCover &&
                                                            product.imageCover
                                                        }`}
                                                        alt="Suppl-i"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="ps-product__content">
                                            <a
                                                className="ps-product__remove"
                                                onClick={this.handleRemoveCartItem.bind(
                                                    this,
                                                    product
                                                )}>
                                                <i className="icon-cross"></i>
                                            </a>
                                            <Link
                                                href="/product/[pid]"
                                                as={`/product/${product._id}`}>
                                                <a className="ps-product__title">
                                                    {product.name}
                                                </a>
                                            </Link>
                                            <p>
                                                <strong>Brand</strong>{' '}
                                                {product.brandName}
                                            </p>
                                            <small>
                                                {product.quantity} x R
                                                {product.price}
                                            </small>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="ps-cart__items">
                                    <span>No products in cart</span>
                                </div>
                            )}
                        </div>
                        <div className="ps-cart__footer">
                            <h3>
                                Sub Total:<strong>R {amount}</strong>
                            </h3>
                            <figure>
                                <Link
                                    href="/account/shopping-cart"
                                    style={{ color: 'white' }}>
                                    <a
                                        style={{ color: 'white' }}
                                        className="ps-btn">
                                        View Cart
                                    </a>
                                </Link>
                                <Link
                                    href="/account/shopping-cart"
                                    style={{ color: 'white' }}>
                                    <a
                                        style={{ color: 'white' }}
                                        className="ps-btn">
                                        Checkout
                                    </a>
                                </Link>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(PanelCartMobile);
