import { takeTeaType } from "../../action/actionType";
let takeTeaList =JSON.parse(window.sessionStorage.getItem("takeTeaList"));

const defaultTaketeaState = {
    takeTeaList: takeTeaList ? takeTeaList : []
} 
const takeTeaReducer = (state = defaultTaketeaState, action) => {
    // console.log(action)
    switch (action.type) {
        case takeTeaType:
                window.sessionStorage.setItem("takeTeaList", JSON.stringify(action.val));
            return {
                ...state,
                takeTeaList:[...action.val]
            }
        default:
            return state;
    }
}
export default takeTeaReducer;