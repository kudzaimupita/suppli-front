import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Menu } from 'antd';
import { menuPrimary } from '../../../public/static/data/menu';
import Link from 'next/link';

const { SubMenu } = Menu;

class PanelMenu extends Component {
    constructor(props) {
        super(props);
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: [],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(
            (key) => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        const menuAutopart = [
            {
                text: 'Home',
                url: '/',
                icon: (
                    <i
                        className="fa fa-home"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'grey',
                        }}></i>
                ),
            },
            {
                text: 'FAQs',
                url: '/faqs',
                icon: (
                    <i
                        className="fa fa-question-circle"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'grey',
                        }}></i>
                ),
            },
            {
                text: 'Suggest A Vendor',
                url: '/vendor/suggest-a-vendor',
                icon: (
                    <i
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'grey',
                        }}
                        className="fa fa-street-view"></i>
                ),
            },
            {
                text: 'Become A Vendor',
                url: '/vendor/become-a-vendor',
                icon: (
                    <i
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'grey',
                        }}
                        className="fa fa-street-view"></i>
                ),
            },
            {
                text: 'Invite A Friend',
                url: '/invite-a-friend',
                icon: (
                    <i
                        className="fa fa-user-plus"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'grey',
                        }}></i>
                ),
            },

            {
                text: 'Deals & Promotions',
                url: '/sale',
                icon: (
                    <i
                        className="fa fa-shopping-basket"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'grey',
                        }}></i>
                ),
            },
            {
                text: 'New Arrivals',
                url: '/new-arrivals',
                icon: (
                    <i
                        className="fa fa-shopping-bag"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'grey',
                        }}></i>
                ),
            },
            {
                text: 'Contact Us',
                url: '/contact',
                icon: (
                    <i
                        className="fa fa-map-pin"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'grey',
                        }}></i>
                ),
            },

            {
                text: 'About Us',
                url: '/about-us',
                icon: (
                    <i
                        className="fa fa-info-circle"
                        style={{
                            fontSize: '17px',
                            marginRight: '8px',
                            color: 'grey',
                        }}></i>
                ),
            },
        ];
        return (
            <div className="ps-panel__wrapper">
                <div className="ps-panel__header">
                    <h3>Menu</h3>
                </div>
                <div className="ps-panel__content">
                    <Menu
                        mode="inline"
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}>
                        {menuAutopart.map((item) => {
                            if (item.subMenu) {
                                return (
                                    <SubMenu
                                        key={item.text}
                                        title={
                                            <Link href={item.url}>
                                                <a>{item.text}</a>
                                            </Link>
                                        }>
                                        {item.subMenu.map((subItem) => (
                                            <Menu.Item key={subItem.text}>
                                                <Link href={subItem.url}>
                                                    <a>{subItem.text}</a>
                                                </Link>
                                            </Menu.Item>
                                        ))}
                                    </SubMenu>
                                );
                            } else if (item.megaContent) {
                                return (
                                    <SubMenu
                                        key={item.text}
                                        title={
                                            <Link href={item.url}>
                                                {item.icon} <a>{item.text}</a>
                                            </Link>
                                        }>
                                        {item.megaContent.map((megaItem) => (
                                            <SubMenu
                                                key={megaItem.heading}
                                                title={
                                                    <span>
                                                        {megaItem.heading}
                                                    </span>
                                                }>
                                                {megaItem.megaItems.map(
                                                    (megaSubItem) => (
                                                        <Menu.Item
                                                            key={
                                                                megaSubItem.text
                                                            }>
                                                            <Link
                                                                href={item.url}>
                                                                <a>
                                                                    {
                                                                        megaSubItem.text
                                                                    }
                                                                </a>
                                                            </Link>
                                                        </Menu.Item>
                                                    )
                                                )}
                                            </SubMenu>
                                        ))}
                                    </SubMenu>
                                );
                            } else {
                                return (
                                    <Menu.Item key={item.text}>
                                        {item.type === 'dynamic' ? (
                                            <Link
                                                href={`${item.url}/[pid]`}
                                                as={`${item.url}/${item.endPoint}`}>
                                                <a>{item.text}</a>
                                            </Link>
                                        ) : (
                                            <Link
                                                href={item.url}
                                                as={item.alias}>
                                                <a>
                                                    {' '}
                                                    {item.icon}
                                                    {item.text}
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                );
                            }
                        })}
                    </Menu>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.setting;
};

export default connect(mapStateToProps)(PanelMenu);
