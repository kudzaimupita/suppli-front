import React from 'react';
import Router, { useRouter } from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../../components/shared/headers/HeaderMarketPlace';
import Newletters from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import SearchResult from '../../components/partials/shop/SearchResult';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const SearchResultsPage = () => {
    const router = useRouter();
    const { q } = router.query;
    console.log(q);
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Search Results',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <BreadCrumb breacrumb={breadCrumb} />
            <div className="ps-page--shop" id="shop-sidebar">
                <div className="container">
                    <SearchResult q={q} />
                </div>
            </div>
            {/* <Newletters layout="container" /> */}
            <FooterDefault />
        </div>
    );
};

export default SearchResultsPage;
