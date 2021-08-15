import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import { login } from '../../../store/auth/action';
import { setAlert } from '../../../actions/alert';
import { sendMessageAction } from '../../../actions/contactForm';
import { Spinner } from 'react-activity';
import { Form, Input, notification, Button } from 'antd';
import { connect } from 'react-redux';
// import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { MailIcon, PhoneIcon, LockClosedIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'


import './../../../components/tailwind.scss'

// const history = useHistory()
class Login extends Component {
    state = {
        email: '',
        message: '',
        name: '',
        open: false
    };



    formData = {
        email: this.state.email,
        name: this.state.name,
        message: this.state.message,
    };
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };
    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    };
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendMessageAction({
            email: this.state.email,
            name: this.state.name,
            message: this.state.message,
        });
        this.setState({ name: '' });
        this.setState({ email: '' });
        this.setState({ message: '' });
        this.setState({ open: true })

    };

    render() {
        console.log(this.state);
        const { getFieldDecorator } = this.props.form;
        return (<>


            <Transition.Root show={this.state.open} as={Fragment}>
                <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={this.state.open} onClose={() => Router.push('/')}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle " aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-200">
                                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Message Sent!
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Your message was successfully sent to our team. We'll get back at you shortly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <a href='/'>   <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                    // onClick={() => setOpen(false)}
                                    >
                                        Go back to homepage
                                    </button>
                                </div></a>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <div style={{ backgroundColor: '#eeeeee' }}>

                {/* <div className="bg-warm-gray-50">
                <div className="py-24 lg:py-32">
                    <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                            Get in touch
                        </h1>
                        <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
                            Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna
                            ut volutpat. Sagittis et vel et fermentum amet consequat.
                        </p>
                    </div>
                </div>
            </div> */}
                <div className="container">

                    <div className="max-w-7xl mx-auto  px-4 sm:py-10 sm:px-6 lg:px-8">
                        <div className="relative bg-white shadow-xl">
                            <h2 className="sr-only">Contact us</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Contact information */}
                                <div className="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
                                    <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={343}
                                            height={388}
                                            viewBox="0 0 343 388"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                                fill="url(#linear1)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear1"
                                                    x1="254.553"
                                                    y1="107.554"
                                                    x2="961.66"
                                                    y2="814.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff" />
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={359}
                                            height={339}
                                            viewBox="0 0 359 339"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                                fill="url(#linear2)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear2"
                                                    x1="192.553"
                                                    y1="28.553"
                                                    x2="899.66"
                                                    y2="735.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff" />
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={160}
                                            height={678}
                                            viewBox="0 0 160 678"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                                fill="url(#linear3)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear3"
                                                    x1="192.553"
                                                    y1="325.553"
                                                    x2="899.66"
                                                    y2="1032.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff" />
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-white">Contact information</h3>
                                    <p className="mt-6 text-base text-indigo-100 max-w-3xl">
                                        Please send us a message if you have any suggestions, questions, refund requests or any other queries.
                                    </p>
                                    <p className="mt-6 text-sm font-medium text-white">
                                        Follow Us On social Media.
                                    </p>
                                    <dl className="mt-4 space-y-6">
                                        {/* <dt>
                                            <span className="sr-only">Phone number</span>
                                        </dt> */}
                                        <dd className="flex text-base text-indigo-100">
                                            <a className="text-indigo-200 hover:text-indigo-100" href="#">
                                                <span className="sr-only">Facebook</span>
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </a>
                                            <span className="ml-3">@supplishopping</span>
                                        </dd>
                                        <dd className="flex text-base text-indigo-100">
                                            <a className="text-indigo-200 hover:text-indigo-100" href="#">
                                                <span className="sr-only">Twitter</span>
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </a>
                                            <span className="ml-3">@supplishopping</span>
                                        </dd>
                                        <dt>
                                            <span className="sr-only">Email</span>
                                        </dt>
                                        <dd className="flex text-base text-indigo-100">
                                            <MailIcon className="flex-shrink-0 w-6 h-6 text-indigo-200" aria-hidden="true" />
                                            <span className="ml-3">info@suppl-i.com</span>
                                        </dd>
                                    </dl>


                                </div>

                                {/* Contact form */}
                                <div className="ps-contact-form">
                                    <div className=" mx-4">
                                        <form
                                            onSubmit={this.handleSubmit}
                                            className="ps-form--contact-us"
                                            action="/"
                                            method="get">
                                            <h3>Get In Touch</h3>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                                    <div className="form-group">
                                                        <Input
                                                            required
                                                            size={'large'}
                                                            type="text"
                                                            placeholder="Name *"
                                                            value={this.state.name}
                                                            onChange={this.handleNameChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                                    <div className="form-group">
                                                        <Input
                                                            required
                                                            size={'large'}
                                                            type="email"
                                                            placeholder="Email *"
                                                            value={this.state.email}
                                                            onChange={this.handleEmailChange}
                                                        />
                                                    </div>
                                                </div>
                                                {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="form-group">
                            <Input size={'large'} type="text" placeholder="Subject *" />
                        </div>
                    </div> */}
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <div className="form-group">
                                                        <Input.TextArea
                                                            required
                                                            // size={'large'}
                                                            rows="5"
                                                            placeholder="Message"
                                                            value={this.state.message}
                                                            onChange={
                                                                this.handleMessageChange
                                                            }></Input.TextArea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group submit mx-6">
                                                <button
                                                    type="submit"
                                                    className="submit group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                                >
                                                    {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                        <LockClosedIcon className="h-5 w-5 text-gray-500 group-hover:text-grayu-400" aria-hidden="true" />
                                                    </span> */}

                                                    <span style={{ marginRight: 10 }}> {this.props.loading ? <Spinner

                                                        color="white"
                                                        size={12}
                                                        speed={1}
                                                        animating={true} /> : null}</span>
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div></>
        );
    }
}
const WrapFormLogin = Form.create()(Login);
const mapStateToProps = (state) => ({
    loading: state.sentMessage.loading
});
export default connect(mapStateToProps, { setAlert, sendMessageAction })(
    WrapFormLogin
);
