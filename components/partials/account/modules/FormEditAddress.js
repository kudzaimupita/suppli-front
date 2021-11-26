import React, { Component } from 'react';
import { updateMe } from '../../../../actions/auth';
import { setAlert } from '../../../../actions/alert';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Modal, Button } from 'antd';

class FormEditAddress extends Component {
    state = {
        city: '',
        postalCode: '',
        address: '',
        country: 'South Africa',
    };

    formData = {
        phone: this.state.phone,
        name: this.state.name,
    };
    handleAddressChange = (e) => {
        this.setState({ address: e.target.value });
    };

    handleCityChange = (e) => {
        this.setState({ city: e.target.value });
    };
    handlePostalCodeChange = (e) => {
        this.setState({ postalCode: e.target.value });
    };

    handleSubmit = (e) => {
        const billingAddress = {
            city:
                this.state.city ||
                (this.props.user &&
                    this.props.user.billingAddress &&
                    this.props.user.billingAddress.city),
            postalCode:
                this.state.postalCode ||
                (this.props.user &&
                    this.props.user.billingAddress &&
                    this.props.user.billingAddress.postalCode),
            country: this.state.country,
            address:
                this.state.address ||
                (this.props.user &&
                    this.props.user.billingAddress &&
                    this.props.user.billingAddress.address),
        };
        e.preventDefault();
        this.props.updateMe({ billingAddress });
    };

    render() {
        return (
            <form className="ps-form__content">
                <div className="ps-form__header">
                    <h3>Billing address</h3>
                </div>
                <div className="ps-form__content">
                    <div className="form-group">
                        <label>
                            Street Address <sup>*</sup>
                        </label>
                        <input
                            type="text"
                            placeholder=""
                            className="form-control"
                            onChange={this.handleAddressChange}
                            defaultValue={
                                this.props.user &&
                                this.props.user.billingAddress &&
                                this.props.user.billingAddress.address
                            }
                        // value={this.state.address}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            City <sup>*</sup>
                        </label>
                        <input
                            type="text"
                            placeholder=""
                            className="form-control"
                            // value={this.state.city}
                            onChange={this.handleCityChange}
                            defaultValue={
                                this.props.user &&
                                this.props.user.billingAddress &&
                                this.props.user.billingAddress.city
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Postal Code <sup>*</sup>
                        </label>
                        <input
                            type="text"
                            placeholder=""
                            className="form-control"
                            onChange={this.handlePostalCodeChange}
                            // value={this.state.postalCode}
                            defaultValue={
                                this.props.user &&
                                this.props.user.billingAddress &&
                                this.props.user.billingAddress.postalCode
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Country <sup>*</sup>
                        </label>
                        <input
                            type="text"
                            placeholder=""
                            className="form-control"
                            disabled
                            value={this.state.country}
                        // defaultValue={
                        //     this.props.user &&
                        //     this.props.user.billingAddress &&
                        //     this.props.user.billingAddress.country
                        // }
                        />
                    </div>

                    <div
                        className="form-group "
                        onClick={(e) => this.handleSubmit(e)}>
                        <button style={{ color: 'white' }} className="ps-btn">
                            Save Address
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
});
export default connect(mapStateToProps, { setAlert, updateMe })(
    FormEditAddress
);
