import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import { login } from '../../../store/auth/action';
import { login } from '../../../actions/auth';
import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/solid'
import '../../tailwind.scss'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../../components/tailwind.scss'
import { Spinner } from 'react-activity';
// import Logo from '../../../public/static/img/suppli-logo.png'
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
                        {/* <ul className="ps-tab-list">
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
                        </ul> */}
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <img
                                className="mx-auto h-12 w-auto"
                                src='/static/img/suppli-logo.png'
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <a href="/account/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Don't have an account? Register
                                </a>
                            </p>
                        </div>

                        <div className="shadow bg-white overflow-hidden border-b border-gray-200 sm:rounded-lg" id="sign-in">
                            <div className="ps-form__content">
                                {/* <h5>Log In Your Account</h5> */}
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className="">
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
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className="form-forgot">
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
                                                className=""
                                                size={'large'}
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
                                <div className="mb-2">
                                    {/* <div className="flex items-center">
                                        <input
                                            id="remember_me"
                                            name="remember_me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div> */}

                                    <div className="text-sm">
                                        <a href="/account/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                {/* <div className="">
                                    <div className="ps-checkbox">

                                        <a href='/account/forgot-password' >
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div> */}
                                {/* <div className="form-group submit">
                                    <button
                                        style={{
                                            backgroundColor: '#62c4b0',
                                            color: 'white',
                                        }}
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Login
                                    </button>
                                </div> */}
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
                                    Login
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
    loading: state.auth1.loading
});
export default connect(mapStateToProps)(WrapFormLogin);
