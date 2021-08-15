import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { register } from '../../../actions/auth';
import { login } from '../../../actions/auth';

import { Form, Input } from 'antd';
import { connect } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/solid'
import '../../tailwind.scss'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../../components/tailwind.scss'
import { Spinner } from 'react-activity';
class Register extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        password: '',
        email: '',
        passwordConfirm: '',
        name: '',
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handlePasswordConfirmChange = (e) => {
        this.setState({ passwordConfirm: e.target.value });
    };

    static getDerivedStateFromProps(props) {
        console.log(props);
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

    handleRegisterSubmit = (e) => {
        const formData = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            passwordConfirm: this.state.passwordConfirm,
        };
        this.props.register(formData);

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
        const { getFieldDecorator } = this.props.form;
        if (this.props.isLoggedIn && this.props.isLoggedIn) {
            Router.push('/');
        }
        return (
            <div className="ps-my-account pt-5 bg-gray-100">
                <div className="container">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                        <img
                            className="mx-auto h-12 w-auto"
                            src='/static/img/suppli-logo.png'
                            alt="supl-i"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href='/account/login' className="font-medium text-indigo-600 hover:text-indigo-500">
                                Already have an account? Sign in
                            </a>
                        </p>
                    </div>
                    <Form

                        className="ps-form--account"
                        onSubmit={this.handleRegisterSubmit}>

                        <div className="shadow bg-white overflow-hidden border-b border-gray-200 sm:rounded-lg" id="register">
                            <div className="ps-form__content">
                                {/* <h5>Register An Account</h5> */}
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                    Name<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div>
                                    <Form.Item>
                                        {getFieldDecorator('name', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Please input your name!',
                                                },
                                            ],
                                        })(
                                            <Input
                                                required
                                                size={'large'}
                                                type="name"
                                                placeholder="name"
                                                value={this.state.name}
                                                onChange={this.handleNameChange}
                                            />
                                        )}
                                    </Form.Item>
                                </div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className=" form-forgot">
                                    <Form.Item>
                                        {getFieldDecorator('email', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Please input your email!',
                                                },
                                            ],
                                        })(
                                            <Input
                                                required
                                                size={'large'}
                                                type="email"
                                                placeholder="email"
                                                value={this.state.email}
                                                onChange={
                                                    this.handleEmailChange
                                                }
                                            />
                                        )}
                                    </Form.Item>
                                </div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className=" form-forgot">
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
                                            <Input.Password
                                                minLength={8}
                                                required
                                                size={'large'}
                                                type="password"
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={
                                                    this.handlePasswordChange
                                                }
                                            />
                                        )}
                                    </Form.Item>
                                </div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Confirm Password<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className=" form-forgot">
                                    <Form.Item>
                                        {getFieldDecorator('passwordConfirm', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Please type the password confirm!',
                                                },
                                            ],
                                        })(
                                            <Input.Password

                                                required
                                                size={'large'}
                                                type="password"
                                                placeholder="Password Confirm"
                                                value={
                                                    this.state.passwordConfirm
                                                }
                                                onChange={
                                                    this
                                                        .handlePasswordConfirmChange
                                                }
                                            />
                                        )}
                                    </Form.Item>
                                </div>
                                {/* <div className=" submit"> */}
                                {/* <button
                                        style={{
                                            backgroundColor: '#62c4b0',
                                            color: 'white',
                                        }}
                                        onClick={(e) =>
                                            this.handleRegisterSubmit(e)
                                        }
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Register
                                    </button> */}
                                <button
                                    // onClick={(e) =>
                                    //     this.handleRegisterSubmit(e)
                                    // }
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
                                    Register
                                </button>
                                {/* </div> */}
                            </div>
                            <div className="ps-form__footer">
                                {/* <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}
const WrapFormRegister = Form.create()(Register);
const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    loading: state.authLoading.loading,
});
export default connect(mapStateToProps, { register, login })(WrapFormRegister);
