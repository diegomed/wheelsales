import * as axios from '../../../core/services/api.service';
import * as actionTypes from '../action-types';
import { LoginFormValues, Action, RegisterFormValues } from '../../../../interfaces';
import UserService from './user.service';


export const sendLogin = (values: LoginFormValues) => {
    return (dispatch: (arg0: Action) => void) => {
        UserService.dispatchLogin(dispatch, values);
    }
}

export const sendRegister = (values: RegisterFormValues) => {
    return (dispatch: (arg0: Action) => void) => {
        UserService.dispatchRegister(dispatch, values);
    }
}