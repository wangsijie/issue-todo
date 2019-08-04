import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Icon } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { menus } from '../../constants/menus';
import { goToIssue } from '../../helpers/remote';
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

    toggleRightBar = () => {
        const { rightBarCollapsed, setRightBarCollapse } = this.context.store;
        setRightBarCollapse(!rightBarCollapsed);
    }

    goToGithub = () => {
        const { selectedIssueNumber } = this.context.store;
        if (selectedIssueNumber) {
            goToIssue(selectedIssueNumber);
        }
    }

    render() {
        const { sidebarCollapsed, selectedIssueNumber } = this.context.store;
        return <header className="app-header">
			<div className="left-buttons">
                <button onClick={this.toggleSidebar}><Icon type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'} /></button>
                <button><Icon type="reload" /></button>
                <Add />
            </div>
            <div className="page-title">
                <Switch>
                    {
                        menus.map(menu => <Route key={menu.path} path={menu.path} exact={menu.exact}>{menu.node}</Route>)
                    }
                </Switch>
            </div>
            <div className="right-buttons">
                <button disabled={!selectedIssueNumber} onClick={this.goToGithub}><Icon type="github" /></button>
                <button onClick={this.toggleRightBar}><Icon type="info-circle" /></button>
            </div>
        </header>;
    }
}

export default Header;
