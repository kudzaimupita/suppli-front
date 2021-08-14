import React from 'react';
// import { createVendor} from "../actions/vendors";
import { connect } from 'react-redux';
import axios from 'axios';
// import { setAlert } from "../actions/alert";
import {
    UserOutlined,
    FacebookOutline,
    InstagramOutline,
    InsuranceTwoTone,
    InstagramFill,
} from '@ant-design/icons';
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
import { createPlug, suggestAVendorAction } from './../../../actions/vendors';
const { Panel } = Collapse;
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { setAlert } from './../../../actions/alert';
import '../../tailwind.scss'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../../components/tailwind.scss'
import { Spinner } from 'react-activity';
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

class PlugApplication extends React.Component {
    toggleModal = (state) => {
        this.setState({
            [state]: !this.state[state],
        });
    };
    state = {
        loading: false,
        suggestor: '',
        vendorName: '',
        vendorEmail: '',
        vendorPhone: '',
        vendorCity: '',
        vendorProvince: '',
        vendorAddress: '',
        vendorCountry: 'South Africa',
        vendorWebsite: '',
        vendorFacebookLink: '',
        vendorInstagramLink: '',
        isModalVisible: false,
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
        this.setState({ vendorFacebookLink: e.target.value });
    };

    handleInstagramChange = (e) => {
        this.setState({ vendorInstagramLink: e.target.value });
    };

    handleShowModalChange = (e) => {
        this.setState({ isModalVisible: true });
    };
    handleCancelModal = (e) => {
        this.setState({ isModalVisible: false });
    };

    handleVendorNameChange = (e) => {
        this.setState({ vendorName: e.target.value });
    };

    handleVendorEmailChange = (e) => {
        this.setState({ vendorEmail: e.target.value });
    };

    handleVendorPhoneChange = (e) => {
        this.setState({ vendorPhone: e.target.value });
    };

    handleVendorAddressChange = (e) => {
        this.setState({ vendorAddress: e.target.value });
    };

    handleVendorCityChange = (e) => {
        this.setState({ vendorCity: e.target.value });
    };

    handleVendorCountryChange = (e) => {
        this.setState({ vendorCountry: e.target.value });
    };
    handleVendorProvinceChange = (e) => {
        this.setState({ vendorProvince: e.target.value });
    };

    handleVendorWebsiteChange = (e) => {
        this.setState({ vendorWebsite: e.target.value });
    };

    handleSuggestor = (e) => {
        this.setState({ suggestor: e.target.value });
    };

    handleImage1Change = (e) => {
        this.setState({ image1: URL.createObjectURL(e.target.files[0]) });
    };

