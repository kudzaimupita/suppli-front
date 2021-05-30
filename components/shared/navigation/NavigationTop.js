import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';

class NavigationTop extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        return (
            <nav className="navigation navigation--top" style={{backgroundColor:'#62c4b0'}}>
                <div className="ps-container">
                    <div className="navigation__left">

                    </div>
                    <div className="navigation__right">
                        <ul className="navigation__extra">
                            <li>
                                <Link href="/vendor/become-a-vendor">
                                    <a style={{color:'white'}}>About Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/order-tracking">
                                    <a style={{color:'white'}}>FAQ</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://sacoronavirus.co.za/">
                                    <a style={{color:'white'}}>Covid 19 Safety</a>
                                </Link>
                            </li>
                   
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationTop;
