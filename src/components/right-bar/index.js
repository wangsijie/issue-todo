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
        updateIssue(selectedIssue.number, changedValues);
    }

    render() {
        const { rightBarCollapsed, selectedIssue, displayLabels } = this.context.store;
        const { labels, title, created_at: createdAt, updated_at: updatedAt } = selectedIssue || {};
        return <div className="app-rightbar" data-is-collapsed={rightBarCollapsed}>
            {
                selectedIssue
                ? <Form
                    formData={{ title, labels, date: { createdAt, updatedAt } }}
                    onValuesChange={this.handleValuesChange}
                    displayLabels={displayLabels}
                />
                : <Empty description="NO SELECTION" />
            }
        </div>;
    }
}

export default RightBar;
