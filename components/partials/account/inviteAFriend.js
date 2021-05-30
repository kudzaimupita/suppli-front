import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';
import { inviteAFriendAction } from '../../../actions/vendors';
import { setAlert } from '../../../actions/alert';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {
        name: '',
        email: '',
        friendEmail: '',
        friendName: '',
    };

    formData = {
        email: this.state.email,
        name: this.state.name,
        friendName: this.state.friendName,
        friendEmail: this.state.friendEmail,
    };
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleFriendNameChange = (e) => {
        this.setState({ friendName: e.target.value });
    };

    handleFriendEmailChange = (e) => {
        this.setState({ friendEmail: e.target.value });
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleSubmit = (e) => {
        if (
            !this.state.email ||
            !this.state.name ||
            !this.state.friendName ||
            !this.state.friendEmail
        )
            return this.props.setAlert('Please enter all fields', 'warning');

        e.preventDefault();
        const invite = {
            name: this.state.name,
            email: this.state.email,
            friendEmail: this.state.email,
            friendName: this.state.friendName,
        };
        this.props.inviteAFriendAction(invite);
        this.setState({ name: '' });
        this.setState({ email: '' });
        this.setState({ friendEmail: '' });
        this.setState({ friendName: '' });
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         this.props.dispatch(login());
        //         Router.push('/');
        //     } else {
        //     }
        // });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(this.state);
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onSubmit={this.handleLoginSubmit}>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Invite Your Friend</h5>
                                <div className="form-group">
                                    <Form.Item>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Your Name"
                                            onChange={this.handleNameChange}
                                            value={this.state.name}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Your Email"
                                            onChange={this.handleEmailChange}
                                            value={this.state.email}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Friend Name"
                                            onChange={
                                                this.handleFriendNameChange
                                            }
                                            value={this.state.friendName}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Friend Email"
                                            onChange={
                                                this.handleFriendEmailChange
                                            }
                                            value={this.state.friendEmail}
                                        />
                                    </Form.Item>
                                </div>

                                <div className="form-group submit">
                                    <button
                                        style={{
                                            backgroundColor: '#62c4b0',
                                            color: 'white',
                                        }}
                                        onClick={(e) => this.handleSubmit(e)}
                                        className="ps-btn ps-btn--fullwidth">
                                        Invite
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                {/* <ul className="ps-list--social">
                                    <li>
                                        <a
                                            className="facebook"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e)}>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="google"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e)}>
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="twitter"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e)}>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e)}>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const WrapFormLogin = Form.create()(Login);
const mapStateToProps = (state) => {
    return state.auth;
};
export default connect(mapStateToProps, { inviteAFriendAction, setAlert })(
    WrapFormLogin
);
