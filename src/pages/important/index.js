import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class ImportantPage extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    render() {
        const { importantIssues } = this.context.store;
        return <div>{
            importantIssues.map(o => o.title)
        }</div>;
    }
}

export default ImportantPage;
