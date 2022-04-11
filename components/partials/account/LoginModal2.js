import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import { login } from '../../../store/auth/action';
import { login } from '../../../actions/auth';

import { Form, Input, notification, Spin } from 'antd';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />
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
        console.log(this.state);

        const { getFieldDecorator } = this.props.form;
        return (

            <Form

                onSubmit={this.handleLoginSubmit}>

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
                            <button
                                onClick={this.handleLoginSubmit}
                                style={{
                                    backgroundColor: '#62c4b0',
                                    color: 'white',
                                }}
                                // type="submit1"
                                className="ps-btn ps-btn--fullwidth">
                                {this.props.loading && <Spin indicator={antIcon} />}   Login
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


        );
    }
}
const WrapFormLogin = Form.create()(Login);
const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    loading: state.auth1.loading
});
export default connect(mapStateToProps)(WrapFormLogin);
