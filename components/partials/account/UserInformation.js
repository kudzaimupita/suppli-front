import React, { Component } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { Form, Input, Radio, DatePicker } from 'antd';
import { updateMe } from './../../../actions/auth';
import { setAlert } from './../../../actions/alert';
import { connect } from 'react-redux';
import { logOut } from '../../../store/auth/action';
// import { useRouter } from 'next/router';

class UserInformation extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: '',
        phone: '',
    };

    formData = {
        phone: this.state.phone,
        name: this.state.name,
    };

    static getDerivedStateFromProps(props) {
        // const router = useRouter();
        // if (props.isLoggedIn === false) {
        //     router.push('/');
        // }
        return false;
    }

    handleLogout = (e) => {
        e.preventDefault();
        this.props.dispatch(logOut());
    };

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value });
    };

    handleSubmit = (e) => {
        const formData = {
            phone:
                this.state.phone ||
                (this.props.auth && this.props.auth.user.phone),
            name:
                this.state.name ||
                (this.props.auth && this.props.auth.user.name),
        };
        e.preventDefault();
        this.props.updateMe(formData);
    };

    render() {
        const accountLinks = [
            {
                text: 'Account Information',
                url: '/account/user-information',
                icon: 'icon-user',
                active: true,
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
                                {/* className="ps-page__left" */}
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
                                        <h3>Account Information</h3>
                                    </div>
                                    <div className="ps-form__content">
                                        <div className="form-group">
                                            <Form.Item label="Name">
                                                {getFieldDecorator(
                                                    'name',
                                                    {
                                                        initialValue:
                                                            this.props.auth &&
                                                            this.props.auth.user
                                                                .name,
                                                    },
                                                    {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Please input your name!',
                                                            },
                                                        ],
                                                    }
                                                )(
                                                    <Input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Username or email address"
                                                        value={this.state.name}
                                                        onChange={
                                                            this
                                                                .handleNameChange
                                                        }
                                                    />
                                                )}
                                            </Form.Item>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item label="Phone Number">
                                                        {getFieldDecorator(
                                                            'phoneNumber',
                                                            {
                                                                initialValue:
                                                                    this.props
                                                                        .auth &&
                                                                    this.props
                                                                        .auth
                                                                        .user
                                                                        .phone,
                                                            },
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
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Enter your phone number"
                                                                initialValue={
                                                                    this.props
                                                                        .auth &&
                                                                    this.props
                                                                        .auth
                                                                        .user
                                                                        .name
                                                                }
                                                                value={
                                                                    this.state
                                                                        .name
                                                                }
                                                                onChange={
                                                                    this
                                                                        .handlePhoneChange
                                                                }
                                                                // initialValue=
                                                            />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item label="Email">
                                                        {getFieldDecorator(
                                                            'email',
                                                            {
                                                                initialValue:
                                                                    this.props
                                                                        .auth &&
                                                                    this.props
                                                                        .auth
                                                                        .user
                                                                        .email,
                                                            },
                                                            {
                                                                rules: [
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'Please input your username!',
                                                                    },
                                                                    {
                                                                        type: 'email',
                                                                        message:
                                                                            'The input is not valid E-mail!',
                                                                    },
                                                                ],
                                                            }
                                                        )(
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Username or email address"
                                                                disabled
                                                            />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
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

export default connect(mapStateToProps, { updateMe })(WrapFormUserInformation);
