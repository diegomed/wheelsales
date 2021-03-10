import { Reducer } from "redux";

import * as actionTypes from '../../actions/action-types';
import { RequestState } from "../../../../interfaces";

const initialState: RequestState = {
    is_loading_request: false
};

const requestReducer: Reducer<{}, any> = (state: any = initialState, action: any): object => {
    switch (action.type) {
        case actionTypes.IS_LOADING_REQUEST:
            return { ...state, is_loading_request: action.payload }
        default:
            return state;
    }
};

export default requestReducer;