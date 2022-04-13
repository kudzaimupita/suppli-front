import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { register } from '../../../actions/auth';

import { login } from '../../../actions/auth';
// import { LoadingOutlined } from '@ant-design/icons';
import { Form, Input, Spin } from 'antd';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />
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


    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleRegisterSubmit = (e) => {
        if (!this.state.email || !this.state.name || !this.state.password || !this.state.passwordConfirm) return this.props.setAlert('All fields are required', 'warning')
        const formData = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            passwordConfirm: this.state.passwordConfirm,
        };
        // this.props.setShowModal(false)
        this.props.register(formData);

        this.props.setShowModal(false)
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

        return (

            <Form

                onSubmit={this.handleSubmit}>

                <div className="ps-tab active" id="register">
                    <div className="ps-form__content">
                        <h5>Vendor Login Credentials</h5>
                        <div className="form-group">
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
                                        className="form-control"
                                        type="name"
                                        placeholder="name"
                                        value={this.state.name}
                                        onChange={this.handleNameChange}
                                    />
                                )}
                            </Form.Item>
                        </div>
                        <div className="form-group form-forgot">
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
                                        className="form-control"
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
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={
                                            this.handlePasswordChange
                                        }
                                    />
                                )}
                            </Form.Item>
                        </div>
                        <div className="form-group form-forgot">
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
                                    <Input
                                        className="form-control"
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
                        <div className="form-group ">
                            <button
                                style={{
                                    backgroundColor: '#62c4b0',
                                    color: 'white',
                                }}
                                onClick={(e) =>
                                    this.handleRegisterSubmit(e)
                                }
                                className="ps-btn ps-btn--fullwidth">
                                {this.props.loading && <Spin indicator={antIcon} />}     Register
                            </button>
                        </div>
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

        );
    }
}
const WrapFormRegister = Form.create()(Register);
const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    loading: state.auth1.loading
});
export default connect(mapStateToProps, { register, login, setAlert })(WrapFormRegister);
