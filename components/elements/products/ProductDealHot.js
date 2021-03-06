import React from 'react';
import { connect } from 'react-redux';
import CountDown from '../CountDown';
import { Rate, Progress } from 'antd';
import Rating from '../Rating';
import ThumbnailDealHot from '../detail/modules/thumbnail/ThumbnailDealHot';
import Link from 'next/link';

class ProductDealHot extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product, currency } = this.props;
        return (
            <div className="ps-product--detail ps-product--hot-deal">
                <div className="ps-product__header">
                    <ThumbnailDealHot product={product} />
                    <div className="ps-product__info">
                        <h5>Investor</h5>
                        <h3 className="ps-product__name">
                            <Link
                                href="/product/[pid]"
                                as={`/product/${product._id}`}>
                                {product.title}
                            </Link>
                        </h3>

                        <div className="ps-product__meta">
                            {product.sale === true ? (
                                <h4 className="ps-product__price sale">
                                    <del className="mr-2">
                                        {'R'}
                                        {product.salePrice.toFixed(2)}
                                    </del>
                                    {'R'}
                                    {product.price.toFixed(2)}
                                </h4>
                            ) : (
                                <h4 className="ps-product__price">
                                    {'R'}
                                    {product.price?.toFixed(2)}
                                </h4>
                            )}
                            <div className="ps-product__rating">
                                <Rating />
                                <span>(1 review)</span>
                            </div>
                            <div className="ps-product__specification">
                                <p>
                                    Status:
                                    <strong className="in-stock">
                                        In Stock
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div className="ps-product__expires">
                            <p>Expires In</p>
                            <CountDown
                                timeTillDate="12 31 2020, 6:00 am"
                                timeFormat="MM DD YYYY, h:mm a"
                            />
                        </div>
                        <div className="ps-product__processs-bar">
                            <Progress percent={60} showInfo={false} />
                            <p>
                                <strong>4/79</strong> Sold
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.setting;
};

export default connect(mapStateToProps)(ProductDealHot);
