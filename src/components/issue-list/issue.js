import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { observer } from 'mobx-react';
import { decideFontColor } from '../../helpers/util';
import './issue.less';

@observer
class Issue extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    handleCheckBoxClick = () => {
        const { issue } = this.props;
        if (issue.$closed) {
            return;
        }
        const { closeIssue } = this.context.store;
        closeIssue(issue.number);
    }
    render() {
        const { issue } = this.props;
        return (
            <div className="ui-issue">
                <div className="check-box" onClick={this.handleCheckBoxClick}>
                    {issue.$closed && <div className="closed" />}
                </div>
                <div className="main">
                    <div className="title" data-is-closed={issue.$closed}>{issue.title}</div>
                    <div className="labels">
                        {
                            issue.$displayLabels.map(label => <div
                                className="label"
                                key={label.id}
                                style={{
                                    backgroundColor: `#${label.color}`,
                                    color: decideFontColor(label.color),
                                }}
                            >
                                {label.name}
                            </div>)
                        }
                    </div>
                    <div className="flag"><Icon type="flag" /></div>
                </div>
            </div>
        );
    }
}

export default Issue;
