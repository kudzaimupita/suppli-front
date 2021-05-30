import React, { Component, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import NavigationTop from '../navigation/NavigationTop';
import NavigationDefault from '../navigation/NavigationDefault';
import HeaderActions from './modules/HeaderActions';
import MenuCategories from './modules/MenuCategories';
import SearchHeader from './modules/SearchHeader';
import menuData from '../../../public/static/data/menu';
import Menu from '../../elements/menu/Menu';

class HeaderDefault extends Component {
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
                className="header header--1"
                data-sticky="true"
                id="headerSticky">
                <NavigationTop />
                <div className="header__top" style={{backgroundColor:'#383838'}}>
                    <div className="ps-container">
                        <div className="header__left">
                            <Link href="/">
                                <a className="ps-logo">
                                    <img
                                    style={{height:'45px'}}
                                        src="/static/img/Suppli.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                </div>
                                <div className="menu__content">
                                    <MenuCategories />
                                </div>
                            </div>
                        </div>
                        <div className="header__center">
                            <SearchHeader />
                        </div>
                        <div className="header__right">
                            <HeaderActions />
                        </div>
                    </div>
               
                </div>
                <div className="navigation__right">
                            <Menu
                                data={menuData.menuPrimary.menu_1}
                                className="menu"
                            />
                            <div className="ps-block--header-hotline inline">
                                <p>
                                    <i className="icon-telephone"></i>Hotline:
                                    <strong> 1-800-234-5678</strong>
                                </p>
                            </div>
                        </div>
                {/*<NavigationDefault />*/}
            </header>
        );
    }
}

export default HeaderDefault;
