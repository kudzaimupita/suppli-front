import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormCheckoutInformation from './modules/FormCheckoutInformation';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=" + 'B63C8819FE0D3495FA877CBC494FAEDD.uat01-vm-tx02'
        script.async = true;
        document.body.appendChild(script)


    }

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Checkout </h1>
                    </div>
                    {/* <form style={{ backgroundColor: 'blue' }} action="{shopperResultUrl}" className="paymentWidgets" data-brands="VISA MASTER AMEX"></form> */}
                    <div className="ps-section__content">
                        <FormCheckoutInformation
                            amount={amount}
                            cartTotal={cartTotal}
                            cartItems={cartItems}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(Checkout);
