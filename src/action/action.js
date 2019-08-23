import {banner_list_type,selectCity_type,takeTeaType } from "./actionType";
import { fetch as fetchData } from "whatwg-fetch";
import {banner_api } from "../utilApi/uitlApi";
const bannerAction = () => {
    let action = (val) => ({
        type: banner_list_type,
        val:val
    })
    return (dispatch) => {
        fetchData(banner_api)
            .then(res => res.json())
            .then((data) => {
            dispatch(action(data))
            })
            .catch((err) => {
            console.log(err)
        })
    }
}
const Action = (params) => {
    let action = (val) => ({
        type: params[0],
        val: val
    })
    return (dispatch) => {
        fetchData(params[1])
            .then(res => res.json())
            .then((data) => {
                dispatch(action(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
const actonselect = (val) => ({
    type: selectCity_type,
    val
})
const addCartaction = (params) => ({
    type: params[0],
    val:params[1]
})
const takeTeaAction = (val) => ({
    type: takeTeaType,
    val
})
export {
    bannerAction,
    Action,
    actonselect,
    addCartaction,
    takeTeaAction
}















//下面是例子,模板
// import { getmove_type } from "./actionType";
// import { fetch as fetchData } from "whatwg-fetch";
// import { getmoveApi } from "../api";
// const getMoveAction = () => {
//     let action = (val) => ({
//         type: getmove_type,
//         val: val
//     })
//     return (dispatch) => {
//         fetchData(getmoveApi)
//             .then((res) => res.json())
//             .then((data) => {
//                 dispatch(action(data))
//             })
//     }
// }
// export {
//     getMoveAction
// }