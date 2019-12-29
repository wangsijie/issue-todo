import React, { useCallback } from 'react';
import { DatePicker, Form } from 'antd';
import moment from 'moment';

import './index.less';

const Dates = React.forwardRef(({ value, onChange }, ref) => {
    const { createdAt, updatedAt, defer } = value;
    const handleDeferChange = useCallback(value => {
        onChange({
            defer: value ? value.format('YYYY-MM-DD HH:mm:ss') : null,
        });
    }, [onChange]);
    const handleAddDay = useCallback(() => {
        onChange({
            defer: moment(defer).add(1, 'day').format('YYYY-MM-DD HH:mm:ss'),
        })
    }, [onChange, defer]);
    const handleAddMonth = useCallback(() => {
        onChange({
            defer: moment(defer).add(1, 'month').format('YYYY-MM-DD HH:mm:ss'),
        })
    }, [onChange, defer]);
    const handleAddWeek = useCallback(() => {
        onChange({
            defer: moment(defer).add(1, 'week').format('YYYY-MM-DD HH:mm:ss'),
        })
    }, [onChange, defer]);
    return <div className="ui-form-item-dates" ref={ref}>
        <Form.Item label="Defer Until">
            <DatePicker
                value={defer ? moment(defer) : null}
                onChange={handleDeferChange}
                placeholder=""
                showTime={{ format: 'HH:mm', secondStep: 60, defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                format="YYYY/MM/DD HH:mm"
                showToday={false}
                style={{ width: '100%' }}
            />
            <div className="quick-select-buttons">
                <button onClick={handleAddDay}>+1 Day</button>
                <button onClick={handleAddWeek}>+1 Week</button>
                <button onClick={handleAddMonth}>+1 Month</button>
            </div>
        </Form.Item>
        <div className="sub-form">
            <Form.Item label="Added" labelAlign="left" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                {moment(createdAt).format('YYYY/MM/DD HH:mm')}
            </Form.Item>
            <Form.Item label="Changed" labelAlign="left" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                {moment(updatedAt).format('YYYY/MM/DD HH:mm')}
            </Form.Item>
        </div>
    </div>
})

export default Dates
