import React from "react";
import {Link } from "react-router-dom";
import "./computedPrice.scss";
import { connect } from "react-redux";
import { addCartaction } from "../../../../action/action";
import { cart_order_type } from "../../../../action/actionType";
class ComputedPrice extends React.Component{
    render() {
        let { className, num,list,xiadan } = this.props;
        return (
            <div className={`computeWrap ${className}`}>
                <div>
                    <p>总计: <span>￥{num}</span></p>
                    <p>新用户优惠:满20减5元</p>
                </div>
                <button onClick={xiadan.bind(this, list)}><Link to="/cart/order">下单</Link> </button>
            </div>
        )
    }
    componentDidMount() {
        this.props.price()
    }
}
const mapStateToProps = (state) => ({
    num: state.cartReducer.price,
    list: state.cartReducer.cartList
})
const mapDispatchToProps = (dispatch) => ({
    price() {
        let actions = {
            type:"PRICE"
        }
        dispatch(actions)
    },
    xiadan(params) {
        dispatch(addCartaction([cart_order_type,params]))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(ComputedPrice);