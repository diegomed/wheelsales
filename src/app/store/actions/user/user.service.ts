import { Action, LoginFormValues, RegisterFormValues } from '../../../../interfaces';
import * as axios from '../../../core/services/api.service';
import * as actionTypes from '../action-types';
import { AxiosResponse, AxiosError } from 'axios';
import { notification, message } from 'antd';
import { useTranslation } from 'react-i18next';

export default class UserService {
   
    static dispatchRegister(dispatch: (arg0: Action) => void, data: RegisterFormValues) {
        message.loading({ content: 'Loading...', key: 'updateable' });
        axios.post('/register', data)
            .then((res: AxiosResponse) => {
                dispatch({
                    type: actionTypes.REGISTER_USER,
                    payload: res.data
                });
                // localStorage.setItem('TOKEN', res.data);
                // message.success({ content: 'Welcome!', duration: 4 });
                message.success({ content: 'Welcome!', key: 'updateable', duration: 2 });
            })
            .catch((err: AxiosError) => {
                dispatch({
                    type: actionTypes.LOGIN_ERROR,
                    payload: 'error de login'
                });
            });
    }

    static dispatchLogin(dispatch: (arg0: Action) => void, data: LoginFormValues) {
        message.loading({ content: 'Loading...', key: 'updateable' });
        axios.post('/login', data)
            .then((res: AxiosResponse) => {
                dispatch({
                    type: actionTypes.LOGIN_USER,
                    payload: res.data
                });
                localStorage.setItem('TOKEN', res.data);
                // message.success({ content: 'Welcome!', duration: 4 });
                message.success({ content: 'Welcome!', key: 'updateable', duration: 2 });
            })
            .catch((err: AxiosError) => {
                dispatch({
                    type: actionTypes.LOGIN_ERROR,
                    payload: 'error de login'
                });
            });
    }
}