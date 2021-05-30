import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '../../../store/cart/action';

import Link from 'next/link';
import { Empty } from 'antd';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    handleDecreaseItemQty(product) {
        this.props.dispatch(decreaseItemQty(product));
    }

    handleRemoveCartItem = (product) => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }
        return (
            <div className="ps-section--shopping ps-shopping-cart">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className="ps-section__content">
                        <div className="table-responsive">
                            {/* <Empty /> */}

                            {cartItems.length > 0 ? (
                                <table className="table ps-table--shopping-cart">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {currentCartItems.map((product) => (
                                            <tr key={product.id}>
                                                <td>
                                                    <div className="ps-product--cart">
                                                        <div className="ps-product__thumbnail">
                                                            <Link
                                                                href="/product/[pid]"
                                                                as={`/product/${product._id}`}>
                                                                <a>
                                                                    <img
                                                                        src={`https://suppli-api.herokuapp.com/img/products/${
                                                                            product.imageCover &&
                                                                            product.imageCover
                                                                        }`}
                                                                        alt="Suppl-i"
                                                                    />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="ps-product__content">
                                                            <Link
                                                                href="/product/[pid]"
                                                                as={`/product/${product._id}`}>
                                                                <a className="ps-product__title">
                                                                    {
                                                                        product.name
                                                                    }
                                                                </a>
                                                            </Link>
                                                            <p>
                                                                {/* Brand: */}
                                                                <strong>
                                                                    {
                                                                        product.brandName
                                                                    }
                                                                </strong>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    R {product.price}
                                                </td>
                                                <td>
                                                    <div className="form-group--number">
                                                        <button
                                                            className="up"
                                                            onClick={this.handleIncreaseItemQty.bind(
                                                                this,
                                                                product
                                                            )}>
                                                            +
                                                        </button>
                                                        <button
                                                            className="down"
                                                            onClick={this.handleDecreaseItemQty.bind(
                                                                this,
                                                                product
                                                            )}>
                                                            -
                                                        </button>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="1"
                                                            value={
                                                                product.quantity
                                                            }
                                                            readOnly={true}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    R
                                                    {product.quantity *
                                                        product.price}
                                                </td>
                                                <td>
                                                    <a
                                                        href="#"
                                                        onClick={this.handleRemoveCartItem.bind(
                                                            this,
                                                            product
                                                        )}>
                                                        <i className="icon-cross"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <Empty
                                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                                    imageStyle={{
                                        height: 60,
                                    }}
                                    description={
                                        <span>Oops, shopping cart empty!</span>
                                    }>
                                    {/* <Button type="primary">Create Now</Button> */}
                                </Empty>
                            )}
                        </div>
                        <div className="ps-section__cart-actions">
                            <Link href="/">
                                <a>
                                    <i className="icon-arrow-left mr-2"></i>
                                    Go To Home
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ps-section__footer">
                        <div className="row justify-content-end">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                <div className="ps-block--shopping-total">
                                    <div className="ps-block__header">
                                        <p>
                                            Subtotal <span> R {amount}</span>
                                        </p>
                                    </div>
                                    <div className="ps-block__content">
                                        <ul className="ps-block__product">
                                            {cartItems.length > 0
                                                ? cartItems.map(
                                                      (product, index) => {
                                                          if (index < 3) {
                                                              return (
                                                                  <li
                                                                      key={
                                                                          product._id
                                                                      }>
                                                                      <span className="ps-block__estimate">
                                                                          <Link
                                                                              href="/product/[pid]"
                                                                              as={`/product/${product._id}`}>
                                                                              <a className="ps-product__title">
                                                                                  {
                                                                                      product.name
                                                                                  }
                                                                                  <br />{' '}
                                                                                  x{' '}
                                                                                  {
                                                                                      product.quantity
                                                                                  }
                                                                              </a>
                                                                          </Link>
                                                                      </span>
                                                                  </li>
                                                              );
                                                          }
                                                      }
                                                  )
                                                : ''}
                                        </ul>
                                        <h3>
                                            Total <span>R {amount}</span>
                                        </h3>
                                    </div>
                                </div>
                                {cartItems.length > 0 && (
                                    <Link href="/account/checkout">
                                        <a className="ps-btn ps-btn--fullwidth">
                                            Proceed to checkout
                                        </a>
                                    </Link>
                                )}
                            </div>
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
export default connect(mapStateToProps)(ShoppingCart);
