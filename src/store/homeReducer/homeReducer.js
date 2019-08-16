import { banner_list_type, address_list_type,selectCity_type} from "../../action/actionType";
const defaultHomestate = {
    homeList: [],
    addressList: [],
    selectCity: "壹方城店",
    selectIndex: -1
}
const homeReducer = (state = defaultHomestate, action) => {
    // console.log(action)
    switch (action.type) {
        case banner_list_type:
            return {
                ...state,
                homeList: action.val.data.imgData
            }
        case address_list_type:
            return {
                ...state,
                addressList:action.val.data
            }
        case selectCity_type:
            return {
                ...state,
                selectCity:action.val
            }
        case "CHANGE_SELECTINDEX":
            return {
                ...state,
                addressList: state.addressList.map((item,index) => {
                    if (index === action.index) {
                        return {
                            ...item,
                            flag:!item.flag
                        }
                    } else {
                        return item
                    }
                })
            }
        default:
            return state;
    }
}
export default homeReducer;