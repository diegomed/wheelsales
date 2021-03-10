import { combineReducers } from "redux";
import requestReducer from './request/request.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    request: requestReducer
});

export default rootReducer;