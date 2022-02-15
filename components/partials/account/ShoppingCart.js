import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '../../../store/cart/action';
import '../../../components/tailwind.scss'
import { Spinner } from 'react-activity';
import { MailIcon, PhoneIcon, TrashIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

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
        const items = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            // More items...
        ]
        return (
            <div className="ps-section--shopping ps-shopping-cart">

                <div className="container">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                        <img
                            className="mx-auto h-12 w-auto"
                            src='/static/img/suppli-logo.png'
                            alt="supl-i"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Shopping Cart</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href='/checkout' className="font-medium text-indigo-600 hover:text-indigo-500">
                                Continue Shipping
                            </a>
                        </p>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-3">

                        <div class="col-span-2 ... .mx-auto sm:px-6 lg:px-8">

                            <div className="ps-section__content rounded-lg">

                                <div className="table-responsive rounded-lg">
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

                                            <tbody className="space-y-3">

                                                {currentCartItems.map((product) => (
                                                    <tr key={product.id} className="mt-4 bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
                                                        <td className="mt-4 ">
                                                            <div className="ps-product--cart">
                                                                <div className="ps-product__thumbnail">
                                                                    <Link
                                                                        href="/product/[pid]"
                                                                        as={`/product/${product._id}`}>
                                                                        <a>
                                                                            <img className="  border border-gray-200 rounded-md overflow-hidden"
                                                                                src={`https://suppli-images.s3.af-south-1.amazonaws.com/${product.imageCover && product.imageCover
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
                                                            R {product.price?.toFixed(2)}
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
                                                            {(product.quantity *
                                                                product.price).toFixed(2)}
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="#"
                                                                onClick={this.handleRemoveCartItem.bind(
                                                                    this,
                                                                    product
                                                                )}>
                                                                <TrashIcon className="h-5 w-5 text-red-500 group-hover:text-indigo-400" aria-hidden="true" />
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


                        </div>
                        <div class="... ">  <div className="ps-section__footer">
                            <div className=" ">
                                <div className="">
                                    <div className="ps-block--shopping-total bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
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

                                                            <li
                                                                key={
                                                                    product._id
                                                                }>
                                                                <span className="ps-block__estimate">
                                                                    <Link
                                                                        href="/product/[pid]"
                                                                        as={`/product/${product._id}`}>
                                                                        <a className="ps-product__title">
                                                                            {/* 
                                                                                    <img
                                                                                        src={`https://suppli-images.s3.af-south-1.amazonaws.com/${product.imageCover &&
                                                                                            product.imageCover
                                                                                            }`}
                                                                                        alt='suppl-i' className="w-8 h-8 border border-gray-200 rounded-md"
                                                                                    // className="w-full h-full object-center object-cover"
                                                                                    /> */}

                                                                            {
                                                                                product.name
                                                                            }
                                                                            {"   "}
                                                                            x{' '}
                                                                            {
                                                                                product.quantity
                                                                            }
                                                                        </a>
                                                                    </Link>
                                                                </span>
                                                            </li>

                                                        }
                                                    )
                                                    : ''}
                                            </ul>    <p className="mt-2 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <h3>
                                                Sub-Total <span className='text-green-400'>R {amount}</span>
                                            </h3>
                                            {/* <hr></hr> */}

                                        </div>
                                    </div>
                                    {cartItems.length > 0 && (
                                        <Link href="/checkout">
                                            <a className="ps-btn bg-gray-700 ps-btn--fullwidth text-white">
                                                Proceed to checkout
                                            </a>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div></div>

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
