import {menuLeftNav_type } from "../../action/actionType";
const defaultMenustate = {
    menuLeftNav: []
}
const menuReducer = (state = defaultMenustate, action) => {
    console.log(action)
    switch (action.type) {
        case menuLeftNav_type:
            return {
                ...state,
                menuLeftNav:action.val.data
            }
        default:
            break;
    }
    return state
}
export default menuReducer;