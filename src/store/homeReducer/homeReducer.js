import {banner_list_type } from "../../action/actionType";
const defaultHomestate = {
    homeList:[]
}
const homeReducer = (state = defaultHomestate, action) => {
    switch (action.type) {
        case banner_list_type:
            return {
                ...state,
                homeList: action.val.data.imgData
            }
    
        default:
            return state;
    }
}
export default homeReducer;