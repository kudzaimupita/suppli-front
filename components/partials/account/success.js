import React, { useEffect, useState } from 'react';
import { Result, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../store/cart/action'
import '../../tailwind.scss'
import { useRouter } from "next/router";
import { createCompleteBooking, CreateExpressBooking } from './modules/calculate'
import { getOrder, setCurrentOrder, createOrderAction, confirmOrderAction, clearCreatedOrder, setOrderSuccess } from './../../../actions/orders';
import '../../../components/tailwind.scss'
import Modal from 'react-modal'
import { Spinner } from 'react-activity';
const Success = () => {

    const dispatch = useDispatch()
    const router = useRouter();
    const [code, setcode] = useState('')
    const [busy, setbusy] = useState(false)
    const [callDroppa, setcallDroppa] = useState(false)
    const currentOrder = useSelector((state) => state.currentOrder?.currentOrder)
    const plugId = useSelector((state) => state.createdOrder2.order?._doc?.boughtProducts[0]?.plug)
    const token = useSelector((state) => state.auth1?.token)
    const orderId = useSelector((state) => state.createdOrder2.order?._doc?._id)
    const paymentId = useSelector((state) => state.createdOrder2.order?.id)
    const orderSuccess = useSelector((state) => state.orderSuccess.orderSuccess)
    // const createdOrder = useSelector((state) => state.createdOrder2.order?)
    // const droppa = async () => {
    //     await CreateExpressBooking(
    //         { name: currentOrder?.name, phone: currentOrder?.phone, address: currentOrder.address, code: currentOrder.code, provice: currentOrder.province },
    //         {
    //             name: currentOrder?.store.name, phone: currentOrder?.store.phone,
    //             companyEmail: currentOrder?.store.companyEmail, code: currentOrder?.store.postalCode, address: currentOrder?.store.address + ', ' + currentOrder?.store.address
    //         }, currentOrder.type, currentOrder.shippingAmount)
    // }
    const g = async () => {
        setbusy(true)
        await fetch(`https://suppli-api.herokuapp.com/api/v1/orders/${orderId}`, {
            method: 'GET',
            headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }).then(async (res) => {
            const g = await res.json()
            setcode(g.data[0].paymentStatus)
            console.log(g.data[0].paymentStatus)
        }).finally(() => {
            setbusy(false)
        })
    }
    useEffect(() => {
        (async function () {
            if (callDroppa) {
                await droppa()
            }
            setcallDroppa(false)
        })();
    }, [callDroppa])

    useEffect(() => {
        (async function () {
            orderId && await g()
        })();
    }, [])

    const checkResult = () => {
        if (orderSuccess || code === 'confirmed') {
            dispatch(clearCart())
            if (code !== 'confirmed') {
                dispatch(confirmOrderAction({ plugId: plugId }, orderId))
                //  setcallDroppa(true)
            }
            return (
                <div className="">
                    <div className="container">
                        <Result
                            status="success"
                            title="Successful Order!"
                            subTitle="Your order is currently being processed by our team. You can track it on your user dashboard. Thank you."
                            extra={[
                                <a href='/'>       <div className="mb-4 flex w-full md:w-8/12 lg:w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                    <button className="py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">Track Your Order</button>
                                </div></a>
                            ]}
                        />,
                    </div>
                </div>
            )
        } else {
            return (<div className="">
                <div className="container">
                    <Result
                        status="error"
                        title="Failed Order!"
                        subTitle="Something went wrong with your order. Please try again"
                        extra={[
                            <a href='/checkout'>       <div className="mb-4 flex w-full md:w-8/12 lg:w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                <button className="py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">Try Again</button>
                            </div></a>
                        ]}
                    />,
                </div>
            </div>
            )
        }
    }

    useEffect(() => {

        (async function () {
            setbusy(true)
            var executed = false;

            if (!executed) {
                executed = true;
                paymentId && await fetch(`https://oppwa.com/v1/checkouts/${paymentId}/payment?entityId=${'8ac9a4cb7a7c08be017a7c791606087a'}`, {
                    method: 'GET',
                    headers: {
                        // 'Accept': 'application/json',
                        // 'Content-Type': 'application/json',
                        'Authorization': 'Bearer OGFjOWE0Y2U3YTVjMDVlYjAxN2E3YzY4ZWZjZjEyNjJ8Q2JjRXM5NkdDQQ==',
                    }
                }).then(async (res) => {
                    const data = await res.json()
                    console.log(data)

                    const successPattern = /^(000\.000\.|000\.100\.1|000\.[36])/;
                    const manuallPattern = /^(000\.400\.0[^3]|000\.400\.100)/;

                    const match1 = successPattern.test(data.result.code);
                    const match2 = manuallPattern.test(data.result.code);

                    if (match1 || match2) {
                        // localStorage.setItem('orderSuccess', 'true')
                        // dispatch(createOrderAction())
                        dispatch(setOrderSuccess(true))
                    } else {
                        dispatch(setOrderSuccess(false))
                    }
                    // setcode(data.result.code)
                }).finally(() => setbusy(false))
            }

        })();

    }, [])


    return (<>
        {busy ?

            <Modal style={{ zIndex: 99999 }} isOpen={true} ariaHideApp={false}
                overlayClassName={`flex w-screen position-float fixed top-0 left-0 h-screen bg-opacity-50 bg-white z-50`}
                className={`border-none m-auto select-none outline-none w-content z-50`}>
                <Spinner
                    color="black"
                    size={32}
                    speed={1}
                    animating={true} />
            </Modal> : <>   {checkResult()}</>}

        {/**/}
    </>
    )
}
export default Success;
