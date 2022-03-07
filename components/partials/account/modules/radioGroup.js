import React, { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import '../../../tailwind.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Radio } from 'antd';
import '../../../tailwind.scss'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'
// import { createCompleteBooking, CreateExpressBooking } from './modules/calculate'
import { getOrder, setCurrentOrder, createOrderAction, setSelectedType } from '../../../../actions/orders';


export default function Example({ prices, setSelectedPrice, setSelectedType }) {
    const dispatch = useDispatch()
    const plans = [
        {
            price: 60 || 0, name: 'Budget',
            ram: '4 Day Delivery',
            cpus: '6 CPUs',
            disk: '160 GB SSD disk',
            type: 'BUDGET_COURIER'
        },
        {
            price: 60 || 0, name: 'Express',
            ram: 'Fast Shipping, 1-2 days',
            cpus: '8 CPUs',
            disk: '512 GB SSD disk',
            type: 'EXPRESS_COURIER'
        },
        {
            price: prices.dashAmount || 0, name: 'Dash (Same Day Delivery)',
            ram: 'Limited to Gauteng/Western Cape',
            cpus: '12 CPUs',
            disk: '1024 GB SSD disk',
            type: 'DASH'
        },
    ]
    useEffect(() => {
        setSelectedPrice(60)
        setSelectedType('BUDGET_COURIER')
    }, [prices])
    const handleSelected = async (e) => {
        if (e.type === 'BUDGET_COURIER') {
            setDefaultSelect(true)
        } else {
            setDefaultSelect(false)
        }
        setSelectedType(e.type)
        console.log(e)
        setSelected(e)
        setSelectedPrice(60)
        console.log(e)
    }
    const [defaultSelect, setDefaultSelect] = useState(true)
    const [selected, setSelected] = useState(plans[0])
    const [couponCode, setCouponCode] = useState(false)
    const [isCodeCorrect, setIsCodeCorrect] = useState(false)

    const handleCouponCodeChange = (e) => {
        setCouponCode(e.target.value)
        // if (e.target.value === 'FREE-D22M3') {
        //     alert('ggggg')
        // }
    }
    useEffect(() => {
        if (couponCode === 'FREE-D22M') {
            setIsCodeCorrect(true)
            setSelectedPrice(0)
        } else {
            setIsCodeCorrect(false)
            setSelectedPrice(60)
        }
    }, [couponCode])

    return (

        <div className="p-4 md:p-6 xl:p-10 bg-gray-100 w-full flex flex-col justify-start items-start">
            <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">Shipping Method</p>
            <div className="flex justify-start items-start flex-col mt-9 space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4">
                    <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input checked={defaultSelect ? true : false} aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:border-gray-400 border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div className="check-icon hidden border-4 border-gray-100 bg-gray-800 rounded-full w-full h-full z-1"></div>
                    </div>
                    <label id="label2" className="text-base leading-normal md:leading-4 text-gray-800">
                        Express Delivery(Same day)   {" "}
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-200 text-gray-800 ${isCodeCorrect ? 'line-through' : ''}`} >
                            {"ZAR " + plans[0].price}
                        </span>
                        {isCodeCorrect ? <div className="flex mt-2">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-green-800">Discount Applied</h3>
                                {/* <div className="mt-2 text-sm text-green-700">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                            </div> */}

                            </div>
                        </div> : null}
                        {!isCodeCorrect && couponCode.length > 9 ?
                            <div className="flex mt-2">
                                <div className="flex-shrink-0">
                                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800">Invalid Code.</h3>
                                    {/* <div className="mt-2 text-sm text-green-700">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                            </div> */}

                                </div>
                            </div> : null

                        }
                    </label>
                </div>
                {/* 
                <div className="flex items-center space-x-4">
                    <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input onClick={() => handleSelected(plans[1])} aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:border-gray-400 border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div className="check-icon hidden border-4 border-gray-100 bg-gray-800 rounded-full w-full h-full z-1"></div>
                    </div>
                    <label id="label2" className="text-base leading-normal md:leading-4 text-gray-800">
                        Express Delivery(1 - 3 business days)  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-200 text-gray-800">
                            {" ZAR " + plans[1].price}
                        </span>
                    </label>
                </div> */}

                {/* {plans[2].price !== 0 && <div className="flex items-center space-x-4">
                    <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input onClick={() => handleSelected(plans[2])} aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:border-gray-400 border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div className="check-icon hidden border-4 border-gray-100 bg-gray-800 rounded-full w-full h-full z-1"></div>
                    </div>
                    <label id="label2" className="text-base leading-normal md:leading-4 text-gray-800">
                        Dash Delivery(Same day delivery) <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-200 text-gray-800">
                            {" ZAR " + plans[2].price}
                        </span>
                    </label>
                </div>} */}
            </div>
            <div className="col-sm-6 mt-2">
                <div className="form-group">

                    <input
                        required='true'
                        className="form-control"
                        type="text"
                        placeholder="Free Delivery Coupon Code"
                        // value={this.state.name}
                        onChange={handleCouponCodeChange}
                    />


                </div>
            </div>

        </div>



    )
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
