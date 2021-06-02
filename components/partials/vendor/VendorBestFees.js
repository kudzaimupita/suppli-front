import React from 'react';

const VendorBestFrees = () => (
    <div className="ps-section--vendor ps-vendor-best-fees">
        <div className="container">
            <div className="ps-section__header">
                <p>BEST FEES TO START</p>
                <h4>Affordable, transparent, and secure</h4>
            </div>
            <div className="ps-section__content">
                <h5>
                    It doesn’t cost a thing to list your products
and get your own e-store. You only pay the transaction fees
once a sale is made.
                </h5>
                <div className="ps-section__numbers">
                    <figure>
                        <h3>3%</h3>
                        <span>Bank Fee</span>
                    </figure>
                    <figure>
                        <h3>5%</h3>
                        <span>Transaction Fee</span>
                    </figure>
                </div>
                <div className="ps-section__desc">
                    <figure>
                        <figcaption>
                            Here's what you get for your fee:
                        </figcaption>
                        <ul>
                            <li>
                             Access to online shoppers and consumers across South Africa.
                            </li>
                            <li>
                           An online store to list, sell and advertise your products.

                            </li>
                            <li>
                             Logistics support so you don’t have to worry about managing your
deliveries.
                            </li>
                        </ul>
                    </figure>
                </div>
                <div className="ps-section__highlight">
                      <img
                                style={{ height: '25px', width: '120px' }}
                                src="/static/img/payment-method/1.png"
                                alt="Suppl-i"
                            />
                    <figure>
                        <p>
                          We process payment with Peach Payments, an external
payment platform that allows us to process a variety of payment
methods. Funds paid to Suppl-i for your goods will be paid forward
directly to your business account, less the transaction fees.
                        </p>
                    </figure>
                </div>
                <div className="ps-section__footer">
                
                </div>
            </div>
        </div>
    </div>
);

export default VendorBestFrees;
