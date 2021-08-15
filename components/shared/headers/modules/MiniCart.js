import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getCart, removeItem } from '../../../../store/cart/action';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import './../../../tailwind.scss'
// import { Fragment, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { XIcon } from '@heroicons/react/outline'
// import './tailwind.scss'

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

class MiniCart extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        open: false
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleRemoveCartItem = (product) => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const products = [
            {
                id: 1,
                name: 'Throwback Hip Bag',
                href: '#',
                color: 'Salmon',
                price: '$90.00',
                quantity: 1,
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
                imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
            },
            {
                id: 2,
                name: 'Medium Stuff Satchel',
                href: '#',
                color: 'Blue',
                price: '$32.00',
                quantity: 1,
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
                imageAlt:
                    'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
            },
            // More products...
        ]
        const { amount, cartTotal, cartItems } = this.props;
        return (
            <div className="ps-cart--mini" onClick={() => this.setState({ open: true })}>
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
                                                        src={`https://suppli-images.s3.af-south-1.amazonaws.com/${product.imageCover &&
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

                            <div className="border-t border-gray-200 py-2 px-4 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>   <strong>R{amount ? amount : 0}</strong></p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                <div className="mt-6">

                                    <a
                                        href="/checkout" as="/checkout"
                                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        <span className="left-0 inset-y-0 flex items-center pr-3">
                                            <ShoppingCartIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-400" aria-hidden="true" />
                                        </span>   Checkout
                                    </a>
                                </div>
                                {/* <div className="mt-6">
                                    <a
                                        href="/checkout" as="/checkout"
                                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Close<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div> */}
                                <div className="mb-3 mt-1 flex justify-center text-sm text-center text-gray-500 mt-2">
                                    <a href="/account/shopping-cart">
                                        or{' '}
                                        <button
                                            type="button"
                                            className="text-indigo-600 font-medium hover:text-indigo-500"
                                        // onClick={() => setOpen(false)}
                                        >
                                            Shopping Cart <span aria-hidden="true"> &rarr;</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
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
