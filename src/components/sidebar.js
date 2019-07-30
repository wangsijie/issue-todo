import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import './sidebar.less';

@observer
class Sidebar extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };

    render() {
        const { sidebarCollapsed } = this.context.store;
        return <div className="app-sidebar" data-is-collapsed={sidebarCollapsed}>
				
        </div>;
    }
}

export default Sidebar;
