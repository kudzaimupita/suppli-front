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
              
                <div className="navigation--mobile" style={{backgroundColor:'white'}}>
                    <div className="navigation__left">
                        <Link href="/">
                            <a className="ps-logo">
                            <img style={{maxWidth:'130px'}} src="/static/img/suppli.png" alt="Suppl-i" />
                            </a>
                        </Link>
                    </div>
                    <div className="navigation__right">
                        <MobileHeaderActions />
                    </div>
                </div>
                <div className="ps-search--mobile">
                    <form
                        className="ps-form--search-mobile"
                        action="/"
                        method="get">
                        <div className="form-group--nest">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search something..."
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </header>
        );
    }
}

export default HeaderMobile;
