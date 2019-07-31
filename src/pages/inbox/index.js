import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import IssueList from '../../components/issue-list';

@observer
class InboxPage extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    render() {
        const { inboxIssues } = this.context.store;
        return <div><IssueList issues={inboxIssues} /></div>;
    }
}

export default InboxPage;
