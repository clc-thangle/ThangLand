import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './index.css'
const { Header, Content, Footer, Sider } = Layout;
class Admin extends Component {
    render() {
        return (
            <Layout>
                <Col style={{ flex: 0, marginTop: '2.5%', marginLeft: '6.5%' }} span={6}>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}>
                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <Link to="/admin/showUser">Show User</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                <Link to="/admin/showProduct">Show Product</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                <Link to="/admin/showAddress">Show Address</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </Col>
                <Col span={18}>{this.props.children}</Col>
            </Layout>
        );
    }
}

export default Admin;