import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import { login } from '../../../store/auth/action';
import { login } from '../../../actions/auth';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        password: '',
        email: '',
    };

    formData = {
        email: this.state.email,
        password: this.state.password,
    };
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
            Router.push('/');
        }
        return false;
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleLoginSubmit = (e) => {
        this.props.dispatch(
            login({
                email: this.state.email,
                password: this.state.password,
            })
        );
        console.log(this.formData);
        console.log(this.state);
        e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         this.props.dispatch(login());
        //         Router.push('/');
        //     } else {
        //     }
        // });
    };

    render() {
        console.log(this.state);
        if (this.props.isLoggedIn && this.props.isLoggedIn) {
            Router.push('/');
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onSubmit={this.handleLoginSubmit}>
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Log In Your Account</h5>
                                <div className="form-group">
                                    <Form.Item>
                                        {getFieldDecorator('username', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Please input your email!',
                                                },
                                            ],
                                        })(
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder="Email address"
                                                required
                                                name="email"
                                                value={this.state.email}
                                                onChange={
                                                    this.handleEmailChange
                                                }
                                            />
                                        )}
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item>
                                        {getFieldDecorator('password', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Please input your password!',
                                                },
                                            ],
                                        })(
                                            <Input
                                                className="form-control"
                                                type="password"
                                                placeholder="Password..."
                                                required
                                                name="password"
                                                value={this.state.password}
                                                onChange={
                                                    this.handlePasswordChange
                                                }
                                            />
                                        )}
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <div className="ps-checkbox">

                                        <a href='/account/forgot-password' >
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        style={{
                                            backgroundColor: '#62c4b0',
                                            color: 'white',
                                        }}
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Login
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                {/* <p>Connect with:</p> */}
                                {/* <ul className="ps-list--social">
                                    <li>
                                        <a
                                            className="facebook"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e)}>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="google"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e)}>
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="twitter"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e)}>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e)}>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const WrapFormLogin = Form.create()(Login);
const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
});
export default connect(mapStateToProps)(WrapFormLogin);
