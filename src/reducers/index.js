import {combineReducers} from "redux"
import transactionsReducer from "./transactionsReducer";
import balanceReducer from "./balanceReducer";

export default combineReducers({
    transactions: transactionsReducer,
    balance: balanceReducer
})