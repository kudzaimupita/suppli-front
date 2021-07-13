import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getCart, removeItem } from '../../../../store/cart/action';
class MiniCart extends Component {
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
        const { amount, cartTotal, cartItems } = this.props;
        return (
            <div className="ps-cart--mini">
                <a className="header__extra" href="#">
                    <i className="icon-bag2" style={{ color: 'black' }}></i>
                    <span>
                        <i>{cartTotal ? cartTotal : 0}</i>
                    </span>
                </a>
                {cartItems && cartItems.length > 0 ? (
                    <div
                        className="ps-cart__content"
                        style={{ color: 'black' }}>
                        <div className="ps-cart__items">
                            {cartItems && cartItems.length > 0
                                ? cartItems.map((product) => (
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
                                          <div
                                              className="ps-product__content"
                                              style={{ color: 'black' }}>
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
                                                  <strong>Brand:</strong>{' '}
                                                  {product.brandName}
                                              </p>
                                              <small>
                                                  {product.quantity} x R
                                                  {product.price}
                                              </small>
                                          </div>
                                      </div>
                                  ))
                                : ''}
                        </div>
                        <div className="ps-cart__footer">
                            <h3>
                                Sub Total:
                                <strong>R{amount ? amount : 0}</strong>
                            </h3>
                            <figure>
                                <Link href="/account/shopping-cart">
                                    <a
                                        style={{
                                            color: 'white',
                                        }}
                                        className="ps-btn">
                                        View Cart
                                    </a>
                                </Link>
                                <Link href="/account/checkout" as="/checkout">
                                    <a
                                        style={{
                                            color: 'white',
                                        }}
                                        className="ps-btn">
                                        Checkout
                                    </a>
                                </Link>
                            </figure>
                        </div>
                    </div>
                ) : (
                    <div className="ps-cart__content">
                        <div className="ps-cart__items">
                            <span>No products in cart</span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(MiniCart);
