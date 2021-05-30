import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

import FooterDefault from '../../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../../components/shared/headers/HeaderMarketPlace';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import ProductDetailBox from '../../components/elements/detail/ProductDetailBox';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';
import RelatedProductFullwidth from '../../components/partials/product/RelatedProductFullwidth';

const ProductDefaultPage = () => {
    const router = useRouter();
    const { pid } = router.query;
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },

        {
            text: 'Detail',
        },
    ];

    // useEffect(() => {
    //     if (isNaN(pid)) {
    //         Router.push('/page/page-404');
    //     }
    // });

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <BreadCrumb breacrumb={breadCrumb} />
            <div className="ps-page--product ps-page--product-box">
                <div className="container">
                    <ProductDetailBox pid={pid} />
                    {/* <CustomerBought boxed={true} /> */}
                    {/* <RelatedProduct boxed={true} /> */}
                </div>
            </div>
            {/* <Newletters /> */}
            <FooterDefault />
        </div>
    );
};

export default ProductDefaultPage;
