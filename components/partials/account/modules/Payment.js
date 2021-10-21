import React, { useEffect } from 'react';

export const Checkout = (props) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://oppwa.com/v1/paymentWidgets.js?checkoutId=" + props.orderId?.id
        script.async = true;
        document.body.appendChild(script)
        console.log(props.orderId?.id)
        props.setPaymentId(props.orderId?.id)
    }, [props.orderId])
    return (
        <div>
            {props.orderId?.id && <form action="/successful-payment" className="paymentWidgets" data-brands="VISA MASTER "></form>}
        </div>
    )
}

export default Checkout
