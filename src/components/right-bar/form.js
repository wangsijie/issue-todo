import React from 'react';
import { Form, Input } from 'antd';
import LabelGroup from '../form/label-group';
import Dates from '../form/dates';

function RightBarForm({ form, displayLabels }) {
    const { getFieldDecorator } = form;
    return <Form>
        <Form.Item label="Title">
            {getFieldDecorator('title')(<Input.TextArea rows={4} />)}
        </Form.Item>
        <Form.Item label="Label">
            {getFieldDecorator('labels')(<LabelGroup dataSource={displayLabels} />)}
        </Form.Item>
        <Form.Item label="Date">
            {getFieldDecorator('date')(<Dates />)}
        </Form.Item>
    </Form>
}

export default Form.create({
    name: 'right-bar-form',
    mapPropsToFields({ formData }) {
        if (!formData) {
            return {};
        }
        return {
            title: Form.createFormField({ value: formData.title }),
            labels: Form.createFormField({ value: formData.labels || [] }),
            date: Form.createFormField({ value: formData.date || {} }),
        };
    },
    onValuesChange(props, changedValues, allValues) {
        if (props.onValuesChange) {
            props.onValuesChange(changedValues, allValues);
        }
    },
})(RightBarForm)
