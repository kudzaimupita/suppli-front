import React, { Component } from 'react';

import Slider from 'react-slick';
import Link from 'next/link';
import { NewspaperIcon, PhoneIcon, SupportIcon, DocumentIcon, ViewBoardsIcon, ViewListIcon } from '@heroicons/react/outline'
import { XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import './../../../tailwind.scss'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

class AboutAwards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSetting = {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            arrows: false,
            infinite: true,
            speed: 100,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };
        const supportLinks = [
            {
                name: 'Mission Statement',
                href: '#',
                description:
                    "Our mission is to be South Africa's most trusted and convenient online shopping platform, giving consumers access to groceries and common consumer goods with a safe, secure and affordable shopping platform.",
                icon: DocumentIcon,
            },
            {
                name: 'Company Vision',
                href: '#',
                description:
                    " Our goal is to give all small and medium sizeenterprises an online presence while offering variety, efficiency and affordability to all consumers.We aim to provide the ultimate online shopping experience that gives consumers access to  many small, medium and large retailers in your areas with a single and cost- effective delivery solution.",
                icon: ViewListIcon,
            },
            {
                name: ' Value Proposition',
                href: '#',
                description:
                    '   Suppl-i takes away the need to physically visit oneor several different stores, allowing consumers to save time and effort when purchasing goods.We offer a safe and efficient platform for retailers and consumers with minimized risks of exposure to crowded stores and the generally high associated delivery costs',
                icon: ViewBoardsIcon,
            },
        ]
        return (
            <div className="bg-gray "  >
                <div className="bg-gray">
                    {/* Header */}
                    <div className="relative pb-24 bg-gray-800">
                        <div className="absolute inset-0">
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
                        </div>
                        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-32 sm:px-6 lg:px-8">
                            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Suppl-i Online Shopping</h1>
                            <p className="mt-4 max-w-3xl text-xl text-gray-300">
                                “Your Favorite Local Stores…
                                Delivered Safely And Efficiently.”
                            </p>
                        </div>
                    </div>

                    {/* Overlapping cards */}
                    <section
                        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-10 px-4 sm:px-6 lg:px-8 container"
                        aria-labelledby="contact-heading"
                    >
                        <h2 className="sr-only" id="contact-heading">
                            Contact us
                        </h2>
                        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                            {supportLinks.map((link) => (
                                <div key={link.name} className="flex flex-col bg-white sm:rounded-lg shadow-xl">
                                    <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                        <div style={{ borderRadius: '160px' }} className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-lg shadow-lg transform -translate-y-1/2">
                                            <link.icon className="h-8 w-8 text-white" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                                        <p className="mt-4 text-base text-gray-500">{link.description}</p>
                                    </div>
                                    <div className="p-6 bg-gray-100 rounded-bl-2xl rounded-br-2xl md:px-8">
                                        <a href='/contact' className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                                            Contact us<span aria-hidden="true"> &rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                {/* <div className="bg-white container">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div>
                                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    About Us
                                </h2>
                                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                                    Suppl-i is a proudly South African company that aims
                                    to assist all South Africans with a better online
                                    shopping experience. At Suppl-i, everything we do is
                                    guided by the fundamental value that our local
                                    vendors and customers are the most important factor
                                    to supporting local business and communities. By
                                    creating a local online marketplace, we can support
                                    small business owners with a seller-friendly site
                                    while giving local consumers access to their
                                    favourite local stores online. By shopping at your
                                    favourite, local, neighbourhood stores you support
                                    small businesses and their employees and help
                                    improve the lifestyles of local communities.
                                    Shopping at local stores gives consumers access to
                                    locally manufactured and distributed goods and often
                                    helps people find amazing products and deals that
                                    they might otherwise not have found.
                                </p>
                                <div className="mt-8 sm:flex">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            Create Account
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                        >
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                    <img
                                        className="max-h-12"
                                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                        alt="Workcation"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                    <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                    <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                    <img
                                        className="max-h-12"
                                        src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                                        alt="Laravel"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                    <img
                                        className="max-h-12"
                                        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                        alt="StaticKit"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                    <img
                                        className="max-h-12"
                                        src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                                        alt="Statamic"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4 ">
                        {/* <img
                            className="mx-auto h-12 w-auto"
                            src='/static/img/suppli-logo.png'
                            alt="suppl-i"
                        /> */}
                        <h1 className=" text-center text-4xl font-bold text-gray-900">About Us</h1>
                        {/* <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <a href="/account/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Fina
                                </a>
                            </p> */}
                    </div>

                    <div className="container" style={{ marginBottom: '30px' }}>


                        <p className="mt-4 text-base text-gray-500">
                            Suppl-i is a proudly South African company that aims
                            to assist all South Africans with a better online
                            shopping experience. At Suppl-i, everything we do is
                            guided by the fundamental value that our local
                            vendors and customers are the most important factor
                            to supporting local business and communities. By
                            creating a local online marketplace, we can support
                            small business owners with a seller-friendly site
                            while giving local consumers access to their
                            favourite local stores online. By shopping at your
                            favourite, local, neighbourhood stores you support
                            small businesses and their employees and help
                            improve the lifestyles of local communities.
                            Shopping at local stores gives consumers access to
                            locally manufactured and distributed goods and often
                            helps people find amazing products and deals that
                            they might otherwise not have found.</p>
                    </div>


                </div>
                <div className="bg-white container my-5">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="" src="/static/img/12.png" alt="Suppl-i" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className='' src="/static/img/13.png" alt="Suppl-i" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className='' src="/static/img/14.png" alt="Suppl-i" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                <img className='' src="/static/img/15.png" alt="Suppl-i" />
                            </div>
                            <div className="col-span-2 flex justify-center sm:col-span-6 md:col-span-3 lg:col-span-1">
                                <img className='' src="/static/img/16.png" alt="Suppl-i" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutAwards;
