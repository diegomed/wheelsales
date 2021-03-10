import { Store, StoreValue } from "antd/lib/form/interface";

export interface LoginFormValues extends Store {
    email: string;
    password: string;
}

export interface RegisterFormValues extends Store {
    email: string;
    password: string;
    phone: number; 
    country: string;
    name: string;
}

export interface Action {
    type: string;
    payload?: any;
}

export interface RootState {
    user: UserState;
    request: RequestState;
}

export interface RequestState {
    is_loading_request: boolean
}

export interface UserState {
    user: any;
    loginError: string;
    registerError: string;
    token: string;
}