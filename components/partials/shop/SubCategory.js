import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../elements/products/Product';
import ProductWide from '../../elements/products/ProductWide';
import ShopWidget from './modules/ShopWidget';
import { getSpecials } from '../../../actions/products';
import { getVendors } from '../../../actions/vendors';
import { getSubCategory } from '../../../actions/subCatergories';
import { Spin } from 'antd';
import Modal from 'react-modal'
// import { getVendors, getVendor } from './../../../../actions/vendors';
import '../../tailwind.scss'
import { Spinner } from 'react-activity';
class LayoutShopSidebarWithoutBanner extends Component {
    state = {
        listView: true,
    };

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };
    componentDidMount() {
        this.props.getSpecials();
        this.props.getVendors();
        this.props.getSubCategory(this.props.cid);
    }

    render() {
        const viewMode = this.state.listView;
        return (
            <>
                {' '}
                {this.props.subCatLoading && this.props.subCatLoading && (
                    <Modal style={{ zIndex: 99999 }} isOpen={true} ariaHideApp={false}
                        overlayClassName={`flex w-screen position-float fixed top-0 left-0 h-screen bg-opacity-50 bg-white z-50`}
                        className={`border-none m-auto select-none outline-none w-content z-50`}>
                        <Spinner
                            color="black"
                            size={32}
                            speed={1}
                            animating={true} /></Modal>
                )}{' '}
                <div className="ps-layout--shop">
                    <ShopWidget />
                    <div className="ps-layout__right">
                        <div className="ps-shopping">
                            <div className="ps-shopping__header">
                                <p>
                                    <strong>
                                        {' '}
                                        {this.props.subCat &&
                                            this.props.subCat.products &&
                                            this.props.subCat.products
                                            ? this.props.subCat.products.length
                                            : 0}
                                    </strong>{' '}
                                    Products found
                                </p>
                                <div className="ps-shopping__actions">
                                    {/* <select
                                    className="ps-select form-control"
                                    data-placeholder="Sort Items">
                                    <option>Sort by latest</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select> */}
                                    <div className="ps-shopping__view">
                                        <p>View</p>
                                        <ul className="ps-tab-list">
                                            <li
                                                className={
                                                    viewMode === true
                                                        ? 'active'
                                                        : ''
                                                }>
                                                <a
                                                    href="#"
                                                // onClick={
                                                //     this.handleChangeViewMode
                                                // }
                                                >
                                                    <i className="icon-grid"></i>
                                                </a>
                                            </li>
                                            {/* <li
                                            className={
                                                viewMode !== true
                                                    ? 'active'
                                                    : ''
                                            }>
                                            <a
                                                href="#"
                                                onClick={
                                                    this.handleChangeViewMode
                                                }>
                                                <i className="icon-list4"></i>
                                            </a>
                                        </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-shopping__content">
                                {viewMode === true ? (
                                    <div className="ps-shopping-product">
                                        <div className="row">
                                            {this.props.subCat &&
                                                this.props.subCat.products &&
                                                this.props.subCat.products.length >
                                                0
                                                ? this.props.subCat.products.map(
                                                    (item) => (
                                                        <div
                                                            className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 "
                                                            key={item.id}>
                                                            <Product
                                                                product={item}
                                                            />
                                                        </div>
                                                    )
                                                )
                                                : ''}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="ps-shopping-product">
                                        {this.props.products &&
                                            this.props.products.length > 0
                                            ? this.props.products.map(
                                                (item) => (
                                                    <ProductWide
                                                        product={item}
                                                        key={item.id}
                                                    />
                                                )
                                            )
                                            : ''}
                                    </div>
                                )}
                            </div>
                            {/* <div className="ps-shopping__footer">
                            <div className="ps-pagination">
                                <ul className="pagination">
                                    <li className="active">
                                        <a href="#">1</a>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Next Page
                                            <i className="icon-chevron-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    products: state.popularProducts.products,
    newArrivals: state.newArrivals.products,
    randomProducts: state.randomProducts.products,
    subCat: state.subCatergory.subCatergory,
    subCatLoading: state.subCatergory.loading,
    vendors: state.allVendors.vendors,
});

export default connect(mapStateToProps, {
    getSpecials,
    getVendors,
    getSubCategory,
})(LayoutShopSidebarWithoutBanner);
