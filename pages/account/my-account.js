import React, { Component } from 'react';

import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../../components/shared/headers/HeaderMarketPlace';
import MyAccount from '../../components/partials/account/MyAccount';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

class MyAccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/',
                },
                {
                    text: 'My Account',
                },
            ],
        };
    }

    render() {
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={this.state.breadCrumb} />
                    <MyAccount />
                </div>

                <FooterDefault />
            </div>
        );
    }
}

export default MyAccountPage;
