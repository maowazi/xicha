import {banner_list_type } from "./actionType";
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
export {
    bannerAction
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