/**
 * Created by sunlong on 16/7/24.
 */
import React from "react";
import "antd/dist/antd.css";
import {Menu, Icon} from "antd";
import {Link} from "react-router";
import Auth from "../../common/Auth"
const SubMenu = Menu.SubMenu;

const Header = React.createClass({
    handleClick(e) {
        this.setState({
            current: e.key,
        });
        if(e.key == 'logout'){
            this.logout();
        }
    },
    logout(){
        new Auth().logout();
    },
    render() {
        return (
            <Menu onClick={this.handleClick}
                  selectedKeys={[this.props.current]}
                  mode="horizontal"
            >
                <Menu.Item key="dashboard">
                    <Link to="/dashboard.html"><Icon type="home" />Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="product">
                    <Link to="/user/product"><Icon type="appstore" />产品管理</Link>
                </Menu.Item>
                <Menu.Item key="user">
                    <Link to="/user/user"><Icon type="team" />用户管理</Link>
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />个人中心</span>}>
                    <Menu.Item key="userInfo"><Link to="/user/userInfo">修改个人信息</Link></Menu.Item>
                    <Menu.Item key="logout">退出</Menu.Item>
                </SubMenu>
            </Menu>
        );
    },
});

export default Header;