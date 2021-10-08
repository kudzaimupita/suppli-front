import React, { useEffect } from 'react';
import { Result, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../store/cart/action'
import '../../tailwind.scss'
import { useRouter } from "next/router";
import { createCompleteBooking, CreateExpressBooking } from './modules/calculate'
import { getOrder, setCurrentOrder, createOrderAction } from './../../../actions/orders';
import '../../../components/tailwind.scss'
const Success = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const currentOrder = useSelector((state) => state.currentOrder?.currentOrder)
    const serverOrder = useSelector((state) => state.createdOrder.order)
    //   g
    useEffect(() => {

        (async function () {
            if (currentOrder.store && currentOrder.type) {
                // dispatch(getOrder()) 

                const booking = await CreateExpressBooking(
                    { name: currentOrder?.name, phone: currentOrder?.phone, address: currentOrder.address, code: currentOrder.code, provice: currentOrder.province },
                    {
                        name: currentOrder?.store.name, phone: currentOrder?.store.phone,
                        companyEmail: currentOrder?.store.companyEmail, code: currentOrder?.store.postalCode, address: currentOrder?.store.address + ', ' + currentOrder?.store.address
                    }, currentOrder.type)
            
   console.log(booking)  
  dispatch(setCurrentOrder({}))
            }
         
        })();
        const query = router.query;
        dispatch(clearCart())
    }, [currentOrder])
    return (<>
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
        {/* <div className="py-14 px-4 md:px-6 xl:px-20 container 2xl:mx-auto">
            <div className="flex flex-col xl:flex-row justify-center items-center w-full xl:space-x-8 space-y-8 md:space-y-10 xl:space-y-0">
                <div className="flex justify-start flex-col items-start w-full xl:w-4/12 g-blue-600 ">
                    <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full text-center md:text-left text-gray-800">Order Summary</h3>
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-start mt-8 xl:mt-10 xl:space-y-10 w-full space-y-8 md:space-y-0 md:space-x-24 xl:space-x-0 ">
                        <div className="flex justify-start items-start flex-col space-y-8 w-full md:w-auto lg:w-full">
                            <div className="flex jusitfy-start items-start flex-col space-y-2">
                                <p className="text-base font-semibold leading-4  text-gray-800">Order Number</p>
                                <p className="text-sm leading-5 text-gray-600">Handled By Droppa Couriers</p>
                            </div>
                            <div className="flex jusitfy-start items-start flex-col space-y-2">
                                <p className="text-base font-semibold leading-4  text-gray-800">Shipping Address</p>
                                <p className="text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 w-full">
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600">$56.00</p>
                                </div>
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">
                                        Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">STUDENT</span>
                                    </p>
                                    <p className="text-base leading-4 text-gray-600">-$28.00 (50%)</p>
                                </div>
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base leading-4 text-gray-600">$8.00</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">$36.00</p>
                            </div>
                            <div className="mb-4 flex w-full md:w-8/12 lg:w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                <button className="py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">Home</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </>
    )
}
export default Success;
