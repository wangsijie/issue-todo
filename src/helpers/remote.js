import axios from 'axios';
import { message } from 'antd';
import { pushRequest, popRequest } from './loading';

export const API_ROOT = 'https://api.github.com/repos/wangsijie/todo';

let token;

export const getHeaders = () => {
    const headers = {
        Accept: 'application/vnd.github.symmetra-preview+json',
    };
    if (!token) {
        token = localStorage.getItem('gist-token');
    }
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    return headers;
};

export const $request = async (
    endpoint,
    payload,
    {
        getData = {},
        hideLoading = false,
        loadingText = null,
        throwException = false,
        method = 'GET'
    } = {}
) => {
    try {
        if (!hideLoading) {
            pushRequest(loadingText);
        }

        let requestUrl =
            endpoint.indexOf(API_ROOT) === -1
                ? API_ROOT + endpoint
                : endpoint;
        Object.keys(getData).forEach((key, index) => {
            const value = getData[key];
            if (value === undefined) {
                return;
            }
            requestUrl += (index === 0 ? '?' : '&') + `${key}=${value}`;
        });
        let response;
        const headers = getHeaders();
        try {
            if (method === 'PUT') {
                response = await axios.put(requestUrl, payload, { headers });
            } else if (method === 'DELETE') {
                response = await axios.delete(requestUrl, { headers });
            } else if (method === 'POST') {
                response = await axios.post(requestUrl, payload, { headers });
            } else if (method === 'PATCH') {
                response = await axios.patch(requestUrl, payload, { headers });
            } else {
                response = await axios.get(requestUrl, { headers });
            }
            if (!hideLoading) {
                popRequest();
            }
        } catch (e) {
            if (!hideLoading) {
                popRequest();
            }
            throw e;
        }

        return response.data;
    } catch (e) {
        if (throwException === true) {
            throw e;
        } else if (e.message === 'Request failed with status code 401' || e.message === 'Request failed with status code 403') {
            message.error((e.response && e.response.data && e.response.data.message) || String(e));
            // localStorage.removeItem('token');
            // window.location.href = `${process.env.REACT_APP_SUB_DIRECTORY}/login`;
        } else {
            message.error((e.response && e.response.data && e.response.data.message) || String(e));
        }
    }
}

export const $get = (endpoint, payload, options = {}) => {
    options.getData = payload;
    return $request(endpoint, null, options);
}
export const $put = (endpoint, payload, options = {}) => {
    options.method = 'PUT';
    return $request(endpoint, payload, options);
}
export const $post = (endpoint, payload, options = {}) => {
    options.method = 'POST';
    return $request(endpoint, payload, options);
}
export const $patch = (endpoint, payload, options = {}) => {
    options.method = 'PATCH';
    return $request(endpoint, payload, options);
}
export const $delete = (endpoint, payload, options = {}) => {
    options.method = 'DELETE';
    return $request(endpoint, payload, options);
}
export const $upload = (endpoint, payload, options) => {
    const formData = new FormData();
    Object.keys(payload).forEach(key => formData.append(key, payload[key]));
    return $post(endpoint, formData, options);
}
export const isLogin = () => {
    if (!token) {
        token = localStorage.getItem('gist-token');
    }
    return !!token;
};
