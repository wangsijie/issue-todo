import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Empty, Tag } from 'antd';
import { decideFontColor } from '../../helpers/util';
import './index.less';

const { CheckableTag } = Tag;

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

    render() {
        const { rightBarCollapsed, selectedIssue, displayLabels } = this.context.store;
        const { labels: selectedLabels } = selectedIssue || {};
        return <div className="app-rightbar" data-is-collapsed={rightBarCollapsed}>
            {
                selectedIssue
                ? <div>
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
                </div>
                : <Empty description="NO SELECTION" />
            }
        </div>;
    }
}

export default RightBar;
