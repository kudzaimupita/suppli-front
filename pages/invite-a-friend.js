import React from 'react';

import FooterDefault from '../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import BreadCrumb from '../components/elements/BreadCrumb';
import InviteAFriend from '../components/partials/account/inviteAFriend';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';

const InviteAFriendPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Invite A Friend',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <InviteAFriend />
            </div>
            <FooterDefault />
        </div>
    );
};

export default InviteAFriendPage;
