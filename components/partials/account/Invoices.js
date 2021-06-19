import React, { Component } from 'react';
import Router, { useRouter } from 'next/router';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableInvoices from './modules/TableInvoices';
import { connect } from 'react-redux';
import { getMyOrders } from '../../../actions/orders';

class Invoices extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (this.props.isLoggedIn === true) {
            this.props.getMyOrders();
        }
    }
    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === false) {
            Router.push('/');
        }
        return false;
    }
    static getInitialProps(props) {
        if (props.isLoggedIn !== true) {
            Router.push('/');
        }
    }

    render() {

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
            },
            {
                text: 'Invoices',
                url: '/account/invoices',
                icon: 'icon-papers',
                active: true,
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
                                        <TableInvoices
                                            orders={
                                                this.props.orders &&
                                                this.props.orders
                                            }
                                        />
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

const mapStateToProps = (state) => ({
    auth: state.auth1.data,
    isAuthenticated: state.auth,
    loading: state.auth.loading,
    orders: state.myOrders.orders,
    isLoggedIn: state.auth.isLoggedIn,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, { getMyOrders })(Invoices);
