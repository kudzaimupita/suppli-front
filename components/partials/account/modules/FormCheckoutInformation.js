import React, { Component } from 'react';
import Link from 'next/link';
import Payment from './Payment';
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { Form, Input, Card, Row } from 'antd';
import { createOrderAction, setCurrentOrder } from '../../../../actions/orders';
import { getVendor } from '../../../../actions/vendors';
import { connect } from 'react-redux';
import { createCompleteBooking, CreateExpressBooking } from './calculate';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import '../../../tailwind.scss'
import { Badge, Radio, Tooltip } from 'antd';
import Radioo from './radioGroup'
import { setAlert } from '../../../../actions/alert';
const wrap = Badge.Ribbon
class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        address: '',
        name: '',
        phone: '',
        price: '',
        prices: {},
        province: '',
        type: '',
        code: '',
        province: '',

    }
    componentDidMount() {

        this.props.isLoggedIn && this.props.cartItems[0]?.plug && this.props.getVendor(this.props?.cartItems[0]?.plug)

    }


    onSubmit = e => {
        e.preventDefault();
        const price = parseFloat((this.props.amount * 1) + (this.state.price * 1)).toFixed(2);
        const body = {

            name: this.state.name,
            phone: this.state.phone,
            products: this.props.cartItems,
            amount: price,
            address: this.state.address,
            paymentID: this.props.orderId, type: this.state.type || 'BUDGET_COURIER'
        }
        console.log(this.state.type)
        this.props.setCurrentOrder({
            ...body, store: this.props.vendor && this.props.vendor, type: this.state.type, code: this.state.code,
            province: this.state.province,
        })
        this.props.createOrderAction(body)
    };

    handleAddressChange = async (place) => {
        this.setState({ address: place?.formatted_address });
        this.setState({ province: place.address_components[5].long_name })
        // this.setState({ price: await createCompleteBooking(this.props.vendor && this.props.vendor?.postalCode, this.state.address.split(',')[3]) })
        this.setState({ prices: await createCompleteBooking(this.props.vendor && this.props.vendor?.postalCode, place.address_components[7].long_name, { dropOffProvince: place.address_components[5].long_name.toUpperCase(), pickUpProvince: this.props.vendor && this.props.vendor?.province || 'GAUTENG' }) })
        // await CreateExpressBooking()
        this.setState({ code: place.address_components[7].long_name })
        this.setState({ province: place.address_components[5].long_name })
        // console.log(await CreateExpressBooking())
    };
    handleSelectedType = (e) => {
        this.setState({ type: e })
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };
    handlePhoneChange = async (e) => {
        this.setState({ phone: e.target.value });
    };
    handleProvinceChange = async (e) => {
        this.setState({ province: e.target.value });
    };
    setSelectedPrice = (e) => {
        this.setState({ price: e })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        // const province = this.state.province.toLower()
        // const provinces = ['eastern cape',
        //     'free state',
        //     'gauteng',
        //     'kwaZulu natal',
        //     'limpopo',
        //     'mpumalanga',
        //     'northern cape',
        //     'north west',
        //     'kzn',
        //     'western cape']

        // if (provinces.some((e) => e === province)) {
        this.onSubmit(e)
        // } else {
        //     return setAlert('Please provide a valid province', 'province')
        // }

    };
    setPaymentId = (id) => {
        console.log(id)
        this.setState({ paymentID: id })
    }

    render() {


        console.log(this.props.vendor && this.props.vendor?.postalCode, this.state.address.split(',')[3])
        const { getFieldDecorator } = this.props.form;
        const { amount, cartItems, cartTotal } = this.props;
        // const vendorAddress = cartItems[0]._id

        return (<>
            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                <img
                    className="mx-auto h-12 w-auto"
                    src='/static/img/suppli-logo.png'
                    alt="supl-i"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Checkout</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    <a href='/account/shopping-cart' className="font-medium text-indigo-600 hover:text-indigo-500">
                        Continue Shipping
                    </a>
                </p>
            </div>
            <Form
                className="ps-form--checkout"
                onSubmit={this.handleSubmit}>
                <div className="ps-form__content ">
                    <div className="row" >
                        {/* <Row></Row> */}
                        <Card className="col-xl-7 col-lg-7 col-md-12 col-sm-12" style={{ marginRight: '15px' }}>
                            <div className="ps-form__billing-info">
                                <h3 className="ps-form__heading">
                                    Contact information
                                </h3>

                                {/* <div className="form-group">
                                    <Form.Item>
                                        {getFieldDecorator('text', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Enter an email or mobile phone number!',
                                                },
                                            ],
                                        })(
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder="Email or phone number"
                                            />,
                                        )}
                                    </Form.Item>
                                </div> */}

                                {/* <h3 className="ps-form__heading">
                                    Shipping address
                                </h3> */}
                                {/* <input ref={ref} style={{ width: "90%" }} defaultValue="Amsterdam" /> */}
                                {this.props.orderId ? null : <>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Form.Item>
                                                    {getFieldDecorator(
                                                        'name',
                                                        {
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    message:
                                                                        'Enter your name!',
                                                                },
                                                            ],
                                                        },
                                                    )(
                                                        <Input
                                                            required='true'
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Name"
                                                            value={this.state.name}
                                                            onChange={this.handleNameChange}
                                                        />,
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Form.Item>
                                                    {getFieldDecorator('phone', {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Enter your phone number!',
                                                            },
                                                        ],
                                                    })(

                                                        <Input
                                                            required='true'
                                                            className="form-control"
                                                            type="number" id="phone" name="phone"
                                                            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                            placeholder="Phone"
                                                            value={this.state.phone}
                                                            onChange={this.handlePhoneChange}
                                                        />,
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>

                                    </div>

                                    <Autocomplete
                                        required='true'
                                        apiKey='AIzaSyDdkpFLrMBAYzzMZg699Yr-lQJ1ksyfN2Q'
                                        className="form-control"
                                        style={{ width: "100%", height: '50px', marginBottom: '20px' }}
                                        onPlaceSelected={(place) => {
                                            this.handleAddressChange(place)
                                        }}
                                        options={{
                                            types: ["address"],
                                            componentRestrictions: { country: "za" },
                                        }}

                                    />
                                    <wrap text="Hippies" color="cyan">

                                        {this.state.address && <div className="form-group ml-12">
                                            <Radioo setSelectedType={this.handleSelectedType} setSelectedPrice={this.setSelectedPrice} prices={this.state.prices} />
                                            {/* <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="keep-update"
                                        />
                                        <label htmlFor="keep-update">
                                            Save this information for next time
                                        </label>
                                    </div> */}
                                        </div>} </wrap>  </>}

                                <div className="ps-form__submit">
                                    {/* <a href="/account/shopping-cart">

                                        <i className="icon-arrow-left mr-2"></i>
                                        Return to shopping cart

                                    </a> */}
                                    {this.state.price && <div className="ps-block__footer"  >

                                        {!this.props.orderId && <button type="submit" className="ps-btn " style={{ color: 'white' }}>
                                            Pay {this.state.price && new Intl.NumberFormat("de-ZA", {
                                                style: "currency",
                                                currency: "ZAR",
                                            }).format((this.state.price * 1) + (amount * 1))}
                                        </button>}
                                    </div>}

                                </div>
                                <div style={{ marginTop: '30px' }}>   </div>

                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="ps-block--shipping">

                                    {/* <h4>Shipping Method</h4>
                                    <div className="ps-block__panel">
                                        <figure>
                                            <small>
                                                Droppa Shipping
                                            </small>
                                            <strong>R20.00</strong>
                                        </figure>
                                    </div>
                                    <h4>Payment Details</h4> */}
                                    <Payment setPaymentId={this.setPaymentId} orderId={this.props.orderId} />



                                </div>
                            </div>

                        </Card>

                        <Card className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order shadow bg-white overflow-hidden border-b border-gray-200 rounded-lg" >
                            <div className="">
                                <h3>Order Summary</h3>
                                {/* <hr></hr> */}
                                <div className="">
                                    <div className="">
                                        <figure>
                                            <figcaption>
                                                <strong>Product</strong>
                                                <strong>total</strong>
                                            </figcaption>
                                        </figure>
                                        <figure className="ps-block__items">

                                            <div className="mt-2">
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {cartItems &&
                                                            cartItems.map((product) => (
                                                                <li key={product._id} className="py-6 flex">
                                                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                                        <img
                                                                            src={`https://suppli-images.s3.af-south-1.amazonaws.com/${product.imageCover &&
                                                                                product.imageCover
                                                                                }`}
                                                                            alt='suppl-i'
                                                                            className="w-full h-full object-center object-cover"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex-1 flex flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>
                                                                                    <a href={product.href}>{product.name}</a>
                                                                                </h3>
                                                                                <p className="ml-4">      {new Intl.NumberFormat("de-ZA", {
                                                                                    style: "currency",
                                                                                    currency: "ZAR",
                                                                                }).format(product.quantity *
                                                                                    product.price)}</p>
                                                                            </div>
                                                                            {/* <p className="mt-1 text-sm text-gray-500">{product.brandName}</p> */}
                                                                        </div>
                                                                        <div className="flex-1 flex items-end justify-between text-sm">
                                                                            <p className="text-gray-500">Qty {product.quantity}</p>
                                                                            {/* 
                                                                            <div className="flex">
                                                                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                                    Remove
                                                                                </button>
                                                                            </div> */}
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>

                                        <figure>
                                            <figcaption>
                                                <strong>Subtotal</strong>
                                                <small>       {new Intl.NumberFormat("de-ZA", {
                                                    style: "currency",
                                                    currency: "ZAR",
                                                }).format(amount)}</small>
                                            </figcaption>
                                        </figure>
                                        {this.state.price && <figure className="ps-block__shipping">
                                            <h5>Shipping</h5>
                                            {new Intl.NumberFormat("de-ZA", {
                                                style: "currency",
                                                currency: "ZAR",
                                            }).format(this.state.price)}
                                            {/* <p>R{this.state.price}</p> */}
                                        </figure>}
                                        <figure className="ps-block__shipping">
                                            <h2>Total</h2>
                                            {this.state.price ? new Intl.NumberFormat("de-ZA", {
                                                style: "currency",
                                                currency: "ZAR",
                                            }).format((this.state.price * 1) + (amount * 1)) : 'Calculated after shipping address is provided'}

                                        </figure>
                                    </div>

                                </div>
                            </div>
                        </Card>
                    </div>
                </div >

            </Form ></>
        );
    }
}

const WrapForm = Form.create()(FormCheckoutInformation);

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    orderId: state.createdOrder?.order,
    vendor: state.vendor?.vendor?.doc,
    // vcreatedorder: state.
});
export default connect(mapStateToProps, { createOrderAction, getVendor, setCurrentOrder })(WrapForm);
