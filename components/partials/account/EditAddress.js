import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import FormEditAddress from './modules/FormEditAddress';
import { connect } from 'react-redux';

class EditAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === false) {
            Router.push('/');
        }
        return false;
    }

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
                active: true,
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
                                                <Link href="/account/my-account">
                                                    <a>
                                                        <i className="icon-power-switch"></i>
                                                        Logout
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-form__content">
                                <FormEditAddress
                                    user={
                                        this.props.auth && this.props.auth.user
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth1.data,
    isAuthenticated: state.auth,
    loading: state.auth.loading,
    createdPlugLoading: state.createdPlug,
    isLoggedIn: state.auth.isLoggedIn,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, {})(EditAddress);
