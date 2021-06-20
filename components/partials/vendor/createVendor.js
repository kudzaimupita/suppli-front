import React from 'react';
// import { createVendor} from "../actions/vendors";
import { connect } from 'react-redux';
import axios from 'axios';
// import { setAlert } from "../actions/alert";
import Login from '../account/LoginModal';
import Register from '../account/RegisterModal';
import {
    Button,
    Card,
    Form,
    Input,
    Row,
    Col,
    Progress,
    Spin,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    Modal,
} from 'antd';
import { Collapse } from 'antd';
import { createVendorAction } from './../../../actions/vendors';
import { setAlert } from './../../../actions/alert';
const { Panel } = Collapse;
import { Upload, message, Tabs } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
const { TabPane } = Tabs;

class VendorApplication extends React.Component {
    toggleModal = (state) => {
        this.setState({
            [state]: !this.state[state],
        });
    };
    state = {
        loading: false,
        catergory: '',
        name: '',
        companyEmail: '',
        phone: '',
        city: '',
        postalCode: '',
        address: '',
        country: 'South Africa',
        aboutUs: '',
        image1: null,
        productImage1: null,
        productImage2: null,
        productImage3: null,
        facebookLink: '',
        instagramLink: '',
        isModalVisible: false,
        websiteLink: ''
    };

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) =>
                this.setState({
                    imageUrl,
                    loading: false,
                })
            );
        }
    };

    handleFacebookChange = (e) => {
        this.setState({ facebookLink: e.target.value });
    };

    handleInstagramChange = (e) => {
        this.setState({ instagramLink: e.target.value });
    };

    handleWebsiteChange = (e) => {
        this.setState({ websiteLink: e.target.value });
    };


    handleShowModalChange = (e) => {
        this.setState({ isModalVisible: true });
    };
    handleCancelModal = (e) => {
        this.setState({ isModalVisible: false });
    };

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleCompanyEmailChange = (e) => {
        this.setState({ companyEmail: e.target.value });
    };

    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value });
    };

    handleAddressChange = (e) => {
        this.setState({ address: e.target.value });
    };

    handleCityChange = (e) => {
        this.setState({ city: e.target.value });
    };
    handlePostalCodeChange = (e) => {
        this.setState({ postalCode: e.target.value });
    };

    handleAboutUsChange = (e) => {
        this.setState({ aboutUs: e.target.value });
    };

    handleImage1Change = (e) => {
        this.setState({ image1: URL.createObjectURL(e.target.files[0]) });
    };

    handleProductImage1Change = (e) => {
        this.setState({
            productImage1: URL.createObjectURL(e.target.files[0]),
        });
    };

    handleProductImage2Change = (e) => {
        this.setState({
            productImage2: URL.createObjectURL(e.target.files[0]),
        });
    };

    handleProductImage3Change = (e) => {
        this.setState({
            productImage3: URL.createObjectURL(e.target.files[0]),
        });
    };

    handleCatergoryChange = (e) => {
        this.setState({ catergory: e.target.value });
    };
    onSubmit = async (e) => {
        // if (!this.state.name)
        //     return this.props.setAlert('hello nigga', 'danger');
        //   console.log('This is our state', this.state)
        //   axios.defaults.headers.common['authorization'] = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkzYjI0MmQzZTNiNTdiNDc3ZGJlOSIsImlhdCI6MTYyMDE1NjM4OSwiZXhwIjoxNjI3OTMyMzg5fQ.bBdjZjbZwfdun-j7XgkZOQ2Bd8W4CHSRZCErXrHaOEw'}`
        //   // const response = await fetch('localhost:5000/api/v1/vendors');
        //  await axios.post('https://suppli-api.herokuapp.com/api/v1/vendors', {
        //     firstName: 'Finn',
        //     lastName: 'Williams'
        //   });
        this.props.createVendorAction(
            {
                // website: this.state.catergory,
                // catergory: this.state.catergory,
                facebookLinnk: this.state.facebookLink,
                instagramLink: this.state.instagramLink,

                logo: this.state.image1,
                companyEmail: this.state.companyEmail,
                name: this.state.name,
                phone: this.state.phone,
                aboutUs: this.state.aboutUs,

                city: this.state.city,
                country: this.state.country,
                address: this.state.address,
                postalCode: this.state.postalCode,

            },
            this.props.history
        );
    };

    render() {
        const { loading, imageUrl } = this.state;
        console.log(this.state);
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <>

                <div
                    className=" ps-form--account"
                    style={{ maxWidth: '900px', paddingTop: '20px' }}>

                    <Card
                        className="bg-grey shadow site-layout-content"
                        style={{ marginBottom: 20 }}>
                        <Row className="align-items-center justify-center">
                            <Col xs="8" style={{ marginBottom: '30px' }}>
                                <h3 className="mb-0">Vendor Application</h3>
                            </Col>
                            <Col className="text-right" xs="4">
                                <Modal
                                    title="Vendor Terms Of Use"
                                    visible={this.state.isModalVisible}
                                    width={600}
                                    onCancel={this.handleCancelModal}
                                    footer={[
                                        <Button
                                            key="back"
                                            onClick={
                                                this.handleCancelModal
                                            }>
                                            Cancel
                                        </Button>,

                                        this.props.isLoggedIn && <Button
                                            style={{ marginLeft: '20px' }}
                                            type="primary"
                                            loading={loading}
                                            onClick={this.onSubmit}>
                                            {this.props
                                                .createdPlugLoading ? (
                                                <Spin />
                                            ) : null}{' '}
                                            I Agree
                                        </Button>


                                    ]}>
                                    {!this.props.isLoggedIn && <Tabs defaultActiveKey="1" >
                                        <TabPane tab="Register" key="1">
                                            {!this.props.isLoggedIn && <Register />}
                                        </TabPane>
                                        <TabPane tab="Login" key="2">
                                            {!this.props.isLoggedIn && <Login />}
                                        </TabPane>

                                    </Tabs>}
                                    {this.props.isLoggedIn && <Collapse accordion>
                                        <Panel
                                            header="Vendor Terms Of Use"
                                            key="1">
                                            <h4>1. Introduction</h4> <hr />
                                            <p>
                                                1.1 The App enables The
                                                Retailers (“The Retailer”)
                                                to sell items and/or
                                                services from the App to
                                                customers using the Suppl-i
                                                online shopping platform
                                                (each a "Customer").
                                            </p>
                                            <p>
                                                1.2 These terms and
                                                conditions ("Terms and
                                                Conditions") govern the
                                                ordering, sale, delivery,
                                                and collection of items as
                                                ordered, and the use of the
                                                App. These Terms and
                                                Conditions are binding and
                                                enforceable against every
                                                person that accesses or uses
                                                the App, including without
                                                limitation each. By using
                                                the App, you acknowledge
                                                that you have read and agree
                                                to be bound by these Terms
                                                and Conditions. You must not
                                                use the App or Telephone
                                                Service if you do not agree
                                                to the Terms and Conditions.
                                            </p>
                                            <h4>2. Important Notice</h4>{' '}
                                            <hr />
                                            <p>
                                                2.1 These Terms and
                                                Conditions apply to users
                                                who are The Retailers for
                                                purposes of the Consumer
                                                Protection Act 2008 (the
                                                "CPA").
                                            </p>
                                            <p>
                                                2.2 If there is any
                                                provision in these Terms and
                                                Conditions that you do not
                                                understand, it is your
                                                responsibility to ask
                                                Suppl-i to explain it to you
                                                before you accept the Terms
                                                and Conditions by continuing
                                                to use the App.
                                            </p>
                                            <p>
                                                2.3 Nothing in these Terms
                                                and Conditions is intended
                                                or must be understood to
                                                unlawfully restrict, limit
                                                or avoid any right or
                                                obligation, as the case may
                                                be, created for either you
                                                or Suppl-i in terms of the
                                                CPA
                                            </p>
                                            <h4>3. How it works</h4> <hr />
                                            <p>
                                                3.1 You may sell items via
                                                the App. When selling items,
                                                you are required to indicate
                                                your stock availability,
                                                product pricing, product
                                                information and product
                                                imagery.
                                            </p>
                                            <p>
                                                3.2 Where you have received
                                                ordered through the App,
                                                your courier and logistics
                                                requirements will be managed
                                                by Suppl-i and/or our
                                                courier partners.
                                            </p>
                                            <p>
                                                3.3 You are required to
                                                maintain the accuracy of
                                                your own products and online
                                                store on our App.
                                            </p>
                                            <p>
                                                3.4 You acknowledge that,
                                                notwithstanding that the
                                                item(s) ordered via the App,
                                                you confirm such order with
                                                the relevant Customer. The
                                                sale of items is solely
                                                between the registered user
                                                and the relevant Customer.
                                                Neither Suppl-i nor any
                                                party attending to the
                                                Courier Delivery (if
                                                applicable) is a party to
                                                that sale of any item.
                                                Suppl-i only provides the
                                                platform to facilitate
                                                transactions between Retail
                                                stores and Customers in
                                                relation to any item as sold
                                                by the retail store. Suppl-i
                                                is neither the buyer nor the
                                                seller of the item.{' '}
                                            </p>
                                            <p>
                                                3.5 Because we want you to
                                                have a safe and consistent
                                                experience, Suppl-i will be
                                                your first point of contact
                                                for any queries arising out
                                                of or in connection with the
                                                sale of any item between a
                                                Customer and a Retail store.
                                                Should such complaint
                                                escalate into being a
                                                dispute, although Suppl-i is
                                                entitled to become involved
                                                in an attempt to resolve it,
                                                Suppl-i is not obliged to do
                                                so and any disputes must be
                                                resolved between the
                                                Customer and the relevant
                                                Retail store.
                                            </p>
                                            <h4>
                                                4. Registration and use of
                                                the App
                                            </h4>{' '}
                                            <hr />
                                            <p></p>
                                            <p>
                                                4.1 Only registered users
                                                (The Retailers) may sell
                                                items via the App
                                            </p>
                                            <p>
                                                4.2 To register as a The
                                                Retailer via the App, you
                                                must provide Suppl-i with
                                                your unique email address or
                                                telephone number, personal
                                                details and any other
                                                relevant information
                                                required. You will
                                                thereafter be requested to
                                                select your own password or
                                                be issued a randomly
                                                generated password (which
                                                you may subsequently
                                                change).
                                            </p>
                                            <p>
                                                4.3 You will need to use
                                                your unique username and
                                                password to manage your
                                                e-store via the App. You
                                                agree that a Suppl-i
                                                operator may call you to
                                                confirm your personal
                                                details, order information
                                                and amount owed. For
                                                security purposes you agree
                                                to enter your correct
                                                username and password
                                                whenever utilizing the
                                                management portal via the
                                                App, failing which we will
                                                not process your updates
                                            </p>
                                            <p>
                                                4.4 You agree and warrant
                                                that your username and
                                                password (if applicable)
                                                shall not be disclosed by
                                                you to any third party.
                                            </p>
                                            <p>
                                                4.5 You agree that, once
                                                your correct username and
                                                password have been entered
                                                (in relation to the App),
                                                irrespective of whether the
                                                use of the username and/or
                                                password is unauthorized or
                                                fraudulent, you will be
                                                liable for changes and
                                                updates processed.
                                            </p>
                                            <p>
                                                4.6 You agree to notify
                                                Suppl-i immediately upon
                                                becoming aware of or
                                                reasonably suspecting any
                                                unauthorised access to or
                                                use of your username and/or
                                                password and to take steps
                                                to minimise any resultant
                                                loss or harm.
                                            </p>
                                            <p>
                                                4.7 You agree that you will
                                                not in any way use any
                                                device, software or other
                                                instrument to interfere or
                                                attempt to interfere with
                                                the proper working of the
                                                App. You may use the App
                                                only for lawful purposes and
                                                may not in any way
                                                (including without
                                                limitation by use of any
                                                robot, spider, other
                                                automatic device or manual
                                                process) monitor,
                                                distribute, display,
                                                publish, copy, print, post,
                                                modify or otherwise use the
                                                App and/or the information
                                                contained therein without
                                                the express prior written
                                                consent of an authorised
                                                Suppl-i representative.
                                            </p>
                                            <h4>
                                                5. Conclusion of Sales and
                                                availability of items
                                                ordered
                                            </h4>{' '}
                                            <hr />
                                            <p>
                                                5.1 Registered The Retailers
                                                may upload and sell items,
                                                which Suppl-i may accept or
                                                reject. Correctness of the
                                                information relating to the
                                                item (such as the price) is
                                                the responsibility of The
                                                Retailer. Suppl-i will not
                                                be held liable for incorrect
                                                selling prices or other
                                                relative product
                                                information.
                                            </p>
                                            <p>
                                                5.2 Suppl-i will accept the
                                                upload of products to the
                                                App, but reserve the right
                                                to remove any items that may
                                                infringe on consumer rights
                                                or not meet the required
                                                quality standards.
                                            </p>
                                            <p>
                                                5.3 Suppl-i will indicate
                                                the rejection of your
                                                product by cancelling it and
                                                notifying you thereof
                                            </p>
                                            <p>
                                                5.4 All items uploaded by
                                                The Retailer to the App,
                                                must be kept up-to-date.
                                                Items no longer available
                                                for sale must be removed
                                                from the App, while new
                                                items can be uploaded by The
                                                Retailers at any time.
                                            </p>
                                            <p>
                                                5.5 Suppl-i relies on
                                                information supplied to it
                                                by The Retailer relating to
                                                the item, and Suppl-i
                                                accordingly bears no
                                                liability for any
                                                inaccuracies in such
                                                information supplied to it.
                                                You acknowledge that stock
                                                of all items on offer may be
                                                limited. Suppl-i will take
                                                reasonable efforts to ensure
                                                that when items are no
                                                longer available, offers
                                                thereof are discontinued on
                                                the App.{' '}
                                            </p>
                                            <h4>
                                                {' '}
                                                6.0 Conclusion of Sales and
                                                availability of item ordered
                                            </h4>{' '}
                                            <hr />
                                            <p>
                                                6.1 For each order, you will
                                                be charged:
                                            </p>
                                            <p>
                                                {' '}
                                                6.1.1 3.5% of the value of
                                                the sold items to cover for
                                                online banking charges; and
                                            </p>
                                            <p>
                                                {' '}
                                                6.1.2 1.5% of the value of
                                                the sold items charged as an
                                                order fulfilment charge to
                                                The Retailer for use of the
                                                Suppl-i App; and
                                            </p>
                                            <p>
                                                {' '}
                                                6.1.3 where you have
                                                selected Courier Delivery, a
                                                Courier Delivery service fee
                                                by Suppl-i, alternatively a
                                                driver service fee by the
                                                Driver; and
                                            </p>
                                            <p>
                                                6.1.4 where you have
                                                selected any of the
                                                additional services offered
                                                by Suppl-i, the relevant
                                                charges will be deducted as
                                                a percentage value of the
                                                items sold;
                                            </p>
                                            <p>
                                                6.2 Via the Suppl-i App, you
                                                will be provided with all
                                                details of orders, sales and
                                                charges.
                                            </p>
                                            <h4>7. Payment</h4>
                                            <hr />
                                            <p>
                                                7.1 Suppl-i will receive
                                                payment of all order charges
                                                from the Customer and will
                                                pay the items-related
                                                portion thereof to the
                                                relevant Retail store (The
                                                Retailer). We are authorised
                                                to receive payment for the
                                                item on behalf of the
                                                Customer and will process
                                                payment to The Retailer,
                                                less the deducted charges as
                                                mentioned in Paragraph 6.0.
                                            </p>
                                            <p>
                                                7.2 Customer payment for
                                                your order on the Suppl-i
                                                Online Shopping Platform can
                                                be made in one of the
                                                following ways (only one
                                                payment method may be used
                                                to settle the amount due and
                                                not a combination of payment
                                                methods):
                                            </p>
                                            <p>
                                                {' '}
                                                7.2.1 Credit Card, Debit
                                                Card, Instant EFT.
                                            </p>
                                            <p>
                                                7.3 Payment from Suppl-i to
                                                The Retailer will be made
                                                once an order has been
                                                confirmed and processed by
                                                The Retailer. Suppl-i will
                                                do their best to make
                                                payment to The Retailer
                                                within 3 working days of
                                                order confirmation.
                                            </p>
                                            <p>
                                                7.4 Suppl-i may reserve the
                                                right to hold back payment
                                                from The Retailer should
                                                there be any outstanding
                                                customer exchanges, returns
                                                or product queries
                                            </p>
                                            <h4>8. Delivery of items</h4>
                                            <hr />
                                            <p>
                                                8.1 All orders will be
                                                managed by Suppl-i including
                                                the Courier Delivery by
                                                Suppl-i or its nominee (i.e.
                                                a Suppl-i franchisee, an
                                                independent contractor or
                                                Driver) (the "Courier"):(i)
                                                you are required to indicate
                                                the physical address to
                                                which the item should be
                                                collected from ("Collection
                                                Address");{' '}
                                            </p>
                                            <p>
                                                {' '}
                                                8.1.1 the Courier will
                                                endeavour to deliver the
                                                item to the Customer by the
                                                estimated delivery time
                                                specified in the Acceptance
                                                Notice, however, delivery
                                                times are not guaranteed and
                                                may be adjusted by us in our
                                                reasonable discretion.
                                                Events outside of the
                                                Courier’s control such as
                                                traffic, inclement weather
                                                conditions and delays by the
                                                Retail store in relation to
                                                your order may result in a
                                                delay of the delivery of the
                                                item, but the Courier will
                                                continue with its efforts to
                                                deliver the item to the
                                                Customer as soon as possible
                                                in the circumstances; and
                                            </p>
                                            <p>
                                                {' '}
                                                8.3.2 Our obligation to
                                                deliver the item is
                                                fulfilled when the Courier
                                                delivers the item to the
                                                Delivery Address. The
                                                Courier is only responsible
                                                for the delivery of the item
                                                to the Delivery Address. the
                                                Courier arrives at the
                                                Delivery Address and the
                                                Customer fails to open the
                                                door or respond to its
                                                telephone calls within 10
                                                minutes, the Courier may
                                                leave the premises, taking
                                                the item with it, and the
                                                Customer will remain liable
                                                for payment of all order
                                                charges. If the Customer is
                                                not able to be present at
                                                the Delivery Address to
                                                accept delivery of the item,
                                                or arrange for a different
                                                delivery time. Neither
                                                Suppl-i nor the Retail store
                                                is responsible for any loss
                                                or unauthorised consumption
                                                of the item, after the
                                                Courier has delivered the
                                                item to the Delivery
                                                Address.
                                            </p>
                                            <p>
                                                {' '}
                                                8.3.3 the Retail store (The
                                                Retailer) is responsible for
                                                making the item(s) available
                                                for collection by you or
                                                your nominee at its
                                                premises, at the estimated
                                                collection time set out in
                                                the Acceptance Notice. Any
                                                dispute regarding the Retail
                                                store (The Retailer) failing
                                                to make the item available
                                                at the collection time or
                                                within 60 minutes
                                                thereafter, should be
                                                resolved between you and
                                                Suppl-i; your respective
                                                rights and obligations being
                                                as set out in these Terms
                                                and Conditions.
                                            </p>
                                            <h4>
                                                9. Exchanges and Returns
                                            </h4>
                                            <hr />
                                            <p>
                                                9.1 Our obligation to The
                                                Retailer is to provide an
                                                online selling platform,
                                                while to The Customer to
                                                provide an online purchasing
                                                platform. Suppl-i is only
                                                responsible for passing on a
                                                Customer order to The
                                                Retailer, collection and
                                                delivery of orders made on
                                                the Suppl-i Online Shopping
                                                platform, and collection and
                                                delivery of a product
                                                return, exchange or faulty
                                                product query from a
                                                Customer to The Retailer.
                                            </p>
                                            <h4>10. Errors</h4>
                                            <hr />
                                            <p>
                                                10.1 Suppl-i shall take all
                                                reasonable efforts to
                                                accurately reflect correct
                                                item description,
                                                availability, purchase price
                                                and Courier Delivery service
                                                charges via the App.
                                                However, should there be any
                                                errors of whatsoever nature
                                                on the App (which are not
                                                due to our gross
                                                negligence), we shall not be
                                                liable for any loss, claim
                                                or expense relating to an
                                                order or Sale based on any
                                                error, the rejection of an
                                                order or the cancellation of
                                                a Sale, save to the extent
                                                of claiming back and refunds
                                                from you for any amount
                                                already paid.
                                            </p>
                                            <p></p>
                                            <p></p>
                                            <h4>11. Complaints</h4>
                                            <hr />
                                            <p>
                                                11.1 We want you to be happy
                                                with our service. Please let
                                                us know by telephone or
                                                email as soon as possible if
                                                there is a problem with your
                                                experience using our App, if
                                                you receive the wrong order
                                                request or if you incorrect
                                                payments and/or settlements.
                                            </p>
                                            <p></p>
                                            <h4>12. Privacy Policy</h4>
                                            <hr />
                                            <p>
                                                12.1 We respect your privacy
                                                and will take reasonable
                                                measures to protect it, as
                                                more fully detailed below.
                                            </p>
                                            <p>
                                                12.1 We respect your privacy
                                                and will take reasonable
                                                measures to protect it, as
                                                more fully detailed below.
                                                12.2 Should you decide to
                                                register as a The Retailer
                                                via the Suppl-i App, we may
                                                require you to provide us
                                                with personal information
                                                that identifies you. This
                                                includes but is not limited
                                                to -
                                            </p>
                                            <p>
                                                {' '}
                                                your name and surname; your
                                                store name; your email
                                                address; your physical
                                                address; your identity
                                                number; your mobile number;
                                                your date of birth; and your
                                                gender.
                                            </p>
                                            <p>
                                                12.3 Should your personal
                                                information change, please
                                                update all relevant
                                                information via the App
                                            </p>
                                            <p>
                                                12.4 You may choose to
                                                provide additional personal
                                                information to us, in which
                                                event you agree to provide
                                                accurate and current
                                                information, and not to
                                                impersonate or misrepresent
                                                any person or entity or
                                                falsely state or otherwise
                                                misrepresent your
                                                affiliation with anyone or
                                                anything.
                                            </p>
                                            <p>
                                                12.5 We are entitled to use
                                                or disclose your personal
                                                information if such use or
                                                disclosure is required in
                                                order to comply with any
                                                applicable law, subpoena,
                                                order of court or legal
                                                process served on us, or to
                                                protect and defend our
                                                rights or property. Suppl-i
                                                undertakes never to sell or
                                                make your personal
                                                information available to any
                                                third party other than as
                                                provided for in this Privacy
                                                Policy, unless we are
                                                compelled to do so by law.
                                                In particular, in the event
                                                of fraudulent online
                                                payment, Suppl-i is entitled
                                                to disclose relevant
                                                personal information for
                                                criminal investigation
                                                purposes or in line with any
                                                other legal obligation for
                                                disclosure of the personal
                                                information which may be
                                                required of it.
                                            </p>
                                            <h4>12. Privacy Policy</h4>
                                            <hr />
                                            <p>
                                                13. Limitation of liability
                                            </p>
                                            <p>
                                                13.1 Suppl-i cannot be held
                                                liable for any inaccurate
                                                information published on the
                                                App and/or any incorrect
                                                prices displayed on the App
                                                or communicated, save where
                                                such liability arises from
                                                the gross negligence or
                                                wilful misconduct of
                                                Suppl-i, its employees,
                                                agents or authorised
                                                representatives. You are
                                                encouraged to contact us to
                                                report any possible
                                                malfunctions or errors by
                                                way of email or by phone at
                                                Suppl-i.
                                            </p>
                                            <p>
                                                13.2 Suppl-i shall not be
                                                liable for any direct,
                                                indirect, incidental,
                                                special or consequential
                                                loss or damages which might
                                                arise from your use of, or
                                                reliance upon, the app or
                                                the content contained in the
                                                app; or your inability to
                                                use the app, and/or unlawful
                                                activity on the app, and/or
                                                any linked third party
                                                website or mobile
                                                application. should it be
                                                found that Suppl-i is liable
                                                to you, such liability shall
                                                be limited to the order
                                                charges relating to your
                                                particular order.
                                            </p>
                                            <p>
                                                13.3 You hereby indemnify
                                                Suppl-i against any loss,
                                                claim or damage which may be
                                                suffered by yourself or any
                                                third party arising in any
                                                way from your use of the app
                                                and/or any linked third
                                                party website or mobile
                                                application.
                                            </p>
                                            <h4>
                                                14. Availability and
                                                termination
                                            </h4>
                                            <hr />
                                            <p>
                                                14. 1 Suppl-i may in its
                                                sole discretion terminate,
                                                suspend and modify the App,
                                                with or without notice to
                                                you. You agree that Suppl-i
                                                will not be liable to you in
                                                the event that it chooses to
                                                suspend, modify or terminate
                                                the App, other than for
                                                processing any orders made
                                                by Customers prior to such
                                                time, to the extent possible
                                            </p>
                                            <p>
                                                14.2 If you fail to comply
                                                with your obligations under
                                                these Terms and Conditions,
                                                including any incident
                                                involving order fulfilment,
                                                this may (in our sole
                                                discretion with or without
                                                notice to you) lead to a
                                                suspension and/or
                                                termination of your access
                                                to the App, without any
                                                prejudice to any claims for
                                                damages or otherwise that we
                                                may have against you.
                                            </p>
                                            <p>
                                                14.3 Suppl-i is entitled,
                                                for purposes of preventing
                                                suspected fraud and/or where
                                                it suspects that you are
                                                abusing the App and/or have
                                                created multiple user
                                                profiles to take advantage
                                                of a features intended by
                                                Suppl-i to be used once-off
                                                by you, to blacklist you on
                                                its database (including
                                                suspending or terminating
                                                your access to the App),
                                                refuse to accept or process
                                                payment on any order, and/or
                                                to cancel any order
                                                concluded between you and
                                                Suppl-i, in whole or in
                                                part, on notice to you.
                                                Suppl-i accepts no other
                                                liability which may arise as
                                                a result of such
                                                blacklisting and/or refusal
                                                to process any order.
                                            </p>
                                            <h4>
                                                15. Force majeure events
                                            </h4>
                                            <hr />
                                            <p>
                                                15.1 As between you and
                                                Suppl-i, you and any
                                                Courier, Driver or any
                                                Customer, no party will be
                                                liable to any other party
                                                for any delay or failure in
                                                performing its obligations
                                                (excluding payment
                                                obligations) in terms of
                                                these Terms and Conditions
                                                due to an event beyond its
                                                control, including but not
                                                limited to, an act of God,
                                                fire, flood, earthquake or
                                                war.
                                            </p>
                                            <h4>16. Signature</h4>
                                            <hr />
                                            <p>
                                                The person authorising the
                                                service on the Suppl-i
                                                Online Shopping Platform on
                                                behalf of The Retailer,
                                                warrants his or her
                                                authority to do so, but the
                                                failure of The Retailer to
                                                give authority will not
                                                effect the validity of this
                                                agreement as the very act of
                                                distributing goods for The
                                                Retailer, will be deemed to
                                                be in acceptance by The
                                                Retailer, of all the terms
                                                and condition noted herein.
                                            </p>
                                        </Panel>
                                    </Collapse>}

                                    {this.props.isLoggedIn && <p>
                                        {' '}
                                        * Important * By clicking the I
                                        agree button you accept that you've
                                        read and accepted the terms of use.
                                    </p>}

                                </Modal>

                            </Col>
                        </Row>

                        <>
                            <Form>
                                <div className="pl-sm-4">
                                    <Row>
                                        <Col lg="6">
                                            <>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                    size="sm">
                                                    Vendor Name*
                                                </label>
                                                <Input
                                                    id="input-username"
                                                    placeholder="eg Nike Holdings"
                                                    type="text"
                                                    prefix={
                                                        <i class="fa fa-shopping-bag"></i>
                                                    }
                                                    name="name"
                                                    value={this.state.name}
                                                    onChange={
                                                        this
                                                            .handleNameChange
                                                    }
                                                />
                                            </>
                                        </Col>
                                        <Col lg="6">
                                            <>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-email">
                                                    Vendor Email*
                                                </label>
                                                <Input
                                                    id="input-email"
                                                    placeholder="eg contact@nikeholdings.com"
                                                    type="email"
                                                    name="email"
                                                    value={
                                                        this.state
                                                            .companyEmail
                                                    }
                                                    onChange={
                                                        this
                                                            .handleCompanyEmailChange
                                                    }
                                                    prefix={
                                                        <i class="fa fa-envelope"></i>
                                                    }
                                                />
                                            </>
                                        </Col>
                                        <Col lg="6">
                                            <>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-email">
                                                    Vendor Phone*
                                                </label>
                                                <Input
                                                    id="input-email"
                                                    placeholder="eg 0315655565"
                                                    type="tel"
                                                    size="sm"
                                                    name="phone"
                                                    value={this.state.phone}
                                                    onChange={
                                                        this
                                                            .handlePhoneChange
                                                    }
                                                    prefix={
                                                        <i class="fa fa-phone"></i>
                                                    }
                                                />
                                            </>
                                        </Col>
                                        <Col md="9">
                                            <>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-country">
                                                    About us*
                                                </label>
                                                <TextArea
                                                    rows={4}
                                                    rows="4"
                                                    placeholder="eg Nike holding is an NYC based apparel company keeping up with the latest fashion trends, both traditional and modern etc"
                                                    type="textarea"
                                                    name="aboutUs"
                                                    value={
                                                        this.state.aboutUs
                                                    }
                                                    onChange={
                                                        this
                                                            .handleAboutUsChange
                                                    }
                                                />
                                            </>
                                        </Col>{' '}
                                    </Row>
                                </div>
                            </Form>
                        </>
                    </Card>

                    <Card
                        className="bg-white shadow"
                        style={{ marginBottom: 20 }}>
                        <div className="pl-lg-4">
                            <Row>
                                <Col md="12">
                                    <>
                                        <label htmlFor="input-address">
                                            Address*
                                        </label>
                                        <Input
                                            id="input-address"
                                            placeholder="89 Smitch Avenue, building 4, floor 45"
                                            type="text"
                                            size="sm"
                                            name="address"
                                            value={this.state.address}
                                            onChange={
                                                this.handleAddressChange
                                            }
                                            prefix={
                                                <i class="fa fa-map-marker"></i>
                                            }
                                        />
                                    </>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4">
                                    <>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-city">
                                            City*
                                        </label>
                                        <Input
                                            id="input-city"
                                            placeholder="Cape Town"
                                            type="text"
                                            size="sm"
                                            name="city"
                                            value={this.state.city}
                                            onChange={this.handleCityChange}
                                            prefix={
                                                <i class="fa fa-building"></i>
                                            }
                                        />
                                    </>
                                </Col>
                                <Col lg="4">
                                    <>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-country">
                                            Country*
                                        </label>
                                        <Input
                                            defaultValue="South Africa"
                                            id="input-country"
                                            placeholder="South Africa"
                                            type="text"
                                            size="sm"
                                            disabled
                                            name="country"
                                            value={this.state.country}
                                            onChange={
                                                this.handleCountryChange
                                            }
                                            prefix={
                                                <i class="fa fa-globe"></i>
                                            }
                                        />
                                    </>
                                </Col>
                                <Col lg="4">
                                    <>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-country">
                                            Postal code*
                                        </label>
                                        <Input
                                            id="input-postal-code"
                                            placeholder="eg 2001"
                                            type="number"
                                            size="sm"
                                            name="postalCode"
                                            value={this.state.postalCode}
                                            onChange={
                                                this.handlePostalCodeChange
                                            }
                                            prefix={
                                                <i class="fa fa-home"></i>
                                            }
                                        />
                                    </>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="3">
                                    {' '}
                                    <>
                                        {/* <UncontrolledDropdown group>
                  <DropdownToggle caret color="secondary">
                    Choose
                  </DropdownToggle>
                  <DropdownMenu>
                    {this.props.catergories.map((catergory) => (
                      <li>
                        <DropdownItem
                          href="#pablo"
                          onClick={this.handleCatergoryChange}
                          name=""
                        >
                          {catergory.name}
                        </DropdownItem>
                      </li>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown> */}
                                    </>
                                </Col>
                            </Row>
                        </div>
                    </Card>

                    <Card
                        className="bg-white shadow"
                        style={{ marginBottom: 30 }}>
                        <Col md="9">
                            <>
                                <label
                                    className="form-control-label"
                                    htmlFor="input-country">
                                    Facebook
                                </label>
                                <Input
                                    rows="4"
                                    placeholder="eg nikeholding"
                                    type="text"
                                    name="aboutUs"
                                    value={this.state.facebookLink}
                                    onChange={this.handleFacebookChange}
                                    prefix={
                                        <i class="fa fa-facebook-f"></i>
                                    }
                                />
                            </>
                        </Col>{' '}
                        <Col md="9">
                            <>
                                <label
                                    className="form-control-label"
                                    htmlFor="input-country">
                                    Instagram
                                </label>
                                <Input
                                    rows="4"
                                    placeholder="eg nikeholding"
                                    type="text"
                                    name="aboutUs"
                                    value={this.state.instagramLink}
                                    onChange={this.handleInstagramChange}
                                    prefix={<i class="fa fa-instagram"></i>}
                                />
                            </>
                        </Col>{' '}
                        {/* <Col md="9">
                                <>
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-country">
                                        Website Url*
                                    </label>
                                    <Input
                                        rows="4"
                                        placeholder="www.nikeholding.com"
                                        type="text"
                                        name="website"
                                        value={this.state.aboutUs}
                                        onChange={this.handleWebsiteChange}
                                        prefix={
                                            <i class="fa fa-map-marker"></i>
                                        }
                                    />
                                </>
                            </Col>{' '} */}
                        <Button
                            style={{ marginTop: '20px' }}
                            type="primary"
                            block
                            onClick={this.handleShowModalChange}>
                            Register Vendor
                        </Button>
                    </Card>

                </div>
            </>
        );
    }
}

// PlugApplication.defaultProps = {
//     catergories: [],
// };

const mapStateToProps = (state) => ({
    auth: state.auth.isAuthenticated,
    isAuthenticated: state.auth,
    loading: state.auth.loading,
    createdPlugLoading: state.createdPlug,
    isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { createVendorAction, setAlert })(
    VendorApplication
);
