import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Icon } from 'antd';
import './header.less';

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
			<button onClick={this.toggleSidebar}><Icon type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'} /></button>
        </header>;
    }
}

export default Header;
