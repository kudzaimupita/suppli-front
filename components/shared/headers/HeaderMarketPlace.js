import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { notification } from 'antd';

import SearchHeader from './modules/SearchHeader';
import MiniCart from './modules/MiniCart';
import AccountQuickLinks from './modules/AccountQuickLinks';
import { logOut } from '../../../store/auth/action';
import { getCatergories } from '../../../actions/catergories';

class HeaderAutoPart extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        this.props.getCatergories();
        if (process.browser) {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll = () => {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (number >= 300) {
            document
                .getElementById('headerSticky')
                .classList.add('header--sticky');
        } else {
            document
                .getElementById('headerSticky')
                .classList.remove('header--sticky');
        }
    };

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        const menuAutopart = [
            {
                text: 'FAQs',
                url: '/faqs',
                icon: (
                    <i
                        class="fa fa-question-circle"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },
            {
                text: 'Suggest A Vendor',
                url: '/vendor/suggest-a-vendor',
                icon: (
                    <i
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}
                        class="fa fa-street-view"></i>
                ),
            },
            {
                text: 'Become A Vendor',
                url: '/vendor/become-a-vendor',
                icon: (
                    <i
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}
                        class="fa fa-street-view"></i>
                ),
            },
            {
                text: 'Invite A Friend',
                url: '/invite-a-friend',
                icon: (
                    <i
                        class="fa fa-user-plus"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },

            {
                text: 'Deals & Promotions',
                url: '/sale',
                icon: (
                    <i
                        class="fa fa-shopping-basket"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },
            {
                text: 'New Arrivals',
                url: '/new-arrivals',
                icon: (
                    <i
                        class="fa fa-shopping-bag"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },
            {
                text: 'Contact Us',
                url: '/contact',
                icon: (
                    <i
                        class="fa fa-map-pin"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },

            {
                text: 'About Us',
                url: '/about-us',
                icon: (
                    <i
                        class="fa fa-info-circle"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },
        ];

        const { auth } = this.props;
        return (
            <header
                className="header header--standard header--autopart"
                id="headerSticky">
                <div className="header__top">
                    <div className="container">
                        <div className="header__left">
                            <p style={{ fontSize: '12px' }}>
                                {/* <strong>FREE SHIPPING</strong> for all orders */}
                                Welcome to Suppl-i Online Shopping Mall !
                            </p>
                        </div>
                        <div className="header__right">
                            <ul className="header__top-links">
                                <li>
                                    <Link href="https://sacoronavirus.co.za/">
                                        <a
                                            style={{ fontSize: '12px' }}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Covid 19 Safety
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a style={{ fontSize: '12px' }}>
                                            Track Your Order
                                        </a>
                                    </Link>
                                </li>
                                {/* <li>
                                <Link href="/page/blank">
                                        <a >About Us</a>
                                    </Link>
                                </li> */}
                                <li>
                                    {this.props.isLoggedIn &&
                                    this.props.isLoggedIn === true ? (
                                        <AccountQuickLinks isLoggedIn={true} />
                                    ) : (
                                        <AccountQuickLinks isLoggedIn={false} />
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__content">
                    <div className="container">
                        <div className="header__content-left">
                            <Link href="/">
                                <a className="ps-logo">
                                    <img
                                        style={{
                                            height: '40px',
                                            width: '200px',
                                        }}
                                        src="/static/img/Suppli.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                    <span>Shop By Category</span>
                                </div>
                                <div className="menu__content">
                                    <ul className="menu--dropdown">
                                        {this.props.categories &&
                                            this.props.categories.map((cat) => (
                                                <li>
                                                    <Link
                                                        href="/category/[cid]"
                                                        as={`/category/${cat._id}`}>
                                                        <a>{cat.name}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header__content-center">
                            <SearchHeader />
                        </div>
                        <div className="header__content-right">
                            <div className="header__actions">
                                <div className="ps-block--header-hotline">
                                    <div className="ps-block__left">
                                        <i className="icon-telephone"></i>
                                    </div>
                                    <div className="ps-block__right">
                                        <p>
                                            Tel
                                            <strong>066 517 8403</strong>
                                        </p>
                                    </div>
                                </div>
                                <MiniCart />
                            </div>
                        </div>
                    </div>
                </div>
                <nav
                    className="navigation"
                    style={{ backgroundColor: '#62c4b0' }}>
                    <div className="container">
                        <ul
                            className=" menu--technology row"
                            style={{ marginTop: '6px', marginBottom: '6px' }}>
                            {menuAutopart.map((menuItem) => (
                                <li
                                    key={menuItem.text}
                                    style={{ marginRight: '35px' }}>
                                    <Link href={menuItem.url}>
                                        <>
                                            {' '}
                                            {menuItem.icon}
                                            <a
                                                style={{
                                                    color: 'white',
                                                    fontSize: '11px',
                                                }}
                                                href={menuItem.url}>
                                                {menuItem.text}
                                            </a>
                                        </>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = (state) => ({
    state,
    isLoggedIn: state.auth.isLoggedIn,
    categories: state.allCatergories.catergories,
});

export default connect(mapStateToProps, { getCatergories })(HeaderAutoPart);
