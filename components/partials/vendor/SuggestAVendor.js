import React from 'react';
// import { createVendor} from "../actions/vendors";
import { connect } from 'react-redux';
import axios from 'axios';
import Router from 'next/router';
// import { setAlert } from "../actions/alert";
import {
    UserOutlined,
    FacebookOutline,
    InstagramOutline,
    InsuranceTwoTone,
    InstagramFill,
} from '@ant-design/icons';
import {
    Button,
    Card,
    Form,
    Input,
    Row,
    Col,
    Progress,
    Spin,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    Modal,
} from 'antd';
import { Collapse } from 'antd';
import { createPlug, suggestAVendorAction } from './../../../actions/vendors';
const { Panel } = Collapse;
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { setAlert } from './../../../actions/alert';

import '../../tailwind.scss'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { LockClosedIcon } from '@heroicons/react/solid'
import '../../../components/tailwind.scss'
import { Spinner } from 'react-activity';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

const { TextArea } = Input;
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

class PlugApplication extends React.Component {
    toggleModal = (state) => {
        this.setState({
            [state]: !this.state[state],
        });
    };
    state = {
        open: false,
        loading: false,
        suggestor: '',
        vendorName: '',
        vendorEmail: '',
        vendorPhone: '',
        vendorCity: '',
        vendorProvince: '',
        vendorAddress: '',
        vendorCountry: 'South Africa',
        vendorWebsite: '',
        vendorFacebookLink: '',
        vendorInstagramLink: '',
        isModalVisible: false,
    };

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) =>
                this.setState({
                    imageUrl,
                    loading: false,
                })
            );
        }
    };

    handleFacebookChange = (e) => {
        this.setState({ vendorFacebookLink: e.target.value });
    };

    handleInstagramChange = (e) => {
        this.setState({ vendorInstagramLink: e.target.value });
    };

    handleShowModalChange = (e) => {
        this.setState({ isModalVisible: true });
    };
    handleCancelModal = (e) => {
        this.setState({ isModalVisible: false });
    };

    handleVendorNameChange = (e) => {
        this.setState({ vendorName: e.target.value });
    };

    handleVendorEmailChange = (e) => {
        this.setState({ vendorEmail: e.target.value });
    };

    handleVendorPhoneChange = (e) => {
        this.setState({ vendorPhone: e.target.value });
    };

    handleVendorAddressChange = (e) => {
        this.setState({ vendorAddress: e.target.value });
    };

    handleVendorCityChange = (e) => {
        this.setState({ vendorCity: e.target.value });
    };

    handleVendorCountryChange = (e) => {
        this.setState({ vendorCountry: e.target.value });
    };
    handleVendorProvinceChange = (e) => {
        this.setState({ vendorProvince: e.target.value });
    };

    handleVendorWebsiteChange = (e) => {
        this.setState({ vendorWebsite: e.target.value });
    };

    handleSuggestor = (e) => {
        this.setState({ suggestor: e.target.value });
    };

    handleImage1Change = (e) => {
        this.setState({ image1: URL.createObjectURL(e.target.files[0]) });
    };

    handleCatergoryChange = (e) => {
        this.setState({ catergory: e.target.value });
    };
    onSubmit = async (e) => {
        e.preventDefault()
        this.setState({ open: true })
        this.props.suggestAVendorAction({
            vendorWebsite: this.state.vendorWebsite,
            vendorFacebook: this.state.vendorFacebookLink,
            vendorInstagram: this.state.vendorInstagramLink,
            vendorEmail: this.state.vendorEmail,
            vendorName: this.state.vendorName,
            vendorPhone: this.state.vendorPhone,
            aboutUs: this.state.aboutUs,
            vendorCity: this.state.vendorCity,
            vendorCountry: this.state.vendorCountry,
            vendorAddress: this.state.vendorAddress,
            vendorProvince: this.state.vendorProvince,
            suggestor: this.state.suggestor,
        });
        this.setState({
            suggestor: '',
            vendorName: '',
            vendorEmail: '',
            vendorPhone: '',
            vendorCity: '',
            vendorProvince: '',
            vendorAddress: '',
            vendorCountry: 'South Africa',
            vendorWebsite: '',
            vendorFacebookLink: '',
            vendorInstagramLink: '',
        });
    };

    render() {
        const { loading, imageUrl } = this.state;
        console.log(this.state);
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <>
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
                                                Suggestion Submitted!
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Thank you for your suggestion. Our team will take it from here.
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
                <Form onSubmit={this.onSubmit}>
                    <div
                        className=" ps-form--account"
                        style={{ maxWidth: '700px', paddingTop: '20px' }}>
                        {' '}
                        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                            <img
                                className="mx-auto h-12 w-auto"
                                src='/static/img/suppli-logo.png'
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Suggest A Store</h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <a href="/vendor/become-a-vendor" className=" font-medium text-indigo-600 hover:text-indigo-500">
                                    Start selling with us
                                </a>
                            </p>
                        </div>

                        <div
                            className="shadow bg-white overflow-hidden border-b border-gray-200 sm:rounded-lg"
                            style={{ marginBottom: 20 }}>
                            <>
                                <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                                    {/* <h3 style={{ marginBottom: '20px' }} className="mb-0">
                                    Suggest A Store
                                </h3> */}

                                    <div className="mx-4">
                                        <Row>
                                            <Col lg="6">
                                                <>
                                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                                        Your  Name<span style={{ color: 'red' }}>*</span>
                                                    </label>
                                                    <Input
                                                        required
                                                        size={'large'}
                                                        id="input-username"
                                                        placeholder="Your name"
                                                        type="text"
                                                        prefix={
                                                            <i class="fa fa-user"></i>
                                                        }
                                                        name="name"
                                                        value={this.state.suggestor}
                                                        onChange={
                                                            this.handleSuggestor
                                                        }
                                                    />
                                                </>
                                            </Col>
                                            <Col lg="6">
                                                <>
                                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                                        Store  Name<span style={{ color: 'red' }}>*</span>
                                                    </label>
                                                    <Input
                                                        required
                                                        size={'large'}
                                                        id="input-username"
                                                        placeholder="Store Name"
                                                        type="text"
                                                        prefix={
                                                            <i class="fa fa-shopping-bag"></i>
                                                        }
                                                        name="name"
                                                        value={
                                                            this.state.vendorName
                                                        }
                                                        onChange={
                                                            this
                                                                .handleVendorNameChange
                                                        }
                                                    />
                                                </>
                                            </Col>
                                            <Col lg="6">
                                                <>
                                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                                        Store Email<span style={{ color: 'red' }}>*</span>
                                                    </label>
                                                    <Input
                                                        required
                                                        size={'large'}
                                                        id="input-email"
                                                        placeholder="Email"
                                                        type="email"
                                                        name="email"
                                                        value={
                                                            this.state.vendorEmail
                                                        }
                                                        onChange={
                                                            this
                                                                .handleVendorEmailChange
                                                        }
                                                        prefix={
                                                            <i class="fa fa-envelope"></i>
                                                        }
                                                    />
                                                </>
                                            </Col>
                                            <Col lg="6">
                                                <>
                                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                                        Store Phone<span style={{ color: 'red' }}>*</span>
                                                    </label>
                                                    <Input
                                                        required
                                                        size={'large'}
                                                        // id="input-email"
                                                        placeholder="Phone"
                                                        // type="tel"

                                                        name="phone"
                                                        value={
                                                            this.state.vendorPhone
                                                        }
                                                        onChange={
                                                            this
                                                                .handleVendorPhoneChange
                                                        }
                                                        prefix={
                                                            <i class="fa fa-phone"></i>
                                                        }
                                                    />
                                                </>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </>
                        </div>
                        <div
                            className="shadow bg-white overflow-hidden border-b border-gray-200 sm:rounded-lg"
                            style={{ marginBottom: 20 }}>
                            <div className=" my-4 mx-4" >
                                <Row>
                                    <Col md="12">
                                        <>
                                            <labe htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                                Address
                                            </labe>

                                            <Input
                                                required
                                                size={'large'}
                                                id="input-address"
                                                placeholder="Address"
                                                type="text"

                                                name="address"
                                                value={this.state.vendorAddress}
                                                onChange={
                                                    this.handleVendorAddressChange
                                                }
                                                prefix={
                                                    <i class="fa fa-map-marker"></i>
                                                }
                                            />
                                        </>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="4">
                                        <>
                                            <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                                City
                                            </label>
                                            <Input
                                                size={'large'}
                                                id="input-city"
                                                placeholder="City"
                                                type="text"

                                                name="city"
                                                value={this.state.vendorCity}
                                                onChange={
                                                    this.handleVendorCityChange
                                                }
                                                prefix={
                                                    <i class="fa fa-building"></i>
                                                }
                                            />
                                        </>
                                    </Col>
                                    <Col lg="4">
                                        <>
                                            <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                                Country
                                            </label>
                                            <Input
                                                size={'large'}
                                                defaultValue="South Africa"
                                                id="input-country"
                                                placeholder="South Africa"
                                                type="text"

                                                disabled
                                                name="country"
                                                value={this.state.vendorCountry}
                                                onChange={
                                                    this.handleVendorCountryChange
                                                }
                                                prefix={<i class="fa fa-globe"></i>}
                                            />
                                        </>
                                    </Col>
                                    <Col lg="4">
                                        <>
                                            <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                                Province
                                            </label>
                                            <Input
                                                size={'large'}
                                                placeholder="Province"
                                                type="text"

                                                // disabled
                                                name="country"
                                                value={this.state.vendorProvince}
                                                onChange={
                                                    this.handleVendorProvinceChange
                                                }
                                                prefix={<i class="fa fa-globe"></i>}
                                            />
                                        </>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="3">
                                        {' '}
                                        <>
                                            {/* <UncontrolledDropdown group>
                  <DropdownToggle caret color="secondary">
                    Choose
                  </DropdownToggle>
                  <DropdownMenu>
                    {this.props.catergories.map((catergory) => (
                      <li>
                        <DropdownItem
                          href="#pablo"
                          onClick={this.handleCatergoryChange}
                          name=""
                        >
                          {catergory.name}
                        </DropdownItem>
                      </li>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown> */}
                                        </>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div
                            className="shadow bg-white overflow-hidden border-b border-gray-200 sm:rounded-lg"
                        >
                            <div className=" my-4 mx-4" >   <Col md="9">
                                <>
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                        Facebook Handle
                                    </label>
                                    <Input
                                        size={'large'}
                                        rows="4"
                                        placeholder="Handle"
                                        type="text"
                                        name="aboutUs"
                                        value={this.state.vendorFacebookLink}
                                        onChange={this.handleFacebookChange}
                                        prefix={<i class="fa fa-at"></i>}
                                    />
                                </>
                            </Col>{' '}
                                <Col md="9">
                                    <>
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                            Instagram Handle
                                        </label>
                                        <Input
                                            size={'large'}
                                            rows="4"
                                            placeholder="Handle"
                                            type="text"
                                            name="aboutUs"
                                            value={this.state.vendorInstagramLink}
                                            onChange={this.handleInstagramChange}
                                            prefix={<i class="fa fa-at"></i>}
                                        />
                                    </>
                                </Col>{' '}
                                <Col md="9">
                                    <>
                                        Website Url
                                        <Input
                                            size={'large'}
                                            rows="4"
                                            placeholder="Url"
                                            type="text"
                                            name="website"
                                            value={this.state.vendorWebsite}
                                            onChange={this.handleVendorWebsiteChange}
                                            prefix={<i class="fa fa-www"></i>}
                                        />
                                    </>
                                </Col>{' '}</div>
                            <div className="mx-4 mb-4">
                                <button
                                    type="submit"
                                    className="submit group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-gray-500 group-hover:text-grayu-400" aria-hidden="true" />
                                    </span>
                                    <span style={{ marginRight: 10 }}> {this.props.loading ? <Spinner

                                        color="white"
                                        size={12}
                                        speed={1}
                                        animating={true} /> : null}</span>
                                    Confirm
                                </button></div>

                        </div>
                    </div></Form>

            </>
        );
    }
}

PlugApplication.defaultProps = {
    catergories: [],
};

const mapStateToProps = (state) => ({
    // auth: state.auth.isAuthenticated,
    // isAuthenticated: state.auth,
    // loading: state.auth.loading,
    createdPlugLoading: state.createdPlug,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, { suggestAVendorAction, setAlert })(
    PlugApplication
);
