import {cart_add_type } from "../../action/actionType";
const defaultstate = {
    cartList: []
}
export default (state = defaultstate, action) => {
    switch (action.type) {
        case cart_add_type:
            let index = state.cartList.findIndex(item => item.id === action.val.id);
            let newCartList = []
            if (index >= 0) {
                newCartList = state.cartList.map((item,i) => {
                    if (i === index) {
                        return {
                            ...item,
                            num:item.num+1
                        }
                    } else {
                        return item
                    }
                })
            } else {
                newCartList = [
                    ...state.cartList,
                    {
                        ...action.val,
                        num:1
                    }
                ]
            }
            return {
                ...state,
                cartList:newCartList
            }
        default:
            return state;
    }
}