import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { logOut } from '../../../../store/auth/action';

const AccountMenuSidebar = (props) => (
    <aside className="ps-widget--account-dashboard">
        <div className="ps-widget__header">
            <img src="/static/img/users/3.jpg" />
            <figure>
                <figcaption>Hello {user && user.name}</figcaption>
                <p>{user && user.email}</p>
            </figure>
        </div>
        <div className="ps-widget__content">
            <ul>
                {data.map((link) => (
                    <li key={link.text} className={link.active ? 'active' : ''}>
                        <Link href={link.url}>
                            <a>
                                <i className={link.icon}></i>
                                {link.text}
                            </a>
                        </Link>
                    </li>
                ))}
                <li>
                    <a onClick={() => props.logOut()}>
                        <i className="icon-power-switch"></i>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </aside>
);
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth,
    loading: state.auth.loading,
    createdPlugLoading: state.createdPlug,
});

export default connect(mapStateToProps, { logOut })(AccountMenuSidebar);
