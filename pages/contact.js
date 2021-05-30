import React from 'react';

import FooterDefault from '../components/shared/footers/FooterMarketPlace2';
import HeaderDefault from '../components/shared/headers/HeaderMarketPlace';
import BreadCrumb from '../components/elements/BreadCrumb';
import ContactInfo from '../components/partials/page/ContactInfo';
import ContactForm from '../components/partials/page/ContactForm';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';

const ContactUsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Contact Us',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single" id="contact-us">
                <BreadCrumb breacrumb={breadCrumb} />
                {/* <ContactMap /> */}
                <ContactInfo />
                <ContactForm />
            </div>
            {/* <Newsletter layout="container" /> */}
            <FooterDefault />
        </div>
    );
};

export default ContactUsPage;
