import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { observer } from 'mobx-react';
import { Icon, Popover } from 'antd';
import './tag-filter.less';

@observer
class TagFilter extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    setVisible = (id, visible) => {
        const { updateLabelVisible } = this.context.store;
        updateLabelVisible(id, visible);
    }
    render() {
        return <Popover trigger="click" placement="bottomRight" content={this.renderContent()}>
            <button><Icon type="tags" /></button>
        </Popover>
    }
    renderContent() {
        const { labels } = this.context.store;
        return <div className="ui-header-tags-filter">
            {labels.filter(label => label.name !== 'important').map(label => <div className="popover-item" key={label.id} onClick={() => this.setVisible(label.id, !label.$visible)}>
                 <div className="check">{label.$visible && <Icon type="check" />}</div>
                <div className="color" style={{ backgroundColor: `#${label.color}` }}></div>
                <div className="name">{label.name}</div>
            </div>)}
        </div>
    }
}

export default TagFilter;
