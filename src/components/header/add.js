import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'antd';
import { observer } from 'mobx-react';
import Modal from '../modal';

@observer
class HeaderAdd extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    state = {
        modalVisible: false,
    }
    handleInputChange = value => {
        console.log(value);
        this.setState({ title: value });
    }
    submit = () => {
        const { addIssue } = this.context.store;
        const title = this.input.input.value;
        addIssue({ title });
        this.setState({ modalVisible: false });
    }
    render() {
        const { modalVisible } = this.state;
        return (
            <>
                <button onClick={() => this.setState({ modalVisible: true })}><Icon type="inbox" /></button>
                <Modal
                    okText="Add"
                    visible={modalVisible}
                    onCancel={() => this.setState({ modalVisible: false })}
                    onOk={this.submit}
                >
                    <Input
                        placeholder="Unnamed Task"
                        autoFocus
                        ref={input => this.input = input}
                    />
                </Modal>
            </>
        );
    };
}

export default HeaderAdd;
