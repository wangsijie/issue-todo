import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Issue from './issue';
import './index.less';

@observer
class IssueList extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    componentWillUnmount() {
        const { setSelectedIssueNumber } = this.context.store;
        setSelectedIssueNumber(0);
    }
    render() {
        const { issues } = this.props;
        return <div className="ui-issue-list">
            {
                issues.map(issue => <Issue key={issue.number} issue={issue}></Issue>)
            }
        </div>
    }
}

export default IssueList;
