import { combineReducers } from "redux";
import userReducer from "../user/reducers/userReducer";
import accountsReducer from "../accounts/reducer/AccountsReducer";
// import AccountsReducer from "../accounts/reducer/accountsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    accounts: accountsReducer,
});

export default rootReducer;
