import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import { login } from '../../../store/auth/action';
import { login, forgotPassword } from '../../../actions/auth';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/solid'
import '../../tailwind.scss'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../../components/tailwind.scss'
import { Spinner } from 'react-activity';
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

    // static getDerivedStateFromProps(props) {
    //     if (props.isLoggedIn === true) {
    //         Router.push('/');
    //     }
    //     return false;
    // }

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
            forgotPassword({
                email: this.state.email,
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
        // console.log(this.state);
        // if (this.props.isLoggedIn && this.props.isLoggedIn) {
        //     Router.push('/');
        // }
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onSubmit={this.handleLoginSubmit}>
                        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                            <img
                                className="mx-auto h-12 w-auto"
                                src='/static/img/suppli-logo.png'
                                alt="suppl-i"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
                            {/* <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <a href="/account/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Fina
                                </a>
                            </p> */}
                        </div>
                        <div className="shadow bg-white overflow-hidden border-b border-gray-200 sm:rounded-lg" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Forgot Your Password?</h5>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Current Email<span style={{ color: 'red' }}>*</span>
                                </label>
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
                                                size={'large'}
                                                type="text"
                                                placeholder="Enter Email"
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

                                <button
                                    type="submit"
                                    className="submit group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    <span style={{ marginRight: 10 }}> {this.props.loading ? <Spinner

                                        color="white"
                                        size={12}
                                        speed={1}
                                        animating={true} /> : null}</span>
                                    Send Reset Token
                                </button>
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
    loading: state.forgotPassword.loading

});
export default connect(mapStateToProps)(WrapFormLogin);
