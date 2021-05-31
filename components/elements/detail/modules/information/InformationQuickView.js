import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rate } from 'antd';
import { addItem } from '../../../../../store/cart/action';
import Link from 'next/link';
import Rating from '../../../Rating';
class InformationQuickView extends Component {
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
        this.props.dispatch(addItem(product));
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
        const { product } = this.props;
        return (
            <div className="ps-product__info">
                <h1>{product.name && product.name}</h1>
                <div className="ps-product__meta">
                    <p>
                        Brand:
                      
                            <a className="ml-2 text-capitalize">
                                {product.brandName && product.brandName}
                            </a>
                      
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
                {product.was ? (
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
                        <a className="ps-btn" href="#">
                            Checkout
                        </a>
                    </Link>
                </div>
                <div className="ps-product__specification">
                    <Link href="/contact-us">
                        <a className="report">Report Abuse</a>
                    </Link>
                    <p>
                        <strong>SKU:</strong> {product._id && product._id}
                    </p>
                    {/* <p className="categories">
                        <strong> Categories:</strong>
                        <Link href="/shop">
                            <a>Consumer Electronics</a>
                        </Link>
                        <Link href="/shop">
                            <a>Refrigerator</a>
                        </Link>
                        <Link href="/shop">
                            <a>Babies & Moms</a>
                        </Link>
                    </p> */}
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
                {/* <div className="ps-product__sharing">
                    <a className="facebook" href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="google" href="#">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a className="linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="instagram" href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(InformationQuickView);
