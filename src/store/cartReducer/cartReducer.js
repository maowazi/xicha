import {cart_add_type } from "../../action/actionType";
const defaultstate = {
    cartList: [],
    price:0
}
export default (state = defaultstate, action) => {
    switch (action.type) {
        case cart_add_type:
            let index = state.cartList.findIndex(item => item.id === action.val.id); //判断当前的这个商品在数组里是否存在(两个id相同就是存在),返回的是存在下标,不存在返回-1
            let newCartList = [];
            if (index >= 0) {                                                        //如果返回值是大于等于0的证明存在
                newCartList = state.cartList.map((item,i) => {                       //存在就遍历当前数组,把返回的保存在一个新数组里
                    if (i === index) {                                               //找到相同的下标
                        return {                                                     //把找到的商品的个数加一
                            ...item,
                            num:item.num+1
                        }
                    } else {
                        return item                                                 //不是相同的商品的直接返回出去
                    }
                })
            } else {                                                                //如果此商品在数组中部存在
                newCartList = [                                                     //就把此商品添加到数组中,并且给当前商品添加一个属性为一记录商品个数
                    ...state.cartList,
                    {
                        ...action.val,
                        num:1
                    }
                ]
            }
            return {                                                                 //最后把新的数组赋值给原来的数组并返回出去
                ...state,
                cartList: newCartList
            }
        case "JIAN":
            let NumJian = 0;
            let newcartList1 = state.cartList.map((item) => {
                if (item.id === action.id) {
                    if (item.num === 1) return item
                    return {
                        ...item,
                        num: --item.num
                    }
                } else {
                    return item
                }
            })
            for (let i = 0; i < state.cartList.length; i++){
                NumJian += state.cartList[i].num * state.cartList[i].price
            }
            return {
                ...state,
                cartList: [...newcartList1],
                price: NumJian
            }
        case "ADD":
            let NumAdd = 0;
            let NewcartList = state.cartList.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        num: ++item.num
                    }
                } else {
                    return item
                }
            })
            for (let i = 0; i < state.cartList.length; i++){
                NumAdd += state.cartList[i].num * state.cartList[i].price
            }
            return {
                ...state,
                cartList: [...NewcartList],
                price: NumAdd
            }
        case "CART_DELECT":
            let newPriceDele = 0;
            for (let i = 0; i < state.cartList.length; i++){
                if (state.cartList[i].id === action.id) {
                    state.cartList.splice(i, 1)
                    break;
                }
            }
            for (let i = 0; i < state.cartList.length; i++){
                newPriceDele += state.cartList[i].num * state.cartList[i].price
            }
            return {
                ...state,
                cartList: [...state.cartList],
                price: newPriceDele
            }
            //减一操作也可以这样
            /*let newCartList = state.cartList.filter((item) => {
                if (item.id === action.id) {
                    return false
                } else {
                    return true
                }
                //if判断条件可以简化成 return item.id !== action.id
            })*/
        case "PRICE":
            let num = 0;
                state.cartList.map((item) => {
                    num += item.price
                })
            return {
                ...state,
                price:num
            }
        default:
            return state;
    }
}