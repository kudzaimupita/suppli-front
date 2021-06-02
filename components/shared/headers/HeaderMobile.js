import React, { Component } from 'react';
import CurrencyDropdown from './modules/CurrencyDropdown';
import Link from 'next/link';
import LanguageSwicher from './modules/LanguageSwicher';
import MobileHeaderActions from './modules/MobileHeaderActions';

class HeaderMobile extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <header className="header header--mobile">
                <div
                    className="navigation--mobile"
                    style={{ backgroundColor: 'white' }}>
                    <div className="navigation__left">
                        <Link href="/">
                            <a className="ps-logo">
                                <img
                                    style={{ maxWidth: '130px' }}
                                    src="/static/img/Suppli.png"
                                    alt="Suppl-i"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="navigation__right">
                        <MobileHeaderActions />
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderMobile;
