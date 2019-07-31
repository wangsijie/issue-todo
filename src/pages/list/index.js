import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import IssueList from '../../components/issue-list';

@observer
class ListPage extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    render() {
        const { listIssues } = this.context.store;
        return <div><IssueList issues={listIssues} /></div>;
    }
}

export default ListPage;
