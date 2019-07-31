import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import IssueList from '../../components/issue-list';

@observer
class ImportantPage extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    render() {
        const { importantIssues } = this.context.store;
        return <div><IssueList issues={importantIssues} /></div>;
    }
}

export default ImportantPage;
