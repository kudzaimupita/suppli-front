import React, { Component } from 'react';

import Link from 'next/link';
import SearchHeader from './modules/SearchHeader';
import menuData from '../../../public/static/data/menu';
import Menu from '../../elements/menu/Menu';
import CurrencyDropdown from './modules/CurrencyDropdown';
import LanguageSwicher from './modules/LanguageSwicher';
import ElectronicHeaderActions from './modules/ElectronicHeaderActions';

class HeaderMarketPlace extends Component {
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

    render() {
        return (
            <header
                className="header header--standard header--market-place-1"
                id="headerSticky">
                <div className="header__top" style={{backgroundColor:'#383838'}}>
                    <div className="container">
                        <div className="header__left">
                            <p style={{color:'#9e9e9e'}}> Welcome to Suppl-i Online Shopping Mall !</p>
                        </div>
                        <div className="header__right">
                            <ul className="header__top-links">
                                <li>
                                    <Link href="https://sacoronavirus.co.za/"  >
                                        <a target="_blank"  rel="noopener noreferrer" style={{color:'#9e9e9e'}}>Covid 19 Safety</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/blank">
                                        <a style={{color:'#9e9e9e'}}>Track Your Order</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/blank">
                                        <a style={{color:'#9e9e9e'}}>About Us</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <CurrencyDropdown />
                                </li> */}
                                {/* <li>
                                    <LanguageSwicher />
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__content">
                    <div className="container">
                        <div className="header__content-left">
                            <Link href="/home/market-place">
                                <a className="ps-logo">
                                    <img src="/static/img/suppli.png" alt="Suppl-i" />
                                </a>
                            </Link>

                            {/* <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                    <span> Shop by Department</span>
                                </div>
                                <div className="menu__content">
                                    <Menu
                                        data={menuData.product_categories}
                                        className="menu--dropdown"
                                    />
                                </div>
                            </div> */}
                        </div>
                        <div className="header__content-center">
                            <SearchHeader />
                        </div>
                        <div className="header__content-right">
                            <ElectronicHeaderActions />
                        </div>
                    </div>
                </div>
                <nav className="navigation" style={{backgroundColor:'#62c4b0'}}>
                    <div className="container">
                        <div className="navigation__left">
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu" style={{color:'white'}}></i>
                                    <span style={{color:'white'}}> Shop by Department</span>
                                </div>
                                <div className="menu__content">
                                    <Menu
                                        data={menuData.product_categories}
                                        className="menu--dropdown"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="navigation__right" style={{color:'white'}}>
                            <Menu
                                data={menuData.menuPrimary.menu_1}
                                className="menu"
                            />
                            {/* <div className="ps-block--header-hotline inline">
                                <p style={{color:'white'}}>
                                    <i className="icon-telephone" style={{color:'white'}}></i>Tel:
                                    <strong style={{color:'white'}}> 066 517 8403</strong>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderMarketPlace;
