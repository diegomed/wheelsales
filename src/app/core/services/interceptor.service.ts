import axios from 'axios';
import { notification } from 'antd';
import store from '../../store/store';
import * as actionTypes from '../../store/actions/action-types'


// const STORE =  store;
const BASE_URL_API = 'http://localhost:8080';

const server = axios.create({
    baseURL: BASE_URL_API,
    timeout: 5000,
});

const TOKEN = localStorage.getItem('TOKEN');

server.interceptors.request.use(
    (config) => {
        store.dispatch({
            type: actionTypes.IS_LOADING_REQUEST,
            payload: true
        })
        // config.headers.Authorization = `Bearer ${TOKEN}`;
        // Do something before request is sent
        // Store de redux para activar spinner
        return config;
    }, 
    (error) => {
        store.dispatch({
            type: actionTypes.IS_LOADING_REQUEST,
            payload: false
        })
        // Do something with request error
        // Apagar el spinner
        return Promise.reject(error);
    }
);

// Add a response interceptor
server.interceptors.response.use(
    (response) => {
        store.dispatch({
            type: actionTypes.IS_LOADING_REQUEST,
            payload: false
        })
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        // Apagar el spinner
        return response;
    },
    (error) => {
        store.dispatch({
            type: actionTypes.IS_LOADING_REQUEST,
            payload: false
        })
        notification.error({
            message: 'Ocurrió un error',
            placement: 'bottomRight',
            className: 'className',
            duration: 100
        });
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        // Apagar el spinner
        return Promise.reject(error);
    }
);

export default server;