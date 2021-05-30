import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import { login } from '../../../store/auth/action';
import { setAlert } from '../../../actions/alert';
import { sendMessageAction } from '../../../actions/contactForm';

import { Form, Input, notification, Button } from 'antd';
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        email: '',
        message: '',
        name: '',
    };

    formData = {
        email: this.state.email,
        name: this.state.name,
        message: this.state.message,
    };
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };
    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    };
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handleSubmit = (e) => {
        if (!this.state.message)
            return this.props.setAlert('Please enter a message', 'warning');
        if (!this.state.email)
            return this.props.setAlert('Please enter a email', 'warning');
        if (!this.state.name)
            return this.props.setAlert('Please enter a name', 'warning');

        this.props.sendMessageAction({
            email: this.state.email,
            name: this.state.name,
            message: this.state.message,
        });
        this.setState({ name: '' });
        this.setState({ email: '' });
        this.setState({ message: '' });

        e.preventDefault();
    };

    render() {
        console.log(this.state);
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="ps-contact-form">
                <div className="container">
                    <form
                        className="ps-form--contact-us"
                        action="/"
                        method="get">
                        <h3>Get In Touch</h3>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Name *"
                                        value={this.state.name}
                                        onChange={this.handleNameChange}
                                    />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email *"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                    />
                                </div>
                            </div>
                            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Subject *" />
                        </div>
                    </div> */}
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Message"
                                        value={this.state.message}
                                        onChange={
                                            this.handleMessageChange
                                        }></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-group submit">
                            <Button
                                onClick={this.handleSubmit}
                                style={{
                                    backgroundColor: '#62c4b0',
                                    color: 'white',
                                }}
                                className="ps-btn">
                                Send message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const WrapFormLogin = Form.create()(Login);
const mapStateToProps = (state) => {
    return state.auth;
};
export default connect(mapStateToProps, { setAlert, sendMessageAction })(
    WrapFormLogin
);
