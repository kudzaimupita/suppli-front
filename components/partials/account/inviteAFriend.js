import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';
import { inviteAFriendAction } from '../../../actions/vendors';
import { setAlert } from '../../../actions/alert';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import { Spinner } from 'react-activity';
// import {  Input, notification, Button } from 'antd';
// import { connect } from 'react-redux';
import { MailIcon, PhoneIcon, LockClosedIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'


import './../../../components/tailwind.scss'

class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    state = {
        name: '',
        email: '',
        friendEmail: '',
        friendName: '',
        open: false
    };

    formData = {
        email: this.state.email,
        name: this.state.name,
        friendName: this.state.friendName,
        friendEmail: this.state.friendEmail,
    };
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleFriendNameChange = (e) => {
        this.setState({ friendName: e.target.value });
    };

    handleFriendEmailChange = (e) => {
        this.setState({ friendEmail: e.target.value });
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleSubmit = (e) => {
        this.setState({ open: true })
        e.preventDefault();
        const invite = {
            name: this.state.name,
            email: this.state.email,
            friendEmail: this.state.email,
            friendName: this.state.friendName,
        };
        this.props.inviteAFriendAction(invite);
        this.setState({ name: '' });
        this.setState({ email: '' });
        this.setState({ friendEmail: '' });
        this.setState({ friendName: '' });

    };

    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(this.state);
        return (<>

            <div className="ps-my-account">
                <div className="container">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                        <img
                            className="mx-auto h-12 w-auto"
                            src='/static/img/suppli-logo.png'
                            alt="suppl-i"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">   Invite Your Friend</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="/vendor/suggest-a-vendor" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Suggest Your Favourite Store
                            </a>
                        </p>
                    </div>
                    <Form
                        className="ps-form--account"
                        onSubmit={this.handleSubmit}>
                        <div className="shadow bg-white overflow-hidden border-b border-gray-200 sm:rounded-lg" id="sign-in">
                            <div className="ps-form__content">
                                {/* <h5>Invite Your Friend</h5> */}
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Your Name<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className="">
                                    <Form.Item>
                                        <Input
                                            required
                                            size={'large'}
                                            type="text"
                                            placeholder="Your Name*"
                                            onChange={this.handleNameChange}
                                            value={this.state.name}
                                        />
                                    </Form.Item>
                                </div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Your Email<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className="">
                                    <Form.Item>
                                        <Input
                                            required
                                            size={'large'}
                                            type="email"
                                            placeholder="Your Email*"
                                            onChange={this.handleEmailChange}
                                            value={this.state.email}
                                        />
                                    </Form.Item>
                                </div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Friend Name<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className="">
                                    <Form.Item>
                                        <Input
                                            required
                                            size={'large'}
                                            type="text"
                                            placeholder="Friend Name*"
                                            onChange={
                                                this.handleFriendNameChange
                                            }
                                            value={this.state.friendName}
                                        />
                                    </Form.Item>
                                </div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Friend Email<span style={{ color: 'red' }}>*</span>
                                </label>
                                <div className=" form-forgot">
                                    <Form.Item>
                                        <Input
                                            required
                                            size={'large'}
                                            type="email"
                                            placeholder="Friend Email*"
                                            onChange={
                                                this.handleFriendEmailChange
                                            }
                                            value={this.state.friendEmail}
                                        />
                                    </Form.Item>
                                </div>

                                <div className=" submit mb-6" >
                                    <button
                                        type="submit"
                                        className="submit group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                        </span>
                                        <span style={{ marginRight: 10 }}> {this.props.loading ? <Spinner

                                            color="white"
                                            size={12}
                                            speed={1}
                                            animating={true} /> : null}</span>
                                        Login
                                    </button>
                                </div>
                            </div>

                        </div>
                    </Form>
                </div>
            </div>
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
                                            Invite Sent!
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Your invite was successfully sent to your friend. Thank you for taking part in growing Suppl-i.
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
        </>
        );
    }
}
const WrapFormLogin = Form.create()(Login);
const mapStateToProps = (state) => {
    return state.auth;
};
export default connect(mapStateToProps, { inviteAFriendAction, setAlert })(
    WrapFormLogin
);
