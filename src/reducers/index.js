import {combineReducers} from "redux"
import handleTransactionsReducer from "./handleTransactionsReducer";

export default combineReducers({
    transactions: handleTransactionsReducer
})