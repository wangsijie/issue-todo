import store from '../store';

export const pushRequest = () => {
    store.pushLoading();
};

export const popRequest = () => {
    store.popLoading();
};