import React, { Component } from 'react';
import { Icon } from 'antd';
import './issue.less';

class Issue extends Component {
    render() {
        const { issue } = this.props;
        return (
            <div className="ui-issue">
                <div className="check-box"></div>
                <div className="main">
                    <div className="title">{issue.title}</div>
                    <div className="flag"><Icon type="flag" /></div>
                </div>
            </div>
        );
    }
}

export default Issue;