    handleCatergoryChange = (e) => {
        this.setState({ catergory: e.target.value });
    };
    onSubmit = async (e) => {
        if (!this.state.suggestor)
            return this.props.setAlert('Please enter your name', 'warning');
        if (!this.state.vendorName)
            return this.props.setAlert(
                'Please enter the vendor name',
                'warning'
            );

        if (!this.state.vendorEmail || !this.state.vendorPhone)
            return this.props.setAlert(
                'Please provide atleast one means of contact',
                'warning'
            );
        this.props.suggestAVendorAction({
            vendorWebsite: this.state.vendorWebsite,
            vendorFacebook: this.state.vendorFacebookLink,
            vendorInstagram: this.state.vendorInstagramLink,
            vendorEmail: this.state.vendorEmail,
            vendorName: this.state.vendorName,
            vendorPhone: this.state.vendorPhone,
            aboutUs: this.state.aboutUs,
            vendorCity: this.state.vendorCity,
            vendorCountry: this.state.vendorCountry,
            vendorAddress: this.state.vendorAddress,
            vendorProvince: this.state.vendorProvince,
            suggestor: this.state.suggestor,
        });
        this.setState({
            suggestor: '',
            vendorName: '',
            vendorEmail: '',
            vendorPhone: '',
            vendorCity: '',
            vendorProvince: '',
            vendorAddress: '',
            vendorCountry: 'South Africa',
            vendorWebsite: '',
            vendorFacebookLink: '',
            vendorInstagramLink: '',
        });
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
                    style={{ maxWidth: '700px', paddingTop: '20px' }}>
                    {' '}
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                start your 14-day free trial
                            </a>
                        </p>
                    </div>

                    <div
                        className="shadow bg-white overflow-hidden border-b border-gray-200 sm:rounded-lg"
                        style={{ marginBottom: 20 }}>


                        {/* <Modal
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

                                            <Button
                                                style={{ marginLeft: '20px' }}
                                                type="primary"
                                                loading={loading}
                                                onClick={this.onSubmit}>
                                                {this.props
                                                    .createdPlugLoading ? (
                                                    <Spin />
                                                ) : null}{' '}
                                                I Agree
                                            </Button>,
                                        ]}>
                                        <Collapse accordion>
                                            <Panel
                                                header="Vendor Terms Of Use"
                                                key="1"></Panel>
                                        </Collapse>
                                        ,
                                        <p>
                                            {' '}
                                            * Important * By clicking the I
                                            agree button you accept that you've
                                            read and accepted the terms of use.
                                        </p>
                                    </Modal> */}

                        <>
                            <Form style={{ marginTop: '30px', marginBottom: '30px', marginRight: '20px' }}>
                                {/* <h3 style={{ marginBottom: '20px' }} className="mb-0">
                                    Suggest A Store
                                </h3> */}

                                <div className="pl-sm-4">
                                    <Row>
                                        <Col lg="6">
                                            <>
                                                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                                    Your  Name<span style={{ color: 'red' }}>*</span>
                                                </label>
                                                <Input
                                                    size={'large'}
                                                    id="input-username"
                                                    placeholder="Your name"
                                                    type="text"
                                                    prefix={
                                                        <i class="fa fa-user"></i>
                                                    }
                                                    name="name"
                                                    value={this.state.suggestor}
                                                    onChange={
                                                        this.handleSuggestor
                                                    }
                                                />
                                            </>
                                        </Col>
                                        <Col lg="6">
                                            <>
                                                <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                                    Store  Name<span style={{ color: 'red' }}>*</span>
                                                </label>
                                                <Input
                                                    size={'large'}
                                                    id="input-username"
                                                    placeholder="Store Name"
                                                    type="text"
                                                    prefix={
                                                        <i class="fa fa-shopping-bag"></i>
                                                    }
                                                    name="name"
                                                    value={
                                                        this.state.vendorName
                                                    }
                                                    onChange={
                                                        this
                                                            .handleVendorNameChange
                                                    }
                                                />
                                            </>
                                        </Col>
                                        <Col lg="6">
                                            <>
                                                <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                                    Store Email<span style={{ color: 'red' }}>*</span>
                                                </label>
                                                <Input
                                                    size={'large'}
                                                    id="input-email"
                                                    placeholder="Email"
                                                    type="email"
                                                    name="email"
                                                    value={
                                                        this.state.vendorEmail
                                                    }
                                                    onChange={
                                                        this
                                                            .handleVendorEmailChange
                                                    }
                                                    prefix={
                                                        <i class="fa fa-envelope"></i>
                                                    }
                                                />
                                            </>
                                        </Col>
                                        <Col lg="6">
                                            <>
                                                <label htmlFor="name" className="text-sm font-medium text-gray-700 mt-2">
                                                    Store Phone<span style={{ color: 'red' }}>*</span>
                                                </label>
                                                <Input
                                                    size={'large'}
                                                    // id="input-email"
                                                    placeholder="Phone"
                                                    // type="tel"
                                                    size="sm"
                                                    name="phone"
                                                    value={
                                                        this.state.vendorPhone
                                                    }
                                                    onChange={
                                                        this
                                                            .handleVendorPhoneChange
                                                    }
                                                    prefix={
                                                        <i class="fa fa-phone"></i>
                                                    }
                                                />
                                            </>
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        </>
                    </div>
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
                                            size={'large'}
                                            id="input-address"
                                            placeholder="89 Smitch Avenue, building 4, floor 45"
                                            type="text"
                                            size="sm"
                                            name="address"
                                            value={this.state.vendorAddress}
                                            onChange={
                                                this.handleVendorAddressChange
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
                                            size={'large'}
                                            id="input-city"
                                            placeholder="Cape Town"
                                            type="text"
                                            size="sm"
                                            name="city"
                                            value={this.state.vendorCity}
                                            onChange={
                                                this.handleVendorCityChange
                                            }
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
                                            size={'large'}
                                            defaultValue="South Africa"
                                            id="input-country"
                                            placeholder="South Africa"
                                            type="text"
                                            size="sm"
                                            disabled
                                            name="country"
                                            value={this.state.vendorCountry}
                                            onChange={
                                                this.handleVendorCountryChange
                                            }
                                            prefix={<i class="fa fa-globe"></i>}
                                        />
                                    </>
                                </Col>
                                <Col lg="4">
                                    <>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-country">
                                            Province
                                        </label>
                                        <Input
                                            size={'large'}
                                            placeholder="eg Gauteng"
                                            type="text"
                                            size="sm"
                                            // disabled
                                            name="country"
                                            value={this.state.vendorProvince}
                                            onChange={
                                                this.handleVendorProvinceChange
                                            }
                                            prefix={<i class="fa fa-globe"></i>}
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
                                    Facebook handle
                                </label>
                                <Input
                                    size={'large'}
                                    rows="4"
                                    placeholder="eg nikeholding"
                                    type="text"
                                    name="aboutUs"
                                    value={this.state.vendorFacebookLink}
                                    onChange={this.handleFacebookChange}
                                    prefix={<i class="fa fa-facebook-f"></i>}
                                />
                            </>
                        </Col>{' '}
                        <Col md="9">
                            <>
                                <label
                                    className="form-control-label"
                                    htmlFor="input-country">
                                    Instagram handle
                                </label>
                                <Input
                                    size={'large'}
                                    rows="4"
                                    placeholder="eg nikeholding"
                                    type="text"
                                    name="aboutUs"
                                    value={this.state.vendorInstagramLink}
                                    onChange={this.handleInstagramChange}
                                    prefix={<i class="fa fa-instagram"></i>}
                                />
                            </>
                        </Col>{' '}
                        <Col md="9">
                            <>
                                <label
                                    className="form-control-label"
                                    htmlFor="input-country">
                                    Website Url*
                                </label>
                                <Input
                                    size={'large'}
                                    rows="4"
                                    placeholder="www.nikeholding.com"
                                    type="text"
                                    name="website"
                                    value={this.state.vendorWebsite}
                                    onChange={this.handleVendorWebsiteChange}
                                    prefix={<i class="fa fa-map-marker"></i>}
                                />
                            </>
                        </Col>{' '}
                        <Button
                            style={{ marginTop: '20px' }}
                            type="primary"
                            block
                            onClick={(e) => this.onSubmit(e)}>
                            Confirm
                        </Button>
                    </Card>
                </div>
            </>
        );
    }
}

PlugApplication.defaultProps = {
    catergories: [],
};

const mapStateToProps = (state) => ({
    // auth: state.auth.isAuthenticated,
    // isAuthenticated: state.auth,
    // loading: state.auth.loading,
    createdPlugLoading: state.createdPlug,
    // catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, { suggestAVendorAction, setAlert })(
    PlugApplication
);
