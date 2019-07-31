import React, { Component } from 'react';
import Issue from './issue';
import './index.less';

export default class IssueList extends Component {
    render() {
        const { issues } = this.props;
        return <div className="ui-issue-list">
            {
                issues.map(issue => <Issue key={issue.number} issue={issue}></Issue>)
            }
        </div>
    }
}
