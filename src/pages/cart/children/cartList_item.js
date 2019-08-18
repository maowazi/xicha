import React from "react";
import {connect } from "react-redux";
class CartListItem extends React.Component{
    carItem = React.createRef()
    render() {
        let { id, imageUrl, name, price, num, sendNum, cartDelect } = this.props;
        return (
            <div className="cartItemWarp" key={id}>
                <div className="iconfontWarp" onClick={()=>cartDelect(id)}><i className="iconfont icon-jiahao"></i></div>
                <div className="cartListItem" ref={this.carItem}>
                    <div>
                        <div><img src={imageUrl} alt="图片加载失败" /></div>
                        <h3>{name}</h3>
                    </div>
                    <div>
                        <p>￥{price}</p>
                        <div>
                            <button onClick={()=>sendNum(["JIAN",id])}>-</button>
                            <span>{num}</span>
                            <button onClick={() => sendNum(["ADD",id])}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        let el = this.carItem.current;
        let offsetX = 0;
        el.addEventListener("touchstart", (e) => {      
            let defaultX = e.changedTouches[0].clientX - offsetX;      
            let touchmoveFunction = (e) => {       
                let ClX = e.changedTouches[0].clientX;     
                offsetX = ClX - defaultX;      
                if (offsetX <= 0 && offsetX >= -90) {
                    el.style.left = offsetX + "px";   
                }
                el.className = "cartListItem"; 
            }
            let touchendFunction = () => {
                if (offsetX >= -45) {
                    offsetX = 0;
                } else if (offsetX <= -45) {
                    offsetX = -90;
                }
                el.style.left = offsetX + "px";
                el.className = "cartListItem active"; 
                el.removeEventListener("touchmove", touchmoveFunction); 
                el.removeEventListener("touchend", touchendFunction);
            }
            el.addEventListener("touchmove", touchmoveFunction)     

            el.addEventListener("touchend", touchendFunction)       
        })
    }
}
const mapStateToProps = (state) => ({
    aaj: state.list
})
const mapDispatchToProps = (dispatch) => ({
    sendNum(store) {
        let action = {
            type: store[0],
            id:store[1]
        }
        dispatch(action)
    },
    cartDelect(id) {
        let action = {
            type: "CART_DELECT",
            id
        }
        dispatch(action)
    }
    
})
export default connect(mapStateToProps, mapDispatchToProps)(CartListItem);