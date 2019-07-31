import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import IssueList from '../../components/issue-list';

@observer
class NextActionPage extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    render() {
        const { nextActionIssues } = this.context.store;
        return <div>
            <IssueList issues={nextActionIssues} />
        </div>;
    }
}

export default NextActionPage;
