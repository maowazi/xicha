import React from "react";
import ScrollView from "../../../components/scrollView/scrollView";
import "./cartList.scss";
import ComputedPrice from "./children/computedPrice";
const CartList = (props) => {
    let { cartList } = props;
    console.log(cartList)
    return (
        <ScrollView className="cartListWarp">
            <div className="cartListconent">
                {
                    cartList.map((item) => (
                        <div key={item.id}>
                            <div>
                                <div><img src={item.imageUrl} alt="图片加载失败" /></div>
                                <h3>{item.name}</h3>
                            </div>
                            <div>
                                <p>￥{item.price}</p>
                                <div>
                                    <button>-</button>
                                    <span>{item.num}</span>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ComputedPrice className="ComputedPrice"/>
        </ScrollView>
    )
} 
export default CartList;