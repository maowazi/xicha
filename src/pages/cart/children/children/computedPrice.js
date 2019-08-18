import React from "react";
import "./computedPrice.scss";
import { connect } from "react-redux";
class ComputedPrice extends React.Component{
    render() {
        let { className, num, state } = this.props;
        console.log(state)
        return (
            <div className={`computeWrap ${className}`}>
                <div>
                    <p>总计: <span>￥{num}</span></p>
                    <p>新用户优惠:满20减5元</p>
                </div>
                <button>下单</button>
            </div>
        )
    }
    componentDidMount() {
        this.props.price()
    }
}
const mapStateToProps = (state) => ({
    num: state.cartReducer.price,
    state:state.cartReducer
})
const mapDispatchToProps = (dispatch) => ({
    price() {
        let actions = {
            type:"PRICE"
        }
        dispatch(actions)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(ComputedPrice);