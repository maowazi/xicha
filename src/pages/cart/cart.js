import React from "react";
import Header from "../../components/header/header";
import "./cart.scss";
import CartList from "./children/cartList";
import {connect } from "react-redux";
class Cart extends React.Component{
    render() {
        let { cartList } = this.props;
        return (
            <div className="cart">
                <Header title={"购物车"} left={<span className="iconfont icon-zuojiantou" onClick={this.handgabk.bind(this)}></span>} />
                <CartList cartList={cartList}/>
            </div>
        )
    }
    handgabk() {
        this.props.history.goBack();
    }
}
const mapStateToProps = (state) => ({
    cartList:state.cartReducer.cartList
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);