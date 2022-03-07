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
import { Badge, Radio, Tooltip, Empty } from 'antd';
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
            // amount: '1.00',
            amount: price,
            address: this.state.address,
            paymentID: this.props.orderId, type: this.state.type || 'BUDGET_COURIER'
        }
        console.log(this.state.type)
        this.props.setCurrentOrder({
            ...body, store: this.props.vendor && this.props.vendor, type: this.state.type, code: this.state.code,
            province: this.state.province, shippingAmount: (this.state.price * 1).toFixed(2)
        })
        this.props.createOrderAction(body)
    };

    handleAddressChange = async (place) => {
        if (!this.props.isLoggedIn) {
            return this.props.setAlert('Please log in to continue', 'error')
        }
        if (place) {
            console.log(place)
            this.setState({ address: place?.formatted_address });
            this.setState({ province: place.address_components[5].long_name })
            // this.setState({ price: await createCompleteBooking(this.props.vendor && this.props.vendor?.postalCode, this.state.address.split(',')[3]) })
            this.setState({ prices: await createCompleteBooking(this.props.vendor && this.props.vendor?.postalCode, place.address_components[7].long_name, { dropOffProvince: place.address_components[5].long_name.toUpperCase(), pickUpProvince: this.props.vendor && this.props.vendor?.province || 'GAUTENG' }) })
            // // await CreateExpressBooking()
            this.setState({ code: place.address_components[7].long_name })
            this.setState({ province: place.address_components[5].long_name })
        }

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

        return (
            cartItems && cartItems.length === 0 ? <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4"><Empty description={
                <span>
                    Opps, cart is is empty <a href="/">Start Shopping</a>
                </span>} image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                    height: 350,
                }} /></div > : <>
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
                {this.props.orderId ? <span className='bg-gray-100' style={{ height: '20px' }}>
                    <Payment setPaymentId={this.setPaymentId} orderId={this.props.orderId} />
                </span> : <Form
                    className="ps-form--checkout"
                    onSubmit={this.handleSubmit}>
                    <div className="ps-form__content ">
                        <div className="row" >
                            {/* <Row></Row> */}
                            <Card className="col-xl-7 col-lg-7 col-md-12 col-sm-12" style={{ marginRight: '15px' }} style={{ backgroundColor: '#eeeeee' }}>
                                <div className="ps-form__billing-info">











                                    <div className=" 6 2xl:px-0 2xl:mx-auto 2xl:container " style={{ backgroundColor: '#eeeeee' }}>
                                        <div className="flex flex-col justify-start items-start space-y-9">


                                            {this.props.orderId ? null : <> <div className="p-4 md:p-6 xl:p-10 bg-gray-100 w-full flex flex-col " style={{ backgroundColor: '#eeeeee' }}>
                                                <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">Shipping Details</p>
                                                <div className="w-full items-start  space-y-6 md:space-y-9">
                                                    <>
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
                                                            <div className="col-sm-12">  <Autocomplete
                                                                required='true'
                                                                apiKey='AIzaSyDdkpFLrMBAYzzMZg699Yr-lQJ1ksyfN2Q'
                                                                className="form-control"
                                                                style={{ width: "100%", height: '50px', marginBottom: '4px' }}
                                                                onPlaceSelected={(place) => {
                                                                    this.handleAddressChange(place)
                                                                }}
                                                                options={{
                                                                    types: ["address"],
                                                                    componentRestrictions: { country: "za" },
                                                                }}

                                                            />
                                                            </div>
                                                        </div>


                                                        {this.state.address && <div className="">
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

                                                        </div>} </>
                                                </div>
                                            </div>



                                                <div className="flex justify-center items-center lg:justify-end lg:items-end w-full">
                                                    <div className="flex flex-col-reverse flex-col md:flex-row space-y-4 lg:space-y-0 md:space-x-6 w-full md:w-auto">
                                                        <button className="mt-4 lg:mt-0 w-full lg:w-auto py-4 px-8 border border-gray-800 bg-indigo-400 text-lg font-medium leading-5 text-white hover:text-gray-600">Back To Cart</button>
                                                        {((this.state.price === 0) || this.state.price) && <button type="submit" className="mt-4 lg:mt-0 w-full lg:w-auto py-4 px-8 border border-gray-800 text-lg font-medium leading-5 bg-gray-800 text-white hover:bg-gray-900">      Pay {((this.state.price === 0) || this.state.price) && new Intl.NumberFormat("de-ZA", {
                                                            style: "currency",
                                                            currency: "ZAR",
                                                        }).format((this.state.price * 1) + (amount * 1))}</button>}
                                                    </div>
                                                </div></>}
                                        </div>
                                        <style>
                                            {`
            .checkbox:checked + .check-icon {
                display: flex;
            }`}
                                        </style>
                                    </div>






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




                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    {/* <div className="ps-block--shipping"> */}

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




                                    {/* </div> */}
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
                                                                                        product.price?.toFixed(2))}</p>
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

                                            {((this.state.price === 0) || this.state.price) && <figure className="ps-block__shipping">
                                                <h5>Shipping</h5>
                                                {new Intl.NumberFormat("de-ZA", {
                                                    style: "currency",
                                                    currency: "ZAR",
                                                }).format(this.state.price)}
                                                {/* <p>R{this.state.price}</p> */}
                                            </figure>}
                                            <figure className="ps-block__shipping">
                                                <h2>Total</h2>
                                                {((this.state.price === 0) || this.state.price) ? new Intl.NumberFormat("de-ZA", {
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

                </Form >}

            </>
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
export default connect(mapStateToProps, { createOrderAction, getVendor, setCurrentOrder, setAlert })(WrapForm);
