import React, { Component } from 'react';
import Link from 'next/link';
import { addItem } from '../../../../../store/cart/action';
import { addItemToCompare } from '../../../../../store/compare/action';
import { addItemToWishlist } from '../../../../../store/wishlist/action';
import { connect } from 'react-redux';
import Rating from '../../../Rating';
import { Rate } from 'antd';

class InformationBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
    }

    handleAddItemToCart = (e) => {
        e.preventDefault();
        const { product } = this.props;
        let tempProduct = product;
        tempProduct.quantity = this.state.quantity;
            this.props.dispatch(addItem({ ...product, plug: product.plug._id }));
    };

    handleAddItemToCompare = (e) => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToCompare(product));
    };

    handleAddItemToWishlist = (e) => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToWishlist(product));
    };

    handleIncreaseItemQty = (e) => {
        e.preventDefault();
        this.setState({ quantity: this.state.quantity + 1 });
    };

    handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
    };

    render() {
        const { product, currency } = this.props;
        return (
            <div className="ps-product__info">
                <h1>{product.name && product.name}</h1>
                <div className="ps-product__meta">
                    <p>
                        Brand:
                 
                            {product.brandName && product.brandName}
                  
                    </p>
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
                </div>
                {product.was && product.was ? (
                    <h4 className="ps-product__price sale">
                        R{product.price && product.price}{' '}
                        <del>R{product.was && product.was}</del>
                    </h4>
                ) : (
                    <h4 className="ps-product__price">
                        R{product.price && product.price}
                    </h4>
                )}
                <div className="ps-product__desc">
                    <p>
                        <Link
                            href="/vendor/[vid]"
                            as={`/vendor/${
                                product.plug &&
                                product.plug._id &&
                                product.plug._id
                            }`}>
                            <a>
                                <strong> Visit Store</strong>
                            </a>
                        </Link>
                    </p>

                    <ul className="ps-list--dot">
                        {product.quickPoints &&
                            product.quickPoints.map((point) => (
                                <li> {point}</li>
                            ))}
                    </ul>
                </div>
                <div className="ps-product__shopping">
                    <figure>
                        <figcaption>Quantity</figcaption>
                        <div className="form-group--number">
                            <button
                                className="up"
                                onClick={this.handleIncreaseItemQty.bind(this)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                onClick={this.handleDecreaseItemQty.bind(this)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                placeholder={this.state.quantity}
                                disabled
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn ps-btn--black"
                        href="#"
                        onClick={this.handleAddItemToCart.bind(this)}>
                        Add to cart
                    </a>

                    <Link href="/checkout">
                        <a className="ps-btn">Checkout</a>
                    </Link>
                </div>
                <div className="ps-product__specification">
                    <Link href="/contact">
                        <a className="report">Report Abuse</a>
                    </Link>
                    <p>
                        <strong>SKU:</strong> {product._id && product._id}
                    </p>
                    {/* <p className="Tags">
                        <strong> Categories:</strong> */}
                    {/* {product &&
                            product.tags &&
                            product.tags.map(
                                <Link href="/shop">
                                    <a>Consumer Electronics</a>
                                </Link>
                            )} */}
                    {/* </p> */}
                    {/* <p className="tags">
                        {' '}
                        <strong> Tags:</strong>
                        {product.tags.map((tag) => (
                            <Link href="/shop">
                                <a>{tag}</a>
                            </Link>
                        ))}
                    </p> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.setting;
};
export default connect(mapStateToProps)(InformationBox);
