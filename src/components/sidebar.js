import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import { REPO_URL } from '../helpers/remote';
import { menus } from '../constants/menus';
import './sidebar.less';

@observer
class Sidebar extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };

    logout() {
        localStorage.removeItem('issue-todo-token');
        localStorage.removeItem('issue-todo-repo');
        window.location.href = '/';
    }

    render() {
        const { sidebarCollapsed } = this.context.store;
        return <div className="app-sidebar" data-is-collapsed={sidebarCollapsed}>
            <div className="sidebar-menu-group-title">Perspective</div>
            {
                menus.map(menu => <div className="sidebar-menu" key={menu.path}>
                    <NavLink to={menu.path} exact={menu.exact}>{menu.node}</NavLink>
                </div>)
            }
            <div className="login-info">
                <p className="logout" onClick={this.logout}>repo:<Icon type="logout" /></p>
                <p className="repo-url">{REPO_URL}</p>
            </div>
        </div>;
    }
}

export default Sidebar;
