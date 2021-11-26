import React, { useEffect, useState } from 'react';
// import PeachMobile from 'react-native-peach-mobile';

// const setPeachMobileRef = (ref) => {
//     peachMobile = ref;
// }
export const Checkout = (props) => {
    const [orderId, setOrderId] = useState('')
    const [formShown, setFormShown] = useState('')
    useEffect(() => {
        setOrderId(props.orderId?.id)
    }, [props.orderId])
    // const { cardHolder, cardNumber, cardExpiryYear, cardExpiryMonth, cardCVV } = this.state;
    var wpwlOptions = {
        style: "card",
        onReady: function () {
            var numberOfInstallmentsHtml = '<div class="wpwl-label wpwl-label-custom" style="display:inline-block">Number of Installments</div>' +
                '<div class="wpwl-wrapper wpwl-wrapper-custom" style="display:inline-block">' +
                '<select name="recurring.numberOfInstallments"><option value="1">1</option><option value="3">3</option><option value="5">5</option></select>' +
                '</div>';
            $('form.wpwl-form-card').find('.wpwl-button').before(numberOfInstallmentsHtml);
        }
    }
    // const onReady = () => {
    //     var numberOfInstallmentsHtml = '<div class="wpwl-label wpwl-label-custom" style="display:inline-block">Number of Installments</div>' +
    //         '<div class="wpwl-wrapper wpwl-wrapper-custom" style="display:inline-block">' +
    //         '<select name="recurring.numberOfInstallments"><option value="1">1</option><option value="3">3</option><option value="5">5</option></select>' +
    //         '</div>';
    //     $('form.wpwl-form-card').find('.wpwl-button').before(numberOfInstallmentsHtml);
    // }
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://oppwa.com/v1/paymentWidgets.js?checkoutId=" + props.orderId?.id
    //     script.async = true;
    //     document.body.appendChild(script)
    //     console.log(props.orderId?.id.split('.')[0])
    //     props.setPaymentId(props.orderId?.id)


    //     const form = document.createElement("form")
    //     form.action = "http://localhost:3000/result";
    //     form.setAttribute("class", "paymentWidgets");
    //     form.setAttribute("data-brands", "VISA MASTER AMEX")
    //     form.onload = wpwlOptions



    //     // script.src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.state.checkoutId}`;
    //     // script.async = true;

    //     // document.body.appendChild(script);

    //     // const form = document.createElement("form")
    //     // form.action = "http://localhost:3000/result";
    //     // form.setAttribute("class", "paymentWidgets");
    //     // form.setAttribute("data-brands", "VISA MASTER AMEX")
    // }, [props.orderId])

    const renderPaymentform = () => {
        setFormShown(true)
        console.log('Loading ')
        const script = document.createElement("script");
        script.src = "https://oppwa.com/v1/paymentWidgets.js?checkoutId=" + orderId
        script.async = true;

        document.body.appendChild(script);

        const form = document.createElement("form")
        form.action = "/successful-payment";
        form.setAttribute("class", "paymentWidgets");
        form.setAttribute("data-brands", "VISA MASTER AMEX")
        form.onload = wpwlOptions
        document.body.appendChild(form);
    }
    return (
        <div className='bg-gray-100' style={{ backgroundColor: '#eeeeee' }}>
            {orderId && !formShown && renderPaymentform()}
            {/* <PeachMobile
                mode="test"
                urlScheme="com.example.app.payments"
                cardHolder={'cardHolder'}
                cardNumber={'cardNumber'}
                cardExpiryYear={'cardExpiryYear'}
                cardExpiryMonth={'cardExpiryMonth'}
                cardCVV={'cardCVV'}
                checkoutID={props.orderId?.id}
                ref={setPeachMobileRef}
            /> */}
            {/* {orderId && <form action="/successful-payment" className="paymentWidgets" data-brands="VISA MASTER "></form>} */}
        </div>
    )
}


export default Checkout
