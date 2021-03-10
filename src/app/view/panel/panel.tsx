import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useRouteMatch, Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  ShopOutlined,

} from '@ant-design/icons';

import Profile from './profile/profile';
import { useTranslation } from 'react-i18next';

const { Header, Sider, Content } = Layout;

const Panel = (props: any) => {
    const {t, i18n } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const { path, url } = useRouteMatch();

    const toggle = () => {
        setCollapsed(!collapsed);
    }

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <>
            <Layout className="absolute w-100 h-100">
                <Sider 
                    width={240}
                    trigger={null} 
                    collapsible 
                    collapsed={collapsed}
                    style={{position: 'fixed'}}
                    className="overflow-x-hidden bg-white h-100 fixed z-2"
                >
                    <Menu mode="inline" className="relative h-100" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"  icon={<ShopOutlined />}>
                            <Link to={url + "/profile"} >{t('My profile')}</Link>
                        </Menu.Item>
                        <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1">
                                <Link to={url + "/view-profile"} >Mi concesionario</Link>
                            </Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Sider>
                <Layout style={
                    { paddingLeft: collapsed ? 80 : 240}
                } className="relative h-100 w-100 overflow-x-hidden site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <div className="pl3">
                            {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
                                className: 'trigger',
                                onClick: toggle,
                            })}
                        </div>
                    </Header>
                    <Content
                        className="relative w-100 h-100"

                    >
                        <Switch>
                            <Route path={path + "/profile"} component={Profile} />
                            <Route path={path + "/view-profile"} render={() => <h1>page 2</h1>} />
                            <Route path={path + "/3"} render={() => <h1>page 3</h1>} />
                            <Route path={path + "/4"} render={() => <h1>page 4</h1>} />
                            <Route path={path + "/5"} render={() => <h1>page 5</h1>} />
                            <Redirect from="/" to={path + "/profile"} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default Panel;