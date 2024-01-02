import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers=combineReducers({
    amount:amountReducer
    //if multiple reducers then import them and export in here seperating by comma
})

export default reducers