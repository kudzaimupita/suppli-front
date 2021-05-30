import React from 'react';
import Link from 'next/link';
import { sameBrands } from '../../../public/static/data/product';
import Product from '../../../components/elements/products/Product';

const ProductWidgets = () => (
    <section>
        <aside className="widget widget_product widget_features">
            <p>
                <i className="icon-network"></i> Fast shipping
            </p>
            <p>
                <i className="icon-3d-rotate"></i> Return if eligible, so easy.
            </p>
            <p>
                <i className="icon-receipt"></i> Track invoices.
            </p>
            <p>
                <i className="icon-credit-card"></i> Pay online securely.
            </p>
        </aside>
        <p>
            <i className="icon-store"></i>
            <Link href="/vendor/become-a-vendor">
                <a> Sell on Suppl-i now!</a>
            </Link>
        </p>
        {/* <aside className="widget widget_sell-on-site"></aside> */}
        {/* <aside className="widget widget_ads">
            <Link href="/shop">
                <a>
                    <img src="/static/img/ads/product-ads.png" alt="Suppl-i" />
                </a>
            </Link>
        </aside> */}
        {/* <aside className="widget widget_same-brand">
            <h3>Same Brand</h3>
            <div className="widget__content">
                {sameBrands &&
                    sameBrands.map(product => (
                        <Product product={product} key={product.id} />
                    ))}
            </div>
        </aside> */}
    </section>
);

export default ProductWidgets;
