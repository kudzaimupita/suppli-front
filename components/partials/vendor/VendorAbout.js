import React from 'react';
import { Image } from 'antd';
import Link from 'next/link';

const VendorAbout = () => (
    <div className="ps-section--vendor ps-vendor-about">
        <div className="container">
            <div className="ps-section__header">
                <p>WHY SELL ON SUPPL-I</p>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                {/* <Image
      width={155}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    /> */}
                                <img
                                    style={{ maxWidth: '155px' }}
                                    src="/static/img/icons/vendor-1.png"
                                    alt="Suppl-i"
                                />
                            </div>

                            <div className="ps-block__content">
                                <h4>Low Fees</h4>
                                <div
                                    className="ps-block__desc"
                                    data-mh="about-desc">
                                    <p>
                                     There are no signup
fees, no contracts and no listing fees. You only get
charges standard banking fees of 3% and a
transaction fee of 5% when an item is sold on
Suppl-i.

                                    </p>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                <img
                                    style={{ maxWidth: '150px' }}
                                    src="/static/img/icons/vendor-2.png"
                                    alt="Suppl-i"
                                />
                            </div>
                            <div className="ps-block__content">
                                <h4>Powerful Tools</h4>
                                <div
                                    className="ps-block__desc"
                                    data-mh="about-desc">
                                    <p>
                                 Our tools and services make
it easy to manage, promote and grow your
business. You get your own dashboard to manage
and monitor your online store.

                                    </p>
                                </div>
                         
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div
                                className="ps-block__thumbnail"
                                style={{ height: '100px' }}>
                                <img
                                    style={{ maxWidth: '155px' }}
                                    src="/static/img/call.png"
                                    alt="Suppl-i"
                                />
                            </div>
                            <div className="ps-block__content">
                                <h4>Support 24/7</h4>
                                <div
                                    className="ps-block__desc"
                                    data-mh="about-desc">
                                    <p>
                                        We offer 24/7 support to all our vendors
                                        and merchants.
                                    </p>
                                </div>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default VendorAbout;
