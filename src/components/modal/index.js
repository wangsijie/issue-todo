import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Button } from 'antd';
import './index.less';

export default class Modal extends Component {
    static defaultProps = {
        okText: 'OK',
        visible: false,
        onCancel: () => {},
        onOk: () => {},
        okButtonProps: {},
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.changing && !prevState.visible && nextProps.visible) {
            return {
                changing: true,
            };
        }
        if (!prevState.changing && prevState.visible && !nextProps.visible) {
            return {
                changing: true,
                visible: false,
            };
        }
        return null;
    }
    state = {
        visible: false,
        changing: false,
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.visible && this.props.visible) {
            setTimeout(() => this.setState({ visible: true, changing: false }));
        } else if (prevProps.visible && !this.props.visible) {
            setTimeout(() => this.setState({ changing: false }), 280);
        }
    }
    render() {
        const { okText, onOk, onCancel, okButtonProps } = this.props;
        const { visible, changing } = this.state;
        if (!this.props.visible && !changing) {
            return null;
        }
        return createPortal(<aside className="ui-modal-cover">
            <div className="cover"></div>
            <div className="window">
                <div className="window-shadow" data-is-hide={!visible}>
                    <div className="body">{this.props.children}</div>
                    <div className="footer">
                        <div className="blank"></div>
                        <Button onClick={onCancel}>Cancel</Button>
                        <Button type="primary" onClick={onOk} {...okButtonProps}>{okText}</Button>
                    </div>
                </div>
            </div>
        </aside>, document.body);
    }
}
