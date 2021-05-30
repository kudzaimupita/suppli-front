import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input, Radio, DatePicker, Result, Button } from 'antd';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableNotifications from './modules/TableNotifications';
import Formm from '../page/ContactForm';
import { connect } from 'react-redux';
class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // static getDerivedStateFromProps(props) {
    //     if (props.isLoggedIn === false) {
    //         Router.push('/');
    //     }
    //     return false;
    // }

    render() {
        if (this.props.isLoggedIn !== true) {
            Router.push('/');
        }
        const accountLinks = [
            {
                text: 'Account Information',
                url: '/account/user-information',
                icon: 'icon-user',
            },
            {
                text: 'Returns',
                url: '/account/returns',
                icon: 'icon-alarm-ringing',
                active: true,
            },
            {
                text: 'Invoices',
                url: '/account/invoices',
                icon: 'icon-papers',
            },
            {
                text: 'Address',
                url: '/account/edit-address',
                icon: 'icon-papers',
            },
            {
                text: 'Password',
                url: '/account/password',
                icon: 'icon-papers',
            },
            {
                text: 'Wishlist',
                url: '/account/wishlist',
                icon: 'icon-papers',
            },
        ];
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-page__left">
                                <AccountMenuSidebar
                                    data={accountLinks}
                                    user={
                                        this.props.auth && this.props.auth.user
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <div className="ps-section--account-setting">
                                    <div className="ps-section__content">
                                        <Result
                                            status="404"
                                            title="Contact Us"
                                            subTitle="Sorry, for now you can only log your return request directly. Please provide the order number and reason for your request, our team will get in touch."
                                            extra={
                                                <Link href="/contact">
                                                    <Button type="primary">
                                                        Contact Us
                                                    </Button>
                                                </Link>
                                            }
                                        />
                                        ,
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const WrapFormNotifications = Form.create()(Notifications);
const mapStateToProps = (state) => ({
    auth: state.auth1.data,
    isAuthenticated: state.auth,
    loading: state.auth.loading,
    createdPlugLoading: state.createdPlug,
    isLoggedIn: state.auth.isLoggedIn,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, {})(WrapFormNotifications);
