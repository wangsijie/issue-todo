import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class InboxPage extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    render() {
        const { inboxIssues } = this.context.store;
        return <div>{
            inboxIssues.map(o => o.title)
        }</div>;
    }
}

export default InboxPage;
