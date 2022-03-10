import { combineReducers } from "redux";
import userReducer from "../user/reducers/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;
