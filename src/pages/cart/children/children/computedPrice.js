import React from "react";
import "./computedPrice.scss";
const ComputedPrice = (props) => {
    let { className } = props;
    return (
        <div className={`computeWrap ${className}`}>
            <div>
                <p>总计: <span>￥{18}</span></p>
                <p>新用户优惠:满20减5元</p>
            </div>
            <button>下单</button>
        </div>
    )
}
export default ComputedPrice;