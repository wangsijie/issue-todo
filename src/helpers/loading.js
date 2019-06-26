import { message } from 'antd';

let hideIndicator;
let request = 0;
export const pushRequest = (text) => {
    if (request++ === 0) {
        hideIndicator = message.loading(text || '正在加载', 0);
    }
};

export const popRequest = () => {
    if (request-- === 1) {
        hideIndicator();
    }
};