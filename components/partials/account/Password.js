import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input, Radio, DatePicker } from 'antd';
import { updateMe, updateMyPassword } from './../../../actions/auth';
import { setAlert } from './../../../actions/alert';
import { logOut } from '../../../store/auth/action';

import { connect } from 'react-redux';
class UserInformation extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        passwordCurrent: '',
        password: '',
        passwordConfirm: '',
    };

    handlePasswordCurrentChange = (e) => {
        this.setState({ passwordCurrent: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };
    handlePasswordConfirmChange = (e) => {
        this.setState({ passwordConfirm: e.target.value });
    };

    handleSubmit = (e) => {
        const formData = {
            passwordCurrent: this.state.passwordCurrent,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
        };
        e.preventDefault();
        this.props.updateMyPassword(formData);
    };
    handleLogout = (e) => {
        e.preventDefault();
        this.props.dispatch(logOut());
    };

    render() {
        const accountLinks = [
            {
                text: 'Account Information',
                url: '/account/user-information',
                icon: 'icon-user',
            },
            {
                text: 'Returns',
                url: '/account/returns',
                icon: 'icon-alarm-ringing',
            },
            {
                text: 'Invoices',
                url: '/account/invoices',
                icon: 'icon-papers',
            },
            {
                text: 'Address',
                url: '/account/edit-address',
                icon: 'icon-map-marker',
            },
            {
                text: 'Password',
                url: '/account/password',
                icon: 'icon-store',
                active: true,
            },
            {
                text: 'Wishlist',
                url: '/account/wishlist',
                icon: 'icon-heart',
            },
        ];
        if (this.props.isLoggedIn !== true) {
            Router.push('/');
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-page__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        <img src="/static/img/users/3.jpg" />
                                        <figure>
                                            <figcaption>
                                                Hello{' '}
                                                {this.props.auth &&
                                                    this.props.auth.user.name}
                                            </figcaption>
                                            <p>
                                                {this.props.auth &&
                                                    this.props.auth.user.email}
                                            </p>
                                        </figure>
                                    </div>
                                    <div className="ps-widget__content">
                                        <ul>
                                            {accountLinks.map((link) => (
                                                <li
                                                    key={link.text}
                                                    className={
                                                        link.active
                                                            ? 'active'
                                                            : ''
                                                    }>
                                                    <Link href={link.url}>
                                                        <a>
                                                            <i
                                                                className={
                                                                    link.icon
                                                                }></i>
                                                            {link.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                            <a
                                                        onClick={this.handleLogout.bind(
                                                            this
                                                        )}>
                                                        <i className="icon-power-switch"></i>
                                                        Logout
                                                    </a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <Form className="ps-form--account-setting">
                                    <div className="ps-form__header">
                                        <h3>Update Password</h3>
                                    </div>
                                    <div className="ps-form__content">
                                        <div className="form-group">
                                            <Form.Item label="Current Password">
                                                <Input
                                                    className="form-control"
                                                    type="password"
                                                    placeholder="Current Password"
                                                    value={
                                                        this.state
                                                            .passwordCurrent
                                                    }
                                                    onChange={
                                                        this
                                                            .handlePasswordCurrentChange
                                                    }
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="form-group">
                                            <Form.Item label="New Password">
                                                <Input
                                                    className="form-control"
                                                    type="password"
                                                    // defaultValue="password"
                                                    placeholder="New Password"
                                                    value={this.state.password}
                                                    onChange={
                                                        this
                                                            .handlePasswordChange
                                                    }
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="form-group">
                                            <Form.Item label="Confirm New Password">
                                                <Input
                                                    className="form-control"
                                                    type="password"
                                                    defaultValue="password"
                                                    placeholder="Confirm New password"
                                                    value={
                                                        this.state
                                                            .passwordConfirm
                                                    }
                                                    onChange={
                                                        this
                                                            .handlePasswordConfirmChange
                                                    }
                                                />
                                            </Form.Item>
                                        </div>

                                        <div className="row">
                                            {/* <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Birthday</label>
                                                    <DatePicker />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item label="Gender">
                                                        {getFieldDecorator(
                                                            'gender',
                                                            {
                                                                rules: [
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'Please input your username!',
                                                                    },
                                                                ],
                                                            }
                                                        )(
                                                            <Radio.Group>
                                                                <Radio value="male">
                                                                    Male
                                                                </Radio>
                                                                <Radio value="female">
                                                                    Female
                                                                </Radio>
                                                            </Radio.Group>
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="form-group submit">
                                            <button
                                                style={{
                                                    backgroundColor: '#62c4b0',
                                                    color: 'white',
                                                }}
                                                className="ps-btn"
                                                onClick={(e) =>
                                                    this.handleSubmit(e)
                                                }>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const WrapFormUserInformation = Form.create()(UserInformation);
WrapFormUserInformation.defaultProps = {
    user: {},
};

const mapStateToProps = (state) => ({
    auth: state.auth1.data,
    isAuthenticated: state.auth,
    loading: state.auth.loading,
    createdPlugLoading: state.createdPlug,
    isLoggedIn: state.auth.isLoggedIn,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, { updateMe, updateMyPassword })(
    WrapFormUserInformation
);
