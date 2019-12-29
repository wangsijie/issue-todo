import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Empty } from 'antd';
import Form from './form';
import './index.less';

@observer
class RightBar extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };

    handleLabelChange = (label, checked) => {
        const { updateIssue, selectedIssue } = this.context.store;
        let { labels } = selectedIssue;
        if (checked) {
            labels = [...labels, label];
        } else {
            labels = labels.filter(o => o.name !== label.name);
        }
        updateIssue(selectedIssue.number, { labels });
    }

    handleValuesChange = (changedValues, allValues) => {
        const { updateIssue, selectedIssue } = this.context.store;
        if (changedValues.date && changedValues.date.defer !== undefined) {
            updateIssue(selectedIssue.number, { meta: { defer: changedValues.date.defer } });
        } else {
            updateIssue(selectedIssue.number, changedValues);
        }
    }

    render() {
        const { rightBarCollapsed, selectedIssue, displayLabels } = this.context.store;
        const { labels, title, created_at: createdAt, updated_at: updatedAt, meta } = selectedIssue || {};
        return <div className="app-rightbar" data-is-collapsed={rightBarCollapsed}>
            {
                selectedIssue
                ? <Form
                    formData={{ title, labels, date: { createdAt, updatedAt, defer: meta.defer } }}
                    onValuesChange={this.handleValuesChange}
                    displayLabels={displayLabels}
                />
                : <Empty description="NO SELECTION" />
            }
        </div>;
    }
}

export default RightBar;
