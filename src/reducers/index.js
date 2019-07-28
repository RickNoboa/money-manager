import {combineReducers} from "redux"
import handleTransactionsReducer from "./handleTransactionsReducer";
import totalBalanceReducer from "./totalBalanceReducer";

export default combineReducers({
    transactions: handleTransactionsReducer,
    balance: totalBalanceReducer
})