import React from 'react';

import DefaultDescription from './modules/description/DefaultDescription';
import ThumbnailQuickView from './modules/thumbnail/ThumbnailQuickView';
import InformationQuickView from './modules/information/InformationQuickView';

const ProductDetailQuickView = ({ product }) => (
    <div className="ps-product--detail ps-product--quickview">
        <div className="ps-product__header">
            {product && <ThumbnailQuickView product={product} />}
            {product && <InformationQuickView product={product} />}
        </div>
    </div>
);

export default ProductDetailQuickView;
