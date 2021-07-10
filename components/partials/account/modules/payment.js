import React, { useEffect } from 'react';
import {} from '../../../../store/cart'

export const Checkout = (props) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=" + props.orderId?.id
        script.async = true;
        document.body.appendChild(script)
    }, [props.orderId])
    return (
        <div>
            {props.orderId?.id && <form action="/successful-payment" className="paymentWidgets" data-brands="VISA MASTER AMEX"></form>}
        </div>
    )
}

export default Checkout
