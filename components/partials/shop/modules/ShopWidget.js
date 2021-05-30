import React, { Component } from 'react';
import Router from 'next/router';
import { Slider, Checkbox } from 'antd';
import Link from 'next/link';
import { connect } from 'react-redux';
import {
    getProductsByPrice,
    getProductsByBrands,
} from '../../../../store/product/action';

import { getVendors } from '../../../../actions/vendors';
import { getCatergories } from '../../../../actions/catergories';

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

        return (
            <div className="ps-layout__left">
                <aside className="widget widget_shop">
                    <h4 className="widget-title">Shop By Store</h4>
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
                    </ul>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.popularProducts.products,
    newArrivals: state.newArrivals.products,
    randomProducts: state.randomProducts.products,
    vendors: state.allVendors.vendors,
    categories: state.allCatergories.catergories,
});
export default connect(mapStateToProps, { getVendors, getCatergories })(
    ShopWidget
);
