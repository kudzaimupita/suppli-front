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
const VendorAbout = () => (
    <div className="ps-section--vendor ps-vendor-about">
        {/* <div className="container">
            <div className="ps-section__header">
                <p>WHY SELL ON SUPPL-I</p>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">

                                <img
                                    style={{ maxWidth: '155px', right: '150px', alignContent: 'center' }}
                                    src="/static/img/icons/vendor-1.png"
                                    alt="Suppl-i"
                                />
                            </div>

                            <div className="ps-block__content">
                                <h4>Low Fees</h4>
                                <div
                                    className="ps-block__desc"
                                    data-mh="about-desc">
                                    <p>
                                        There are no signup
                                        fees, no contracts and no listing fees. You only get
                                        charges standard banking fees of 3% and a
                                        transaction fee of 5% when an item is sold on
                                        Suppl-i.

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                <img
                                    style={{ maxWidth: '150px' }}
                                    src="/static/img/icons/vendor-2.png"
                                    alt="Suppl-i"
                                />
                            </div>
                            <div className="ps-block__content">
                                <h4>Powerful Tools</h4>
                                <div
                                    className="ps-block__desc"
                                    data-mh="about-desc">
                                    <p>
                                        Our tools and services make
                                        it easy to manage, promote and grow your
                                        business. You get your own dashboard to manage
                                        and monitor your online store.

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div
                                className="ps-block__thumbnail"
                                style={{ height: '100px' }}>
                                <img
                                    style={{ maxWidth: '155px' }}
                                    src="/static/img/call.png"
                                    alt="Suppl-i"
                                />
                            </div>
                            <div className="ps-block__content">
                                <h4>Support 24/7</h4>
                                <div
                                    className="ps-block__desc"
                                    data-mh="about-desc">
                                    <p>
                                        We offer 24/7 support to all our vendors
                                        and merchants.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
);

export default VendorAbout;
