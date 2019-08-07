import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Empty, Tag, Input } from 'antd';
import moment from 'moment';
import { decideFontColor } from '../../helpers/util';
import './index.less';

const { CheckableTag } = Tag;
const { TextArea } = Input;

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

    handleTitleChange = () => {
        const title = this.titleRef.textAreaRef.value;
        const { updateIssue, selectedIssue } = this.context.store;
        updateIssue(selectedIssue.number, { title });
    }

    render() {
        const { rightBarCollapsed, selectedIssue, displayLabels } = this.context.store;
        const { labels: selectedLabels, title, created_at: createdAt, updated_at: updatedAt } = selectedIssue || {};
        return <div className="app-rightbar" data-is-collapsed={rightBarCollapsed}>
            {
                selectedIssue
                ? <div>
                    <div className="app-rightbar-form-item">
                        <label>Title</label>
                        <div className="app-rightbar-form-item-body">
                            <TextArea defaultValue={title} rows={4} onChange={this.handleTitleChange} ref={ref => this.titleRef = ref} />
                        </div>
                    </div>
                    <div className="app-rightbar-form-item">
                        <label>Label</label>
                        <div className="app-rightbar-form-item-body">
                            {
                                displayLabels.map(label => <CheckableTag
                                    key={label.id}
                                    checked={selectedLabels.some(o => o.name === label.name)}
                                    style={{
                                        '--label-font-color': decideFontColor(label.color),
                                        '--label-back-color': `#${label.color}`,
                                    }}
                                    onChange={checked => this.handleLabelChange(label, checked)}
                                >
                                    {label.name}
                                </CheckableTag>)
                            }
                        </div>
                    </div>
                    <div className="app-rightbar-form-item">
                        <label>Date</label>
                        <div className="app-rightbar-form-item-body">
                            Created At: {moment(createdAt).format('YYYY/MM/DD HH:mm')}
                        </div>
                        <div className="app-rightbar-form-item-body">
                            Updated At: {moment(updatedAt).format('YYYY/MM/DD HH:mm')}
                        </div>
                    </div>
                </div>
                : <Empty description="NO SELECTION" />
            }
        </div>;
    }
}

export default RightBar;
