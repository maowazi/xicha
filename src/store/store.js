import { createStore, combineReducers } from "redux";
import homeReducer from "./homeReducer/homeReducer";
import menuReducer from "./menuReducer/menuReducer";
import timeReducer from "./timeReducer/timerReducer";
import takeTeaReducer from "./takeTeaReducer/takeTeaReducer";
import mineRedeucer from "./mineReducer/mineReducer";
import userReducer from "./userReducer/userReducer";
const Reducer = combineReducers({
    homeReducer,
    menuReducer,
    timeReducer,
    takeTeaReducer,
    mineRedeucer,
    userReducer
})
const store = createStore(Reducer);
export default store;