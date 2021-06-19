import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { logOut } from '../../../../store/auth/action';
class AccountQuickLinks extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout = (e) => {
        e.preventDefault();
        this.props.dispatch(logOut());
    };

    render() {
        const accountLinks = [
            {
                text: 'Account Information',
                url: '/account/user-information',
            },
            {
                text: 'Returns',
                url: '/account/returns',
            },
            {
                text: 'Invoices',
                url: '/account/invoices',
            },
            {
                text: 'Address',
                url: '/account/edit-address',
            },
            {
                text: 'Password',
                url: '/account/password',
            },
            {
                text: 'Wishlist',
                url: '/account/wishlist',
            },
        ];
        const { isLoggedIn } = this.props;
        if (isLoggedIn === true) {
            return (
                <div className="ps-block--user-account">
                    <i className="icon-user"></i>
                    <div
                        className="ps-block__content"
                        style={{ color: 'black' }}>
                        <ul className="ps-list--arrow">
                            {accountLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.url}>
                                        <a style={{ fontSize: '12px' }}>
                                            {link.text}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                            <li
                                className="ps-block__footer"
                                style={{ color: 'black' }}>
                                <a
                                    style={{ fontSize: '12px' }}
                                    href="#"
                                    onClick={this.handleLogout.bind(this)}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div
                    className="ps-block--user-header"
                    style={{ color: 'black' }}>
                    <div className="ps-block__left">
                        <Link href="/account/login">
                            <a href="/account/login">    <i className="icon-user"></i>    <a style={{ fontSize: '12px',marginRight:'20px' }}>Login</a></a>
                        </Link>
                        <Link href="/account/register">
                            <a href="/account/login">    <i className="icon-user"></i>    <a style={{ fontSize: '12px', marginRight: '20px' }}>Register</a></a>
                        </Link>
                    </div>
                 
                </div>
            );
        }
    }
}
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(AccountQuickLinks);
