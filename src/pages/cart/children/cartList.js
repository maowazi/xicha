import React from "react";
import ScrollView from "../../../components/scrollView/scrollView";
import "./cartList.scss";
import ComputedPrice from "./children/computedPrice";
import CartListItem from "./cartList_item";
class CartList extends React.Component{
    render() {
        let { cartList } = this.props;
        return (
            <ScrollView className="cartListWarp">
                <div className="cartListconent">
                    {
                        cartList.map((item) => (
                            <CartListItem {...item} key={item.id}/>
                        ))
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