import React, { useEffect } from 'react';
import { Result, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../store/cart/action'

import { useRouter } from "next/router";
import { createCompleteBooking, CreateExpressBooking } from './modules/calculate'
import { getOrder } from './../../../actions/orders';
const Success = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const currentOrder = useSelector((state) => state.currentOrder?.currentOrder)
    //   g
    useEffect(() => {
        (async function () {
            if (currentOrder.store) {
                dispatch(getOrder())
                await CreateExpressBooking(
                    { name: currentOrder?.name, phone: currentOrder?.phone, address: currentOrder.address, code: currentOrder.code, provice: currentOrder.province },
                    {
                        name: currentOrder?.store.name, phone: currentOrder?.store.phone,
                        companyEmail: currentOrder?.store.companyEmail, code: currentOrder?.store.postalCode, address: currentOrder?.store.address + ', ' + currentOrder?.store.address
                    })
            }
        })();
        const query = router.query;
        dispatch(clearCart())
        console.log(currentOrder)

    }, [])
    return (
        <div className="ps-section--vendor ps-vendor-about">
            <div className="container">
                <Result
                    status="success"
                    title="Successful Order!"
                    subTitle="Your order is currently being processed by our team. You can track it in your user dashboard. Thank you."
                    extra={[
                        <a href='/'><Button type="primary" key="console">
                            Home
                        </Button></a>

                    ]}
                />,
            </div>
        </div>
    )
}
export default Success;
