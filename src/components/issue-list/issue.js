import React, { Component } from 'react';
import { Icon } from 'antd';
import { decideFontColor } from '../../helpers/util';
import './issue.less';

class Issue extends Component {
    render() {
        const { issue } = this.props;
        return (
            <div className="ui-issue">
                <div className="check-box"></div>
                <div className="main">
                    <div className="title">{issue.title}</div>
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
