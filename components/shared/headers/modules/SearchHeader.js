import React, { Component } from 'react';
import { Select, Input } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';

import ProductResult from '../../../elements/products/ProductSearchResult';
import { products } from '../../../../public/static/data/product';
import { searchProducts } from '../../../../actions/products';

const { Option } = Select;
const { Search } = Input;
class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPanel: false,
            searchProducts: products,
            keyword: '',
        };
    }

    searchByProductName = (keyword, object) => {
        let matches = [];
        let regexp = new RegExp(keyword.toLowerCase(), 'g');

        object.forEach((product) => {
            if (product.title.toLowerCase().match(regexp))
                matches.push(product);
        });

        return matches;
    };

    handleSearch(e) {
        if (e.target.value !== '') {
            this.props.searchProducts(e.target.value);
            this.setState({
                searchPanel: true,
                keyword: e.target.value,
                searchProducts: this.searchByProductName(
                    e.target.value,
                    products
                ),
            });
        } else {
            this.setState({ searchPanel: false, searchProducts: [] });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const keyword = this.state.keyword;
        Router.push(`/search?keyword=${keyword}`);
        if (e.target.value !== '') {
            this.props.searchProducts(e.target.value);
            this.setState({
                searchPanel: true,
                keyword: e.target.value,
                searchProducts: this.searchByProductName(
                    e.target.value,
                    products
                ),
            });
        }
    }

    render() {
        const { searchPanel, searchProducts } = this.state;
        const productCategories = [
            {
                icon: 'icon-star',
                text: 'Hot Promotions',
                url: '/shop',
            },
            {
                icon: 'icon-laundry',
                text: 'Consumer Electronic',
                url: '/shop',
                extraClass: 'menu-item-has-children has-mega-menu',
                subClass: 'sub-menu',
                mega: true,
            },
            {
                icon: 'icon-shirt',
                text: 'Clothing & Apparel',
                url: '/shop',
            },
            {
                icon: 'icon-lampshade',
                text: 'Home, Garden & Kitchen',
                url: '/shop',
            },
            {
                icon: 'icon-heart-pulse',
                text: 'Health & Beauty',
                url: '/shop',
            },
            {
                icon: 'icon-diamond2',
                text: 'Yewelry & Watches',
                url: '/shop',
            },
            {
                icon: 'icon-desktop',
                text: 'Computer & Technology',
                url: '/shop',
                extraClass: 'menu-item-has-children has-mega-menu',
                subClass: 'sub-menu',
            },
            {
                icon: 'icon-baby-bottle',
                text: 'Babies & Moms',
                url: '/shop',
            },
            {
                icon: 'icon-baseball',
                text: 'Sport & Outdoor',
                url: '/shop',
            },
            {
                icon: 'icon-smartphone',
                text: 'Phones & Accessories',
                url: '/shop',
            },
            {
                icon: 'icon-book2',
                text: 'Books & Office',
                url: '/shop',
            },
            {
                icon: 'icon-car-siren',
                text: 'Cars & Motocycles',
                url: '/shop',
            },
            {
                icon: 'icon-wrench',
                text: 'Home Improments',
                url: '/shop',
            },
            {
                icon: 'icon-tag',
                text: 'Vouchers & Services',
                url: '/shop',
            },
        ];
        const exampleCategories = [
            'All',
            'Babies & Moms',
            'Books & Office',
            'Cars & Motocycles',
            'Clothing & Apparel',
            ' Accessories',
            'Bags',
            'Kid’s Fashion',
            'Mens',
            'Shoes',
            'Sunglasses',
            'Womens',
            'Computers & Technologies',
            'Desktop PC',
            'Laptop',
            'Smartphones',
            'Consumer Electrics',
            'Air Conditioners',
            'Accessories',
            'Type Hanging Cell',
            'Audios & Theaters',
            'Headphone',
            'Home Theater System',
            'Speakers',
            'Car Electronics',
            'Audio & Video',
            'Car Security',
            'Radar Detector',
            'Vehicle GPS',
            'Office Electronics',
            'Printers',
            'Projectors',
            'Scanners',
            'Store & Business',
            'Refrigerators',
            'TV Televisions',
            '4K Ultra HD TVs',
            'LED TVs',
            'OLED TVs',
            'Washing Machines',
            'Type Drying Clothes',
            'Type Horizontal',
            'Type Vertical',
            'Garden & Kitchen',
            'Cookware',
            'Decoration',
            'Furniture',
            'Garden Tools',
            'Home Improvement',
            'Powers And Hand Tools',
            'Utensil & Gadget',
            'Health & Beauty',
            'Equipments',
            'Hair Care',
            'Perfumer',
            'Wine Cabinets',
        ];
        return (
            <form
                className="ps-form--quick-search"
                method="get"
                action="/"
                onSubmit={this.handleSubmit.bind(this)}>
                {/* <Select defaultValue="Categories" style={{ width: 180 }}>
                    {productCategories.map(option => (
                        <Option value={option.text} key={option.text}>
                            {option.text}
                        </Option>
                    ))}
                </Select>*/}
                {/* <div className="ps-form__categories">
                    <select className="form-control">
                        {exampleCategories.map((option) => (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div> */}
                <Input
                    allowClear
                    className="form-control"
                    type="text"
                    placeholder="I'm shopping for..."
                    // onChange={(e) => this.props.searchProducts(e.target.value)}
                    onChange={this.handleSearch.bind(this)}
                />
                <Link href="/search/[q]" as={`/search/${this.state.keyword}`}>
                    <button
                        style={{ backgroundColor: '#051821', color: 'white' }}>
                        Search
                    </button>
                </Link>

                <div
                    className={`ps-panel--search-result${
                        searchPanel && searchPanel === true ? ' active ' : ''
                    }`}>
                    <div className="ps-panel__content">
                        {this.props.products &&
                        this.props.products.length > 0 ? (
                            this.props.products.map((product) => (
                                <ProductResult
                                    product={product}
                                    key={product._id}
                                />
                            ))
                        ) : (
                            <span>
                                Not found! Try with another keyword or complete
                                word.
                            </span>
                        )}
                    </div>
                    <div className="ps-panel__footer text-center">
                        <Link
                            href="/search/[q]"
                            as={`/search/${this.state.keyword}`}>
                            <a>See all results</a>
                        </Link>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.searchedProducts.products,
});

export default connect(mapStateToProps, { searchProducts })(SearchHeader);
