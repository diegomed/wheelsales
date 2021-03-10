import { Reducer } from "redux";

import * as actionTypes from '../../actions/action-types';

const initialState = {
    user: null,
    loginError: null,
    token: null,
    registerUser: null
};

const userReducer: Reducer<{}, any> = (state: any = initialState, action: any): object => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return { ...state, user: action.payload };
        case actionTypes.LOGIN_ERROR:
            return { ...state, loginError: action.payload };
        case actionTypes.REGISTER_USER:
            return { ...state, registerUser: action.payload };
        default:
            return state;
    }
};

export default userReducer;