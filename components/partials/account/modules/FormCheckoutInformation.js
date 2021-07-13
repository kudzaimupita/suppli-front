import React, { Component } from 'react';
import Link from 'next/link';
import Payment from './Payment';
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { Form, Input, Card, Row } from 'antd';
import { createOrderAction } from '../../../../actions/orders';
import { getVendor } from '../../../../actions/vendors';
import { connect } from 'react-redux';
import { createCompleteBooking } from './calculate';

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        address: '',
        name: '',
        phone: '',
        price: ''
    }
    componentDidMount() {

        this.props.isLoggedIn && this.props.cartItems[0]?.plug && this.props.getVendor(this.props?.cartItems[0]?.plug)

    }


    onSubmit = e => {
        e.preventDefault();

        const body = {
            name: this.state.name,
            phone: this.state.phone,
            products: this.props.cartItems,
            amount: (this.props.amount * 1) + (this.state.price * 1),
            address: this.state.address
        }

        this.props.createOrderAction(body)

    };

    handleAddressChange = async (place) => {

        this.setState({ address: place?.formatted_address });
        this.setState({ price: await createCompleteBooking(this.props.vendor && this.props.vendor?.postalCode, this.state.address.split(',')[3]) })

    };

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };
    handlePhoneChange = async (e) => {
        this.setState({ phone: e.target.value });
    };



    render() {


        console.log(this.props.vendor && this.props.vendor?.postalCode, this.state.address.split(',')[3])
        const { getFieldDecorator } = this.props.form;
        const { amount, cartItems, cartTotal } = this.props;
        // const vendorAddress = cartItems[0]._id


        return (
            <Form
                className="ps-form--checkout"
                onSubmit={this.handleLoginSubmit}>
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
                                                        className="form-control"
                                                        type="text"
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
                                    apiKey='AIzaSyDdkpFLrMBAYzzMZg699Yr-lQJ1ksyfN2Q'

                                    style={{ width: "100%", height: '50px', marginBottom: '20px' }}
                                    onPlaceSelected={(place) => {
                                        this.handleAddressChange(place)
                                    }}
                                    options={{
                                        types: ["address"],
                                        componentRestrictions: { country: "za" },
                                    }}

                                />
                                <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="keep-update"
                                        />
                                        <label htmlFor="keep-update">
                                            Save this information for next time
                                        </label>
                                    </div>
                                </div>
                                <div className="ps-form__submit">
                                    <a href="/account/shopping-cart">

                                        <i className="icon-arrow-left mr-2"></i>
                                        Return to shopping cart

                                    </a>
                                    <div className="ps-block__footer">

                                        {!this.props.orderId && <button className="ps-btn " onClick={(e) => this.onSubmit(e)} style={{ color: 'white' }}>
                                            Continue to payment
                                        </button>}
                                    </div>
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
                                    <Payment orderId={this.props.orderId} />



                                </div>
                            </div>

                        </Card>

                        <Card className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order" >
                            <div className="ps-form__orders">
                                <h3>Your order</h3>
                                <div className="ps-block--checkout-order">
                                    <div className="ps-block__content">
                                        <figure>
                                            <figcaption>
                                                <strong>Product</strong>
                                                <strong>total</strong>
                                            </figcaption>
                                        </figure>
                                        <figure className="ps-block__items">
                                            {cartItems &&
                                                cartItems.map(product => (

                                                    <a>
                                                        <strong>
                                                            {product.name}
                                                            <span>
                                                                x
                                                                {
                                                                    product.quantity
                                                                }
                                                            </span>
                                                        </strong>
                                                        <small>
                                                            {new Intl.NumberFormat("de-ZA", {
                                                                style: "currency",
                                                                currency: "ZAR",
                                                            }).format(product.quantity *
                                                                product.price)}
                                                            {/* {}.00 */}
                                                        </small>
                                                    </a>

                                                ))}
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
                                            <h3>Total</h3>
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
                </div>
            </Form>
        );
    }
}

const WrapForm = Form.create()(FormCheckoutInformation);

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    orderId: state.createdOrder?.order,
    vendor: state.vendor?.vendor?.doc
});
export default connect(mapStateToProps, { createOrderAction, getVendor })(WrapForm);
