import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { notification } from 'antd';

import SearchHeader from './modules/SearchHeader';
import MiniCart from './modules/MiniCart';
import AccountQuickLinks from './modules/AccountQuickLinks';
import { logOut } from '../../../store/auth/action';
import CurrencyDropdown from './modules/CurrencyDropdown';

class HeaderAutoPart extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
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
            },
            {
                text: 'Suggest A Vendor',
                url: '/shop',
            },
            {
                text: 'Invite A Vendor',
                url: '/shop',
            },
            {
                text: 'Performance',
                url: '/shop',
            },
            {
                text: 'Repare part',
                url: '/shop',
            },
            {
                text: 'Tools & Garage',
                url: '/shop',
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
                            <p>
                                {/* <strong>FREE SHIPPING</strong> for all orders */}
                                Welcome to Suppl-i Online Shopping Mall !
                            </p>
                        </div>
                        <div className="header__right">
                            <ul className="header__top-links">
                                <li>
                                <Link href="https://sacoronavirus.co.za/"  >
                                        <a target="_blank"  rel="noopener noreferrer" >Covid 19 Safety</a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/page/blank">
                                        <a >Track Your Order</a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/page/blank">
                                        <a >About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    {auth.isLoggedIn &&
                                    Boolean(auth.isLoggedIn) === true ? (
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
                            <Link href="/home/autopart">
                                <a className="ps-logo">
                                <img src="/static/img/suppli.png" alt="Suppl-i" />
                                </a>
                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                    <span>Shop by Department</span>
                                </div>
                                <div className="menu__content">
                                    <ul className="menu--dropdown">
                                        <li>
                                     
                                        <a  href="https://sacoronavirus.co.za/" target="_blank"  rel="noopener noreferrer" style={{color:'#9e9e9e'}}>Covid 19 Safety</a>
                                  
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Wheels & Tires</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Exterior</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Performance</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Body parts</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Lighting</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Accessories</a>
                                            </Link>
                                        </li>
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
                                            <strong>1-800-234-5678</strong>
                                        </p>
                                    </div>
                                </div>
                                <MiniCart />
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navigation">
                    <div className="container">
                        <ul className="menu menu--technology">
                            {menuAutopart.map(menuItem => (
                                <li key={menuItem.text}>
                                    <Link href={menuItem.url}>
                                        <a href="/shop">{menuItem.text}</a>
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

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(HeaderAutoPart);
