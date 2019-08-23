import React from "react";
import "./order.scss";
import Header from "../../../../../components/header/header";
import { connect } from "react-redux";
import {takeTeaAction } from "../../../../../action/action";
class Order extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        let { cartList, num, goTaketea } = this.props;
        return (
            <div className="order">
                <Header title="订单" left={<i className="iconfont icon-zuojiantou" onClick={this.handBack.bind(this)}></i>} />
                <div className="orderList">
                    <ul>
                        {
                            cartList.map((item) => (
                                <li key={item.id}>
                                    <div>
                                        <img src={item.imageUrl} alt="图片加载失败" />
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div>
                                        <p>￥{item.price}</p>
                                        <span>x{item.num}</span>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
                <div className='tabfooter' onClick={goTaketea.bind(this, cartList)}>确定</div>
            </div>
        )
    }
    handBack() {
        this.props.history.goBack();
    }
}
const mapStateToProps = (state) => ({
    cartList: state.cartReducer.cartList,
    num: state.cartReducer.price
})
const mapDispatchToProps = (dispatch) => ({
    goTaketea(params) {
        dispatch(takeTeaAction(params));
        this.props.history.push("/taketea");
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Order);