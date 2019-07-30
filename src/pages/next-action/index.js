import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class NextActionPage extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    render() {
        const { nextActionIssues } = this.context.store;
        return <div>{
            nextActionIssues.map(o => o.title)
        }</div>;
    }
}

export default NextActionPage;
