import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Empty } from 'antd';
import './index.less';

@observer
class RightBar extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };

    render() {
        const { rightBarCollapsed, selectedIssue } = this.context.store;
        return <div className="app-rightbar" data-is-collapsed={rightBarCollapsed}>
            {
                selectedIssue
                ? <div></div>
                : <Empty description="NO SELECTION" />
            }
        </div>;
    }
}

export default RightBar;
