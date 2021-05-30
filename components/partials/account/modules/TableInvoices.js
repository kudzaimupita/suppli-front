import React, { Component } from 'react';
import { Table, Tag, Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import Link from 'next/link';
import ProductCart from '../../../elements/products/ProductCart';

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);
class TableInvoices extends Component {
    state = { visible: false, order: {} };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    handleOpen = (order) => {
        this.setState({
            order: order,
        });
        this.showDrawer();
    };

    render() {
        const invoiceProducts = [
            {
                id: '6',
                thumbnail: '/static/img/products/shop/5.jpg',
                title: 'Grand Slam Indoor Of Show Jumping Novel',
                vendor: "Robert's Store",
                sale: true,
                price: '32.99',
                salePrice: '41.00',
                rating: true,
                ratingCount: '4',
                badge: [
                    {
                        type: 'sale',
                        value: '-37%',
                    },
                ],
            },
            {
                id: '7',
                thumbnail: '/static/img/products/shop/6.jpg',
                title: 'Sound Intone I65 Earphone White Version',
                vendor: 'Youngshop',
                sale: true,
                price: '100.99',
                salePrice: '106.00',
                rating: true,
                ratingCount: '5',
                badge: [
                    {
                        type: 'sale',
                        value: '-5%',
                    },
                ],
            },
        ];
        /*
            You can change data by API
            example: https://ant.design/components/table/
        */
        const tableData = [
            {
                id: '1',
                invoiceId: '500884010',
                title: 'Marshall Kilburn Portable Wireless Speaker',
                dateCreate: '20-1-2020',
                amount: '42.99',
                status: 'Successful delivery',
            },
            {
                id: '2',
                invoiceId: '593347935',
                title: 'Herschel Leather Duffle Bag In Brown Color',
                dateCreate: '20-1-2020',
                amount: '199.99',
                status: 'Cancel',
            },
            {
                id: '3',
                invoiceId: '593347935',
                title: 'Xbox One Wireless Controller Black Color',
                dateCreate: '20-1-2020',
                amount: '199.99',
                status: 'Cancel',
            },
            {
                id: '4',
                invoiceId: '615397400',
                title: 'Grand Slam Indoor Of Show Jumping Novel',
                dateCreate: '20-1-2020',
                amount: '41.00',
                status: 'Cancel',
            },
        ];
        const tableColumn = [
            {
                title: 'Order #',
                dataIndex: 'orderID',

                key: 'orderID',
                width: '120px',
                render: (text) => <a>{text}</a>,
            },
            {
                title: 'totalPrice',
                dataIndex: 'totalPrice',

                key: 'totalPrice',
                render: (text) => <a>R {text}</a>,
            },
            {
                title: 'Date',

                dataIndex: 'createdOn',
                key: 'createdOn',
                width: '120px',
                render: (text) => <a>{text.slice(0, 10)}</a>,
            },
            {
                title: 'Method',

                dataIndex: 'paymentMethod',
                key: 'paymentMethod',
                width: '120px',
                render: (text) => (
                    <a>
                        <i class="fa fa-credit-card"></i>
                    </a>
                ),
            },
            {
                title: 'Status',
                rowKey: 'status',
                dataIndex: 'status',
                key: 'status',
                render: (text) => <a>{text}</a>,
            },
            {
                title: 'View Products',
                key: 'status',
                dataIndex: 'status',
                rowKey: 'status',
                width: '150px',
                render: (text, record) => (
                    <a
                        onClick={() => this.handleOpen(record)}
                        className="text-right">
                        <i class="fa fa-eye"></i>
                    </a>
                ),
            },
        ];
        console.log(this.state);
        return (
            <>
                <Table
                    columns={tableColumn}
                    dataSource={
                        this.props.orders && Array.from(this.props.orders)
                    }
                    rowKey={(record) => record._id}
                />{' '}
                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}>
                    <div className="col-lg-12">
                        <div className="ps-page__content">
                            <div className="ps-section--account-setting">
                                <div className="ps-section__header">
                                    <h3>
                                        Invoice #
                                        {this.state.order.orderID &&
                                            this.state.order.orderID}{' '}
                                        -
                                        <strong>
                                            {this.state.order.status &&
                                                this.state.order.status}
                                        </strong>
                                    </h3>
                                </div>
                                <div className="ps-section__content">
                                    <div className="row">
                                        <div className="col-md-4 col-12">
                                            <figure className="ps-block--invoice">
                                                <figcaption>Address</figcaption>
                                                <div className="ps-block__content">
                                                    <strong>
                                                        {' '}
                                                        {this.state.order
                                                            .status &&
                                                            this.state.order
                                                                .status}
                                                    </strong>
                                                    <p>
                                                        Address:{' '}
                                                        {this.state.order
                                                            .shippingAddress &&
                                                            this.state.order
                                                                .shippingAddress &&
                                                            this.state.order
                                                                .shippingAddress
                                                                .address}
                                                        ,{' '}
                                                        {this.state.order
                                                            .shippingAddress &&
                                                            this.state.order
                                                                .shippingAddress &&
                                                            this.state.order
                                                                .shippingAddress
                                                                .city}
                                                        ,{' '}
                                                        {this.state.order
                                                            .shippingAddress &&
                                                            this.state.order
                                                                .shippingAddress &&
                                                            this.state.order
                                                                .shippingAddress
                                                                .postalCode}
                                                    </p>
                                                    <p>
                                                        Phone:{' '}
                                                        {this.state.order
                                                            .phone &&
                                                            this.state.order
                                                                .phone}
                                                    </p>
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            {/* <figure className="ps-block--invoice">
                                                <figcaption>
                                                    Shipping Fee
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    <p>Shipping Fee: Free</p>
                                                </div>
                                            </figure> */}
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <figure className="ps-block--invoice">
                                                <figcaption>Payment</figcaption>
                                                <div className="ps-block__content">
                                                    <p>
                                                        Payment Method:{' '}
                                                        {this.state.order
                                                            .paymentMethod &&
                                                            this.state.order
                                                                .paymentMethod}
                                                    </p>
                                                    <p>
                                                        {' '}
                                                        R
                                                        {this.state.order
                                                            .totalPrice &&
                                                            this.state.order
                                                                .totalPrice}
                                                    </p>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table ps-table--shopping-cart">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.order
                                                    .boughtProducts &&
                                                    this.state.order.boughtProducts.map(
                                                        (product) => (
                                                            <tr
                                                                key={
                                                                    product._id
                                                                }>
                                                                <td>
                                                                    <ProductCart
                                                                        product={
                                                                            product
                                                                        }
                                                                    />
                                                                </td>
                                                                <td className="price">
                                                                    R
                                                                    {
                                                                        product.price
                                                                    }
                                                                </td>

                                                                <td>
                                                                    x{' '}
                                                                    {product.quantity &&
                                                                        product.quantity}
                                                                </td>
                                                                <td className="price">
                                                                    R
                                                                    {product.price *
                                                                        product.quantity}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <Link href="/account/invoices">
                                        <a
                                            onClick={this.onClose}
                                            className="ps-btn ps-btn--sm "
                                            style={{ color: 'white' }}>
                                            Close
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </>
        );
    }
}

export default TableInvoices;
