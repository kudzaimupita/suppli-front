import React, { Component } from 'react';

import Link from 'next/link';
import SearchHeader from './modules/SearchHeader';
import menuData from '../../../public/static/data/menu';
import Menu from '../../elements/menu/Menu';
import ElectronicHeaderActions from './modules/ElectronicHeaderActions';
import CurrencyDropdown from './modules/CurrencyDropdown';
import LanguageSwicher from './modules/LanguageSwicher';

class HeaderFurniture extends Component {
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
            <header className="header header--furniture" id="headerSticky">
                <div className="header__top">
                    <div className="container">
                        <div className="header__left">
                            <Link href="/home/furniture">
                                <a className="ps-logo">
                                    <img
                                        src="/static/img/logo-furniture.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </Link>
                            <div className="menu--product-categories">
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
                            </div>
                        </div>
                        <div className="header__center">
                            <SearchHeader />
                        </div>
                        <div className="header__right">
                            <ElectronicHeaderActions />
                        </div>
                    </div>
                </div>
                <nav className="navigation">
                    <div className="container">
                        <div className="navigation__left">
                            <Menu
                                data={menuData.menuPrimary.menu_1}
                                className="menu menu--furniture"
                            />
                        </div>
                        <div className="navigation__right">
                            <ul className="navigation__extra">
                                <li>
                                    <Link href="/page/blank">
                                        <a>Sell on Suppl-i</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/blank">
                                        <a>Tract your order</a>
                                    </Link>
                                </li>
                                <li>
                                    <CurrencyDropdown />
                                </li>
                                <li>
                                    <LanguageSwicher />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderFurniture;
