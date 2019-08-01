import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Icon } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { menus } from '../../constants/menus';
import Add from './add';
import './index.less';

@observer
class Header extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };

    toggleSidebar = () => {
        const { sidebarCollapsed, setSidebarCollapse } = this.context.store;
        setSidebarCollapse(!sidebarCollapsed);
    }

    render() {
        const { sidebarCollapsed } = this.context.store;
        return <header className="app-header">
			<div className="left-buttons">
                <button onClick={this.toggleSidebar}><Icon type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'} /></button>
                <button><Icon type="reload" /></button>
                <Add />
            </div>
            <div className="page-title">
                <Switch>
                    {
                        menus.map(menu => <Route key={menu.path} path={menu.path}>{menu.node}</Route>)
                    }
                </Switch>
            </div>
            <div className="right-buttons"></div>
        </header>;
    }
}

export default Header;
