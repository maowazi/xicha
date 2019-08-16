import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import homeReducer from "./homeReducer/homeReducer";
import menuReducer from "./menuReducer/menuReducer";
import timeReducer from "./timeReducer/timerReducer";
import takeTeaReducer from "./takeTeaReducer/takeTeaReducer";
import mineRedeucer from "./mineReducer/mineReducer";
import userReducer from "./userReducer/userReducer";
import cartReducer from "./cartReducer/cartReducer";
const Reducer = combineReducers({
    homeReducer,
    menuReducer,
    timeReducer,
    takeTeaReducer,
    mineRedeucer,
    userReducer,
    cartReducer
})
const store = createStore(Reducer, applyMiddleware(ReduxThunk));
export default store;