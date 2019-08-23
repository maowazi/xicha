import React from "react";
import ScrollView from "../../../components/scrollView/scrollView";
import "./cartList.scss";
import ComputedPrice from "./children/computedPrice";
import CartListItem from "./cartList_item";
class CartList extends React.Component{
    render() {
        let { cartList } = this.props;
        let listDom = cartList.map((item) => (
            <CartListItem {...item} key={item.id} />
        ))
        let tishiDom = (<div>购物车空空如也~~~</div>)
        return (
            <ScrollView className="cartListWarp">
                <div className="cartListconent">
                    {
                        listDom.length > 0 ? listDom : tishiDom
                    }
                </div>
                <ComputedPrice className="ComputedPrice"/>
            </ScrollView>
        )
    }
    componentDidMount() {
        
    }
}
export default CartList;