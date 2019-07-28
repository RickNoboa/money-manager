import {combineReducers} from "redux"
import addTransactionReducer from "./addTransactionReducer"

export default combineReducers({
    transactions: addTransactionReducer
})