import React, { useState } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { joinNewsletterAction } from './../../../actions/newsletter';

// const alerts = useSelector((state) => state.alert);

// console.log(email);
const FooterTechnology = () => {
    const dispatch = useDispatch();
    const handleEmailChange = (email) => {
        setEmail(email);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(joinNewsletterAction({ email: email }));
        setEmail('');
    };
    const [email, setEmail] = useState('');
    console.log(email);
    return (
        <footer
            className="ps-footer ps-footer--2 ps-footer--technology"
            style={{ backgroundColor: '#383838' }}>
            <div className="container">
                <div className="ps-footer__content">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <aside className="widget widget_footer">
                                        <h4
                                            className="widget-title"
                                            style={{ color: 'white' }}>
                                            Quick links
                                        </h4>
                                        {/* <hr style={{backgroundColor:'white'}}/> */}
                                        <ul className="ps-list--link">
                                            <li>
                                                <Link href="/privacy-policy">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        Privacy Policy
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/terms-of-use">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        Term Of Use
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/vendor/vendor-terms-of-use">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        Vendor Terms Of Use
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/returns-policy">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        Returns
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shipping-policy">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        Delivery Policy
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <aside className="widget widget_footer">
                                        <h4
                                            className="widget-title"
                                            style={{ color: 'white' }}>
                                            Company
                                        </h4>
                                        {/* <hr style={{backgroundColor:'white'}}/> */}
                                        <ul className="ps-list--link">
                                            <li>
                                                <Link href="/about-us">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        About Us
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/invite-a-friend">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        Invite A Friend
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/vendor/suggest-a-vendor">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        Suggest A Store
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        Contact
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <aside className="widget widget_footer">
                                        <h4
                                            className="widget-title"
                                            style={{ color: 'white' }}>
                                            Business
                                        </h4>
                                        {/* <hr style={{backgroundColor:'white'}}/> */}
                                        <ul className="ps-list--link">
                                            <li>
                                                <Link href="/vendor/become-a-vendor">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        Become A Vendor
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/faqs">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        FAQs
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/sale">
                                                    <a
                                                        style={{
                                                            color: 'white',
                                                        }}>
                                                        Specials
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <aside className="widget widget_newletters">
                                <h4
                                    className="widget-title"
                                    style={{ color: 'white' }}>
                                    Subscribe To Our Newsletter
                                </h4>

                                <form
                                    className="ps-form--newletter"
                                    action="#"
                                    method="get">
                                    <div className="form-group--nest">
                                        <input
                                            className="form-control"
                                            type="text"
                                            required
                                            placeholder="Email Address"
                                            onChange={(e) =>
                                                handleEmailChange(
                                                    e.target.value
                                                )
                                            }
                                            value={email}
                                        />
                                        <button
                                            onClick={(e) => onSubmit(e)}
                                            className="ps-btn"
                                            style={{
                                                backgroundColor: '#62c4b0',
                                            }}>
                                            Subscribe
                                        </button>
                                    </div>
                                    <h4
                                        className="widget-title"
                                        style={{ color: 'white' }}>
                                        Follow Us On Social Media
                                    </h4>
                                    <ul className="ps-list--social">
                                        <li>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="facebook"
                                                href="https://www.facebook.com/supplishopping ">
                                                <i
                                                    className="fa fa-facebook"
                                                    style={{
                                                        fontSize: '30px',
                                                    }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="twitter"
                                                href="https://www.linkedin.com/company/54092343/">
                                                <i
                                                    className="fa fa-linkedin"
                                                    style={{
                                                        fontSize: '30px',
                                                    }}></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="instagram"
                                                href="https://www.instagram.com/suppli_sa/">
                                                <i
                                                    className="fa fa-instagram"
                                                    style={{
                                                        fontSize: '30px',
                                                    }}></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                // className="youtube"
                                                href="https://www.youtube.com/channel/UCJPu-4Z9qDwheU9j0Dj40sg">
                                                <i
                                                    className="fa fa-youtube"
                                                    style={{
                                                        fontSize: '30px',
                                                        color: 'red',
                                                    }}></i>
                                            </a>
                                        </li>
                                    </ul>
                                </form>
                            </aside>
                        </div>
                    </div>
                </div>
                <div className="ps-footer__copyright">
                    <p style={{ color: 'white' }}>
                        © Online Selling Services (Pty) Ltd t/a Suppl-i
                    </p>
                    <p style={{ color: 'white' }}>
                        <span>Secure Payments:</span>

                        <a>
                            <img
                                style={{ height: '25px', width: '120px' }}
                                src="/static/img/payment-method/1.png"
                                alt="Suppl-i"
                            />
                        </a>

                        <a>
                            <img
                                style={{ height: '40px', width: '130px' }}
                                src="/static/img/payment-method/mastercard.png"
                                alt="Suppl-i"
                            />
                        </a>

                        <a>
                            <img
                                style={{ height: '40px', width: '40px' }}
                                src="/static/img/payment-method/2.png"
                                alt="Suppl-i"
                            />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterTechnology;
