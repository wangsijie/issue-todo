import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import { menus } from '../constants/menus';
import './sidebar.less';

@observer
class Sidebar extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };

    render() {
        const { sidebarCollapsed } = this.context.store;
        return <div className="app-sidebar" data-is-collapsed={sidebarCollapsed}>
            <div className="sidebar-menu-group-title">Perspective</div>
            {
                menus.map(menu => <div className="sidebar-menu" key={menu.path}>
                    <NavLink to={menu.path} exact={menu.exact}>{menu.node}</NavLink>
                </div>)
            }
        </div>;
    }
}

export default Sidebar;
