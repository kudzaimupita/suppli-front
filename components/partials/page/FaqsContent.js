import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Nav,
    NavLink,
    TabContent,
    TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import { Collapse } from 'antd';

//Import Components

const { Panel } = Collapse;

class FAQs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
        };
        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    render() {
        const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
        return (
            <React.Fragment>
                <section className="section" id="faqs">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="text-center mb-5">
                                    <div className="small-title">FAQs</div>
                                    <h4>Frequently asked questions</h4>
                                </div>
                            </Col>
                        </Row>
                        <h4>COVID-19</h4>
                        <Collapse>
                            <Panel
                                header="Can I still purchase from your website?"
                                key="1">
                                <p>
                                    Yes, we’re still open to accept orders in
                                    South Africa.
                                </p>
                            </Panel>
                            <Panel
                                header="Are you still delivering as normal?"
                                key="2">
                                <p>
                                    We’re trying to keep on top of order send
                                    outs as much as possible following the
                                    necessary safety measures and guidelines.
                                    We’re working with our retailers and
                                    delivery partners to ensure they’re taking
                                    all the correct and necessary safety
                                    precautions
                                </p>
                            </Panel>
                            <Panel
                                header="What are Suppl-i doing to ensure the safety and wellbeing of staff within the business?"
                                key="3">
                                <p>
                                    We’re taking the Coronavirus outbreak
                                    incredibly seriously and want to ensure the
                                    wellbeing and safety of staff at all times
                                    when making any decisions. Since the
                                    government advised it was safest to do so,
                                    all out head office staff have been working
                                    from home. We have put in place a strict
                                    social distancing policy for any members of
                                    staff who may have to come in closer contact
                                    during the outbreak
                                </p>
                            </Panel>
                        </Collapse>
                        <h4 style={{ marginTop: '15px' }}>PAYMENTS</h4>
                        <Collapse>
                            <Panel
                                header="What payment methods do you accept?"
                                key="1">
                                <p>
                                    We accept payment from debit or credit cards
                                    -VISA, Mastercard, Maestro.
                                </p>
                            </Panel>
                            <Panel header="Do you sell gift cards?" key="2">
                                <p>
                                    Yes we do! To buy one of our e-gift cards,
                                    please visit our ‘Gift Certificates’ page.
                                    Please note. If you buy one of our e-gift
                                    cards, this is only valid to use online and
                                    will be sent to you electronically via email
                                </p>
                                <p>
                                    To purchase one online you simply add it
                                    into your basket like you would a normal
                                    product. Once you’ve completed at checkout
                                    you will receive an order confirmation with
                                    your gift card confirmation within 24 hours.
                                </p>
                            </Panel>
                            <Panel
                                header="Why haven't I received my gift card?"
                                key="3">
                                <p>
                                    Your gift card should appear in your emails
                                    within 24 hours of purchasing. If you have
                                    still not received it, please email us at
                                    info@suppl-i.com
                                </p>
                            </Panel>
                            <Panel
                                header="I've lost my gift card, can I get a replacement?"
                                key="4">
                                <p>
                                    Yes you can, if you give us an email at
                                    info@suppl-i.com we’ll be able to advise you
                                    further on this.
                                </p>
                            </Panel>
                            <Panel header="Can I return a gift card?" key="5">
                                <p>No, our gift cards are non-refundable.</p>
                            </Panel>
                            <Panel
                                header="How long do I have to use my gift card? "
                                key="6">
                                <p>
                                    Your gift card is valid for 12 months from
                                    the date of purchase
                                </p>
                            </Panel>
                            <Panel
                                header="My discount code didn't work?"
                                key="7">
                                <p>
                                    Firstly, check that you’re entering the
                                    discount code exactly as it appears (case
                                    sensitive) and check that the code is still
                                    in date and has not expired. Secondly, check
                                    the terms and conditions of your code, if
                                    the item is in sale or in a certain category
                                    the discount may not be valid on this
                                    product. If it’s still not working, please
                                    email us at info@suppl-i.com and our team
                                    will be able to advise you further.
                                </p>
                            </Panel>
                            <Panel
                                header="Can I use more than one promotional code on my order?"
                                key="8">
                                <p>
                                    No, you can only use one promotional
                                    discount in each individual order
                                </p>
                            </Panel>
                            <Panel
                                header="Experiencing problems paying?"
                                key="9">
                                <p>
                                    Oh no! Please try an alternative payment
                                    method or contact us at info@suppl-i.comand
                                    one of our customer service representatives
                                    will help you as soon as they can!
                                </p>
                            </Panel>
                        </Collapse>
                        <h4 style={{ marginTop: '15px' }}>DELIVERIES</h4>
                        <Collapse>
                            <Panel
                                header="What delivery options do you offer?"
                                key="1">
                                <p>
                                    South Africa Delivery: Same-Day deliveries
                                    available if ordered before 1pm
                                    Monday-Friday. Delivery times may vary
                                    depending on the time and day an order is
                                    placed, as well as where the item is ordered
                                    from.
                                </p>
                                <p>
                                    Deliveries are handled through our delivery
                                    partner, Droppa Couriers
                                </p>
                            </Panel>
                            <Panel
                                header="How does your standard delivery service work?"
                                key="2">
                                <p>
                                    Delivery times will be made available to you
                                    on checkout of your cart on our website. If
                                    you haven’t received your order within this
                                    time frame, please contact uson
                                    info@suppl-i.com
                                </p>
                            </Panel>
                            <Panel
                                header="Can I track the status of my order?"
                                key="3">
                                <p>
                                    Yes, you can. Along with your order
                                    confirmation, once your order has been
                                    shipped a tracking number will be sent over
                                    to you so you can track your order.
                                </p>
                            </Panel>
                            <Panel
                                header="What happens if nobody's in when my order is delivered?"
                                key="4">
                                <p>
                                    As we currently ship with Droppa, they state
                                    that your courier will make several attempts
                                    to deliver your parcel. If Droppa have
                                    attempted to deliver your parcel after a few
                                    attempts this will then be sent back to us
                                    and you will be refunded, minus costs to
                                    cover the attempted deliveries.
                                </p>
                                <p>
                                    Can I get my order delivered to a PO Box
                                    address?
                                </p>
                                <p>
                                    No, you cannot have your order delivered to a
                                    PO Box Address.Only physical home or office
                                    addresses can be used.
                                </p>
                            </Panel>
                        </Collapse>
                        <h4 style={{ marginTop: '15px' }}>ORDERS</h4>
                        <Collapse>
                            <Panel header="Where is my order?" key="1">
                                <p>
                                    Your order should arrive within the time
                                    frame as stated on your order confirmation,
                                    which you can double check in your order
                                    confirmation email. You should also receive
                                    a tracking link in this email so check this
                                    out for any delivery updates. If the
                                    delivery time frame has passed and you’ve
                                    still not received your items, please get in
                                    touch with us at info@suppl-i.com
                                </p>
                            </Panel>
                            <Panel
                                header="Can I cancel or change my order?"
                                key="2">
                                <p>
                                    Once you have placed an order with us our
                                    team work hard to make sure we are promptly
                                    starting to pack and process your order,
                                    therefore once you are charged we are unable
                                    to interfere with this process. If you are
                                    unhappy with your item(s) or no longer
                                    require them, you are welcome to send them
                                    back to us using our returns service
                                </p>
                            </Panel>
                            <Panel
                                header="Where is my order confirmation?"
                                key="3">
                                <p>
                                    Once you have placed an order, you should
                                    receive an email confirmation sent to the
                                    email address you provided at checkout. If
                                    for some reason, you did not receive this
                                    email, please check your spam/junk folders.
                                    If you still cannot find this, please log
                                    into your account to check that your order
                                    was initially processed, and if you are
                                    still having problems please contact uson
                                    info@suppl-i.com
                                </p>
                            </Panel>
                            <Panel
                                header="What should I do if my order is missing?"
                                key="4">
                                <p>
                                    If you are in SAand have not received your
                                    order within the allotted delivery time
                                    frame, please notify us by email at
                                    info@suppl-i.com within 21 days of the date
                                    on which you ordered the products. After
                                    this time has elapsed, Suppl-i reserves the
                                    right to decide whether to send our
                                    replacement item(s) for you.
                                </p>
                            </Panel>
                            <Panel
                                header="What do I do if I've received the wrong item?"
                                key="5">
                                <p>
                                    If you’ve received the wrong item in your
                                    order and you're a SA customer, please
                                    return it using our returns service. Please
                                    also contact us on info@suppl-i.com where a
                                    member of our customer service team will
                                    help you further.
                                </p>
                            </Panel>
                            <Panel
                                header="There's an item missing from my order, what should I do?"
                                key="6">
                                <p>
                                    If you receive your order and an item is
                                    missing, please check your emails or junk
                                    emails to see if you’ve received an out of
                                    stock notice from us, if you haven’t
                                    received this please email us at
                                    info@suppl-i.comandone of our advisors will
                                    help you further
                                </p>
                            </Panel>
                        </Collapse>
                        ,<h4 style={{ marginTop: '15px' }}>RETURNS</h4>
                        <Collapse>
                          
                            <Panel
                                header="Can I return items bought with a gift voucher?"
                                key="2">
                                <p>
                                    Yes you can return items bought with a gift
                                    voucher, however you will be refunded with
                                    another gift voucher and not cash.
                                </p>
                            </Panel>
                            <Panel
                                header="Can I get a refund if the price has changed since I ordered it?"
                                key="3">
                                <p>
                                    As a business we're constantly changing our
                                    prices due to fashion trends, sales demand
                                    and other various reasons. This does
                                    unfortunately mean that if the price has
                                    changed since you've ordered, we are unable
                                    to refund the price difference.
                                </p>
                            </Panel>
                            <Panel
                                header="What should I do if my refund is incorrect?"
                                key="4">
                                <p>Please contact us at info@suppl-i.com</p>
                            </Panel>
                            <Panel
                                header="What do I do if my item is faulty?"
                                key="5">
                                <p>
                                    Goods are classified as faulty if they are
                                    not of satisfactory quality, fit for purpose
                                    or not as described. Please note that items
                                    which are damaged due to normal wear and
                                    tear; by accident; or through misuse will
                                    not be considered faulty and Suppl-ihas the
                                    right to refuse a refund on these grounds.
                                    If your item is faulty, please do not
                                    dispose or amend your item(s). Please
                                    contact Customer Care on
                                    info@suppl-i.comwithin 30 days of receipt
                                    along with your name, order number, and any
                                    images you can provide of the faulty
                                    item(s).
                                </p>
                            </Panel>
                        </Collapse>
                        <h4 style={{ marginTop: '15px' }}>PRODUCTS & STOCK</h4>
                        <Collapse>
                            <Panel
                                header="Can you tell me more information about your products?"
                                key="1">
                                <p>
                                    We work hard to include as much information
                                    about our products in our product
                                    descriptions on the product page, but if
                                    there’s something more specific you’d like
                                    to know please contact us at
                                    info@suppl-i.com
                                </p>
                            </Panel>
                            <Panel
                                header="How can I find out if you'll be getting in more stock of a product I want?"
                                key="2">
                                <p>
                                    Due to high demand, some of the items on our
                                    website do sell out very quickly! However,
                                    it’s worth checking back as the site is
                                    regularly updated. You can also add a
                                    product to your wishlist and receive further
                                    updates on that product.
                                </p>
                            </Panel>
                            <Panel
                                header="Why can't I find an item that I've seen advertised?"
                                key="3">
                                <p>
                                    We try to only advertise products available
                                    on site at that time, however sometimes this
                                    isn’t always possible –if there is something
                                    you see advertised and it isn’t in stock on
                                    the website, please check the advert to see
                                    if the special is still valid or feel free to
                                    email us on info@suppl-i.com for more
                                    information! We’ll always try and help.
                                </p>
                            </Panel>
                        </Collapse>
                        <h4 style={{ marginTop: '15px' }}>MY ACCOUNT</h4>
                        <Collapse>
                            <Panel
                                header="Do I need to set up an account to make an order?"
                                key="1">
                                <p>
                                    Yes, we do require that you create an
                                    account when shopping with Suppl-i. This in
                                    order for us to maintain a high level of
                                    service to our customers and to try ensure
                                    that no errors or mistakes are made when
                                    processing your orders.
                                </p>
                            </Panel>
                            <Panel
                                header="I'm having trouble signing in to my account, what should I do?"
                                key="2">
                                <p>
                                    Oh no! Please try resetting your password
                                    initially. If this still doesn't work please
                                    contact us at info@suppl-i.com and we'll try
                                    and help!
                                </p>
                            </Panel>
                            <Panel header="How do I reset my password?" key="3">
                                <p>
                                    If you can't remember your password, you’ll
                                    be able to request a password reset. Simply
                                    go to the ‘Account Login’ and click on
                                    ‘Reset Password’. If you are still having
                                    difficulties, please contact us on
                                    info@suppl-i.com for further assistance
                                </p>
                            </Panel>
                            <Panel
                                header="How can I access my wish list?"
                                key="4">
                                <p>
                                    To access your wish list, please make sure
                                    you are logged in to your account and visit
                                    the ‘Wish List’ section.
                                </p>
                            </Panel>
                            <Panel
                                header="Is my personal information kept private?"
                                key="5">
                                <p>
                                    Yes, in accordance with the new and updated
                                    data protection act we promise to keep your
                                    information private and secure. We go above
                                    and beyond to make sure that all online
                                    securities are maintained and that our
                                    customer information is kept private and
                                    safe from third parties. To read more about
                                    our privacy policy please see here <a href='/privacy-policy'>Privacy Policy</a>
                                </p>
                            </Panel>
                            <Panel
                                header="How can I remove my personal information from your database?"
                                key="6">
                                <p>
                                    If you would like all information regarding
                                    yourself removed from our Suppl-i database,
                                    please email us at info@suppl-i.com
                                </p>
                            </Panel>
                            <Panel
                                header="How do I unsubscribe from your newsletter?"
                                key="7">
                                <p>
                                    Click unsubscribe at the bottom of any
                                    newsletter or email your receive from us,
                                    alternatively email us at
                                    info@suppl-i.com and we can remove your
                                    information from our database completely
                                </p>
                            </Panel>
                        </Collapse>
                        <h4 style={{ marginTop: '15px' }}>
                            MERCHANTS AND VENDORS
                        </h4>
                        <Collapse>
                            <Panel header="How does it work?" key="1">
                                <p>
                                    Any small store owner or private vendor can
                                    sell their goods on Suppl-i. All you have to
                                    do is register a vendor account on our
                                    website. From there, you can manage your own
                                    online store, upload your products and reach
                                    more customers. If you have any queries or
                                    need assistance in this process, please
                                    contact us on info@suppl-i.com
                                </p>
                            </Panel>
                            <Panel
                                header="Do I need to set up an account to become a seller on Suppl-i?"
                                key="2">
                                <p>
                                    Yes, we do require that you create an
                                    account when selling on Suppl-i. This in
                                    order for us to maintain a high level of
                                    service to our vendorsand to try ensure that
                                    no errors or mistakes are made when creating
                                    your online store.
                                </p>
                            </Panel>
                            <Panel
                                header="I'm having trouble signing in to my vendor account, what should I do?"
                                key="3">
                                <p>
                                    Oh no! Please try resetting yourpassword
                                    initially. If this still doesn't work please
                                    contact us at info@suppl-i.com and we'll try
                                    and help
                                </p>
                            </Panel>
                            <Panel
                                header="How do I reset my vendor password?"
                                key="4">
                                <p>
                                    If you can't remember your password, you’ll
                                    be able to request a password reset. Simply
                                    go to the ‘VendorLogin’ and click on ‘Reset
                                    Password’. If you are still having
                                    difficulties, please contact us on
                                    info@suppl-i.com for further assistance.
                                </p>
                            </Panel>
                            <Panel
                                header="How can I access my order and sales?"
                                key="5">
                                <p>
                                    To access your customer orders and sales
                                    requests, please make sure you are logged in
                                    to your account and where you can access all
                                    the information on the backend of your
                                    online store. If you are having any issues
                                    or technical difficulties, please contact us
                                    on info@suppl-i.com
                                </p>
                            </Panel>
                            <Panel
                                header="How do I upload, change or remove products from my online store?"
                                key="6">
                                <p>
                                    Once you have created a vendor account, you
                                    are given a backend management portal in
                                    which to manage all elements of your online
                                    store. Please make sure to maintain your
                                    online store with correct prices, product
                                    information, product images and other
                                    relevant information. Should you need any
                                    assistance when managing your online store,
                                    please contact us on info@suppl-i.com
                                </p>
                            </Panel>
                            <Panel
                                header="What services are available to me as a vendor?"
                                key="7">
                                <p>
                                    At Suppl-i, we provide vendors with a
                                    platform in which to create their own online
                                    store and manage their products and specials
                                    through their own management portal. We also
                                    manage the logistics for all our vendors (we
                                    handle all courier requirements) so that you
                                    can focus on your day-to-day running of the
                                    business.
                                </p>
                                <p>
                                    Additional services are also available to
                                    vendors, such as creating promotions to
                                    enhance sales, stock management systems,
                                    sales analytics and more. Should you have
                                    any queries on how to maximize your selling
                                    potential, please contact us on
                                    info@suppl-i.com
                                </p>
                            </Panel>
                            <Panel
                                header="How do I unsubscribe from your vendor newsletter?"
                                key="8">
                                <p>
                                    Click unsubscribe at the bottom of any
                                    newsletter or email your receive from us,
                                    alternatively email us at info@suppl-i.com
                                    and we can remove your information from our
                                    database completely
                                </p>
                            </Panel>
                        </Collapse>
                        ,
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default FAQs;
