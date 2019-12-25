import React, { useCallback } from 'react';
import { Tag } from 'antd';
import moment from 'moment';

import './index.less';

const Dates = React.forwardRef(({ value, onChange }, ref) => {
    const { createdAt, updatedAt } = value;
    return <div className="ui-form-item-dates" ref={ref}>
        <div className="dates-row">
            Created At: {moment(createdAt).format('YYYY/MM/DD HH:mm')}
        </div>
        <div className="dates-row">
            Updated At: {moment(updatedAt).format('YYYY/MM/DD HH:mm')}
        </div>
    </div>
})

export default Dates
