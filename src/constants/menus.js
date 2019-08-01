import React from 'react';
import { Icon } from 'antd';

export const menus = [
    { path: '/', exact: true, node: <span><Icon type="inbox" /> Inbox</span> },
    { path: '/next-action', node: <span><Icon type="carry-out" /> Next Action</span> },
    { path: '/important', node: <span><Icon type="flag" /> Important</span> },
    { path: '/list', node: <span><Icon type="unordered-list" /> List</span> },
];
