import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { searchProducts } from '../../../actions/products';

class PanelSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPanel: false,
            searchProducts: [],
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
                keyword: e.target.value,
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const keyword = this.state.keyword;
        Router.push(`/search${keyword}`);
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
        console.log(this.props.isVisible);
        return (
            <div className="ps-panel__wrapper">
                <div className="ps-panel__header">
                    <form
                        className="ps-form--search-mobile"
                        action="/"
                        method="get">
                        <div className="form-group--nest">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search something..."
                                onChange={this.handleSearch.bind(this)}
                            />
                            {/* <Link
                                href="/search/[q]"
                                as={`/search/${this.state.keyword}`}>
                                <button>
                                    <i className="icon-magnifier"></i>
                                </button>
                            </Link> */}
                            <Link
                                href="/search/[q]"
                                as={`/search/${this.state.keyword}`}>
                                <button
                                    onClick={() => this.props.isVisible()}
                                    style={{
                                        backgroundColor: '#051821',
                                        color: 'white',
                                    }}>
                                    <i className="icon-magnifier"></i>
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="navigation__content"></div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { searchProducts })(PanelSearch);
