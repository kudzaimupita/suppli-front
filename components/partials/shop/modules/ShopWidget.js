import React, { Component } from 'react';
import Router from 'next/router';
import { Slider, Checkbox } from 'antd';
import Link from 'next/link';
import { connect } from 'react-redux';
import {
    getProductsByPrice,
    getProductsByBrands,
} from '../../../../store/product/action';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, ShoppingBagIcon, EyeIcon, ArrowRightIcon } from '@heroicons/react/outline'
import Modal from 'react-modal'
// import { getVendors, getVendor } from './../../../../actions/vendors';
import '../../../tailwind.scss'
import { Spinner } from 'react-activity';
import { getVendors } from '../../../../actions/vendors';
import { getCatergories } from '../../../../actions/catergories';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
class ShopWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceMin: 0,
            priceMax: 2000,
        };
    }

    handleChangeRange(value) {
        this.setState({
            priceMin: value[0],
            priceMax: value[1],
        });
        this.props.dispatch(getProductsByPrice(value));
    }
    componentDidMount() {
        this.props.getVendors();
        this.props.getCatergories();
    }

    // handleFilterByBrand(value) {
    //     Router.push({ pathname: '/shop', query: { brand: value } });
    // }

    render() {
        /* You can get categories from your API using redux */
        const navigation = [
            { name: 'Dashboard', href: '#', icon: HomeIcon, current: true, count: '5' },
            { name: 'Team', href: '#', icon: UsersIcon, current: false },
            { name: 'Projects', href: '#', icon: FolderIcon, current: false, count: '19' },
            { name: 'Calendar', href: '#', icon: CalendarIcon, current: false, count: '20+' },
            { name: 'Documents', href: '#', icon: InboxIcon, current: false },
            { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
        ]

        function classNames(...classes) {
            return classes.filter(Boolean).join(' ')
        }
        return (
            <>
                {this.props.loading && this.props.loading && (
                    <Modal style={{ zIndex: 99999 }} isOpen={true} ariaHideApp={false}
                        overlayClassName={`flex w-screen position-float fixed top-0 left-0 h-screen bg-opacity-50 bg-white z-50`}
                        className={`border-none m-auto select-none outline-none w-content z-50`}>
                        <Spinner
                            color="black"
                            size={32}
                            speed={1}
                            animating={true} /></Modal>
                )}
                <div className="ps-layout__left">
                    <div className="bg-white py-5 border-b border-gray-200 sm:px-6 ">
                        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                            <div className="ml-4 ">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-12 w-12 rounded-lg"
                                            src="/static/img/555.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Stores</h3>
                                        {/* <p className="text-sm text-gray-500">
                                        <a href="#">@tom_cook</a>
                                    </p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="ml-2 my-3 mt-1 flex-shrink-0 flex">
                                <button
                                    type="button"
                                    className="relative inline-flex items-center px-1 py-2 border border-gray-300 shadow-xs text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >

                                    <span>View All</span>  <ArrowRightIcon className="ml-2 mr-2 h-4 w-4 text-gray-400" aria-hidden="true" />

                                </button>

                            </div>
                        </div>
                    </div>
                    <aside className="widget widget_shop">
                        {/* <h4 className="widget-title">Shop By Store</h4>
                    <ul className="ps-list--categories">
                        {this.props.vendors &&
                            this.props.vendors.map((vendor) => (
                                <li key={vendor.name}>
                                    <Link
                                        href="/vendor/[vid]"
                                        as={`/vendor/${vendor._id}`}>
                                        <a className="ps-product__title">
                                            {vendor.name}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                    </ul> */}

                        <nav className="space-y-1" aria-label="Sidebar">
                            {this.props.vendors &&
                                this.props.vendors.slice(0, 12).map((item) => (
                                    <a
                                        key={item.name}
                                        href={`/vendor/${item._id}`}
                                        className={classNames(
                                            item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                            'flex items-center px-3 py-2 text-sm font-medium rounded-md'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {/* <ShoppingBagIcon
                                        className={classNames(item.current ? 'text-gray-500' : 'text-gray-400', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6')}
                                        aria-hidden="true"
                                    /> */}
                                        <img
                                            className='h-5 w-5 rounded-lg mr-3'
                                            src={`https://suppli-images.s3.af-south-1.amazonaws.com/${item.logo}`}
                                            alt="Suppl-i"
                                        />

                                        <span className="truncate">{item.name}</span>


                                        {item?.products?.length ? (
                                            <span
                                                className={classNames(
                                                    item.current ? 'bg-gray-100' : 'bg-green-200 text-green-900',
                                                    'ml-auto inline-block py-0.5 px-1 text-xs rounded-full'
                                                )}
                                            >
                                                {item?.products?.length}
                                            </span>
                                        ) : null}
                                    </a>
                                ))}
                        </nav>
                    </aside>
                    <aside className="widget widget_shop">
                        <h4 className="widget-title">Categories</h4>
                        <figure>
                            <ul className="menu--dropdown">
                                {this.props.categories &&
                                    this.props.categories.map((cat) => (
                                        <li>
                                            <Link
                                                href="/category/[cid]"
                                                as={`/category/${cat._id}`}>
                                                <a>{cat.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </figure>
                        {/* <figure>
                        <h4 className="widget-title">By Price</h4>
                        <Slider
                            range
                            defaultValue={[0, 2000]}
                            max={2000}
                            onAfterChange={this.handleChangeRange.bind(this)}
                        />
                        <p>
                            Price: R{this.state.priceMin} - R
                            {this.state.priceMax}
                        </p>
                    </figure> */}
                    </aside>
                </div></>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.popularProducts.products,
    newArrivals: state.newArrivals.products,
    randomProducts: state.randomProducts.products,
    vendors: state.allVendors.vendors,
    categories: state.allCatergories.catergories,
    loading: state.allVendors.loading,
});
export default connect(mapStateToProps, { getVendors, getCatergories })(
    ShopWidget
);
