import React, { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import '../../../tailwind.scss'


export default function Example({ prices, setSelectedPrice }) {

    const plans = [
        {
            price: prices.expressBudgetAmt, name: 'Budget',
            ram: '4 Day Delivery',
            cpus: '6 CPUs',
            disk: '160 GB SSD disk',
        },
        {
            price: prices.expressCourier, name: 'Express',
            ram: 'Fast Shipping, 1-2 days',
            cpus: '8 CPUs',
            disk: '512 GB SSD disk',
        },
        {
            price: prices.dashAmount, name: 'Dash (Same Day Delivery)',
            ram: 'Limited to Gauteng/Western Cape',
            cpus: '12 CPUs',
            disk: '1024 GB SSD disk',
        },
    ]
    useEffect(() => {
        setSelectedPrice(prices.expressBudgetAmt)
    }, [prices])
    const handleSelected = (e) => {
        setSelected(e)
        setSelectedPrice(e.price)
    }
    const [selected, setSelected] = useState(plans[0])
    return (
        <div className="w-full px-4 py-16">
            <div className="w-full max-w-md mx-auto">
                <RadioGroup value={plans[0]} onChange={(e) => handleSelected(e)}>
                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                    <div className="space-y-2">
                        {prices && plans.map((plan) => (
                            <RadioGroup.Option
                                key={plan.name}
                                value={plan}
                                className={({ active, checked }) =>
                                    `${active
                                        ? 'ring-2 ring-offset-2 ring-offset-green-300 ring-white ring-opacity-60'
                                        : ''
                                    }
                  ${checked ? 'bg-blue-800 bg-opacity-75 text-white' : 'bg-blue-400'
                                    }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${checked ? 'text-white' : 'text-white'
                                                            }`}
                                                    >
                                                        {plan.name}    {!checked ? (
                                                            null
                                                        ) : <span className="inline-flex items-center ml-1 px-3 py-2.5 rounded-full text-sm font-medium bg-red-300 text-gray-600">
                                                            R {plan.price}
                                                        </span>}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${checked ? 'text-green-100' : 'text-white'
                                                            }`}
                                                    >
                                                        <span>
                                                            {plan.ram}
                                                        </span>{' '}
                                                        {/* <span aria-hidden="true">&middot;</span>{' '}
                                                        <span>{plan.disk}</span> */}
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked ? (
                                                <div className="flex-shrink-0 text-white">
                                                    <CheckIcon className="w-6 h-6" />
                                                </div>
                                            ) : <span className="inline-flex items-center px-3 py-2.5 rounded-full text-sm font-medium bg-green-300 text-gray-600">
                                                R {plan.price}
                                            </span>}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
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
