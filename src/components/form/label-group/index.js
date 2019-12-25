import React, { useCallback } from 'react';
import { Tag } from 'antd';
import { decideFontColor } from '../../../helpers/util';

import './index.less';

const { CheckableTag } = Tag;

const LabelGroup = React.forwardRef(({ dataSource, value, onChange }, ref) => {
    const handleLabelChange = useCallback((label, checked) => {
        if (onChange) {
            let newValue;
            if (checked) {
                newValue = [...value, label];
            } else {
                newValue = value.filter(o => o.name !== label.name);
            }
            onChange(newValue);
        }
    }, [onChange, value]);

    return <div className="ui-form-item-label-group" ref={ref}>
        {
            dataSource.map(label => <CheckableTag
                key={label.id}
                checked={value.some(o => o.name === label.name)}
                style={{
                    '--label-font-color': decideFontColor(label.color),
                    '--label-back-color': `#${label.color}`,
                }}
                onChange={checked => handleLabelChange(label, checked)}
            >
                {label.name}
            </CheckableTag>)
        }
    </div>
})

export default LabelGroup
