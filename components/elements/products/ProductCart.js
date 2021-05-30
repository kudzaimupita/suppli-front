import React from 'react';
import Link from 'next/link';
const ProductCart = ({ product }) => {
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product._id}`}>
                    <a>
                        <img
                            src={`https://suppli-api.herokuapp.com/img/products/${
                                product.imageCover && product.imageCover
                            }`}
                            alt="Suppl-i"
                        />
                    </a>
                </Link>
            </div>
            <div className="ps-product__content">
                <Link href="/product/[pid]" as={`/product/${product._id}`}>
                    <a className="ps-product__title">{product.name}</a>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;
