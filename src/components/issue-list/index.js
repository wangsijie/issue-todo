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
        this.clearSelection();
    }
    clearSelection = () => {
        const { setSelectedIssueNumber } = this.context.store;
        setSelectedIssueNumber(0);
    }
    render() {
        const { issues } = this.props;
        return <div className="ui-issue-list">
            <div className="ui-issue-list-body">
                {
                    issues.map(issue => <Issue key={issue.number} issue={issue}></Issue>)
                }
            </div>
            <div className="ui-issue-list-blank" onClick={this.clearSelection}></div>
        </div>
    }
}

export default IssueList;
