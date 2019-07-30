import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class ListPage extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    render() {
        const { listIssues } = this.context.store;
        return <div>{
            listIssues.map(o => o.title)
        }</div>;
    }
}

export default ListPage;
