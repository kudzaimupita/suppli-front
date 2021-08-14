import React, { Component } from 'react';
import { connect } from 'react-redux';
import { joinNewsletterAction } from './../../actions/newsletter';
import { setAlert } from './../../actions/alert';

class SubscribePopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubscribeShow: false,
            email: '',
        };
    }

    handleCloseSubscribePopup(e) {
        e.preventDefault();
        this.setState({ isSubscribeShow: false });
    }

    handleCloseSubscribePopup(e) {
        e.preventDefault();
        this.setState({ isSubscribeShow: false });
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isSubscribeShow: true });
        }, 10000);
    }

    onSubmit = async (e) => {
        if (!this.state.email)
            return this.props.setAlert('Please provide an email!', 'warning');
        e.preventDefault();
        this.props.joinNewsletterAction({
            email: this.state.email,
        });
        this.setState({ email: '' });
        this.setState({ isSubscribeShow: false });
    };

    render() {
        console.log(this.state);
        const { isSubscribeShow } = this.state;
        return (
            <>
                {this.props.isLoggedIn !== true ? (
                    <div
                        className={`ps-popup ${isSubscribeShow ? 'active' : ''
                            }`}
                        id="subscribe">
                        <div
                            className="ps-popup__content bg--cover"
                            style={{
                                backgroundImage:
                                    "url('/static/img/bg/subscribe.jpg')",
                            }}>
                            <a
                                className="ps-popup__close"
                                href="#"
                                onClick={(e) =>
                                    this.handleCloseSubscribePopup(e)
                                }>
                                <i className="icon-cross"></i>
                            </a>
                            <form
                                className="ps-form--subscribe-popup"
                                action="/"
                                method="get">
                                <div className="ps-form__content">
                                    <h4>
                                        Subscribe To Our{' '}
                                        <strong>Newsletter</strong>
                                    </h4>
                                    <p>
                                        Subscribe to the Suppl-i mailing list{' '}
                                        <br /> to receive updates on new
                                        arrivals, special offers
                                        <br /> and our promotions.
                                    </p>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Email Address"
                                            required
                                            onChange={this.handleEmailChange}
                                        />
                                        <button
                                            onClick={this.onSubmit}
                                            className="ps-btn"
                                            style={{
                                                backgroundColor: '#62c4b0',
                                                color: 'white'
                                            }}>
                                            Subscribe
                                        </button>
                                    </div>
                                    {/* <div className="ps-checkbox">
                                <input
                                    className="form-control"
                                    type="checkbox"
                                    id="not-show"
                                    name="not-show"
                                />
                                <label htmlFor="not-show">
                                    Don't show this popup again
                                </label>
                            </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
}
const mapStateToProps = (state) => ({ isLoggedIn: state.auth.isLoggedIn });

export default connect(mapStateToProps, { setAlert, joinNewsletterAction })(
    SubscribePopup
);
