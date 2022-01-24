import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { notification } from 'antd';
import { Menu, Dropdown, Button, Space } from 'antd';
import SearchHeader from './modules/SearchHeader';
import MiniCart from './modules/MiniCart';
import AccountQuickLinks from './modules/AccountQuickLinks';
import { logOut } from '../../../store/auth/action';
import { getCatergories } from '../../../actions/catergories';
import { LockClosedIcon } from '@heroicons/react/solid'
import '../../tailwind.scss'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../../components/tailwind.scss'
import { Spinner } from 'react-activity';
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
    ChartBarIcon,
    CursorClickIcon,
    DocumentReportIcon,
    RefreshIcon,
    ShieldCheckIcon,
    ViewGridIcon,
} from '@heroicons/react/outline'

class HeaderAutoPart extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        this.props.getCatergories();
        if (process.browser) {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll = () => {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (number >= 300) {
            document
                .getElementById('headerSticky')
                .classList.add('header--sticky');
        } else {
            document
                .getElementById('headerSticky')
                .classList.remove('header--sticky');
        }
    };

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        const solutions = [
            {
                name: 'Analytics',
                description: 'Get a better understanding of where your traffic is coming from.',
                href: '#',
                icon: ChartBarIcon,
            },
            {
                name: 'Engagement',
                description: 'Speak directly to your customers in a more meaningful way.',
                href: '#',
                icon: CursorClickIcon,
            },
            { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
            {
                name: 'Integrations',
                description: "Connect with third-party tools that you're already using.",
                href: '#',
                icon: ViewGridIcon,
            },
            {
                name: 'Automations',
                description: 'Build strategic funnels that will drive your customers to convert',
                href: '#',
                icon: RefreshIcon,
            },
            {
                name: 'Reports',
                description: 'Get detailed reports that will help you make more informed decisions',
                href: '#',
                icon: DocumentReportIcon,
            },
        ]

        function classNames(...classes) {
            return classes.filter(Boolean).join(' ')
        }

        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        2nd menu item
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        3rd menu item
                    </a>
                </Menu.Item>
            </Menu>
        );
        const menuAutopart = [
            {
                text: 'Home',
                url: '/',
                icon: (
                    <i
                        class="fa fa-home"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },
            {
                text: 'FAQs',
                url: '/faqs',
                icon: (
                    <i
                        class="fa fa-question-circle"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },
            {
                text: 'Suggest A Store',
                url: '/vendor/suggest-a-vendor',
                icon: (
                    <i
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}
                        class="fa fa-street-view"></i>
                ),
            },
            {
                text: 'Become A Vendor',
                url: '/vendor/become-a-vendor',
                icon: (
                    <i
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}
                        class="fa fa-street-view"></i>
                ),
            },

            {
                text: 'Invite A Friend',
                url: '/invite-a-friend',
                icon: (
                    <i
                        class="fa fa-user-plus"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },

            {
                text: 'Deals & Promotions',
                url: '/sale',
                icon: (
                    <i
                        class="fa fa-shopping-basket"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },
            {
                text: 'Stores',
                url: '/stores',
                icon: (
                    <i
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}
                        class="fa fa-street-view"></i>
                ),
            },
            {
                text: 'Contact Us',
                url: '/contact',
                icon: (
                    <i
                        class="fa fa-map-pin"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },

            {
                text: 'About Us',
                url: '/about-us',
                icon: (
                    <i
                        class="fa fa-info-circle"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'white',
                        }}></i>
                ),
            },
        ];

        const { auth } = this.props;
        return (
            <header
                className="header header--standard header--autopart"
                id="headerSticky">
                <div className="header__top">
                    <div className="container">
                        <div className="header__left">
                            <p style={{ fontSize: '12px' }}>
                                <strong>  Welcome to Suppl-i Online Shopping Mall !</strong>

                            </p>
                        </div>
                        <div className="header__right">
                            <ul className="header__top-links">
                                <li>
                                    <Link href="https://suppli-vendor.herokuapp.com/login">
                                        <a
                                            style={{ fontSize: '12px' }}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Vendor Login
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://sacoronavirus.co.za/">
                                        <a
                                            style={{ fontSize: '12px' }}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Covid 19 Safety
                                        </a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/">
                                        <a style={{ fontSize: '12px' }}>
                                            Track Your Order
                                        </a>
                                    </Link>
                                </li> */}
                                {/* <li>
                                <Link href="/page/blank">
                                        <a >About Us</a>
                                    </Link>
                                </li> */}
                                <li>
                                    {this.props.isLoggedIn &&
                                        this.props.isLoggedIn === true ? (
                                        <AccountQuickLinks isLoggedIn={true} />
                                    ) : (
                                        <AccountQuickLinks isLoggedIn={false} />
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__content">
                    <div className="container">
                        <div className="header__content-left">
                            <Link href="/">
                                <a className="">
                                    <img
                                        style={{
                                            height: '40px',
                                            width: '135px',
                                        }}
                                        src="/static/img/Suppli.png"
                                        alt="Suppl-i"
                                    />
                                </a>
                            </Link>
                            <div className="menu--product-categories">
                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            {/* <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900' : 'text-gray-700',
                                                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                )}
                                            >
                                                <span>Shop By Catergory</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-600' : 'text-gray-400',
                                                        'ml-2 h-5 w-5 group-hover:text-gray-500 transition ease-in-out duration-150'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button> */}
                                            <Dropdown overlay={<Menu>
                                                {this.props.categories &&
                                                    this.props.categories.map((cat) => (

                                                        <Menu.Item key="0">
                                                            <a href={`/category/${cat._id}`}>{cat.name}</a>
                                                        </Menu.Item>
                                                    ))}



                                            </Menu>}>
                                                <span className={classNames(
                                                    open ? 'text-gray-900' : 'text-gray-700',
                                                    'ml-2 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                )}>Shop By Catergory     <ChevronDownIcon
                                                        className={classNames(
                                                            open ? 'text-gray-700' : 'text-gray-700',
                                                            'ml-2 h-5 w-5 group-hover:text-gray-700 transition ease-in-out duration-150'
                                                        )}
                                                        aria-hidden="true"
                                                    /></span>
                                            </Dropdown>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 sm:px-0 lg:max-w-3xl"
                                                >
                                                    <div className="">
                                                        <ul className="menu--dropdown  z-17 ">
                                                            {this.props.categories &&
                                                                this.props.categories.map((cat) => (
                                                                    <li>
                                                                        <a
                                                                            href={`/category/${cat._id}`}>
                                                                            <a>{cat.name}</a>
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                                {/* <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                    <span>Shop By Category</span>
                                </div> */}

                            </div>
                        </div>
                        <div className="header__content-center">
                            <SearchHeader />
                        </div>
                        <div className="header__content-right">
                            <div className="header__actions">
                                <div className="ps-block--header-hotline">
                                    <div className="ps-block__left">
                                        <i className="icon-telephone"></i>
                                    </div>
                                    <div className="ps-block__right">
                                        <p>
                                            Tel
                                            <strong>
                                                <a href="tel:0665178403">066 517 8403</a>

                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <MiniCart />
                            </div>
                        </div>
                    </div>
                </div>
                <nav
                    className="navigation"
                    style={{ backgroundColor: '#62c4b0' }}>
                    <div className="container">
                        <ul
                            className=" menu--technology row"
                            style={{ marginTop: '6px', marginBottom: '6px' }}>
                            {menuAutopart.map((menuItem) => (
                                <li
                                    key={menuItem.text}
                                    style={{ marginRight: '35px' }}>
                                    <Link href={menuItem.url}>
                                        <>
                                            {' '}
                                            {menuItem.icon}
                                            <a
                                                style={{
                                                    color: 'white',
                                                    fontSize: '11px',
                                                }}
                                                href={menuItem.url}>
                                                {menuItem.text}
                                            </a>
                                        </>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = (state) => ({
    state,
    isLoggedIn: state.auth.isLoggedIn,
    categories: state.allCatergories.catergories,
});

export default connect(mapStateToProps, { getCatergories })(HeaderAutoPart);
