import React from "react";
import "./menu.scss";
import Header from "../../../components/header/header";
import MenuLefttNav from "./children/meniLiftNav/menuLeftNav";
import MenuRightList from "./children/menuRightList/menuRightList";
import { connect } from "react-redux";
import { Action,addCartaction } from "../../../action/action";
import { menuLeftNav_type,cart_add_type } from "../../../action/actionType";
import { menuLeftNav_api } from "../../../utilApi/uitlApi";
import ScrollView from "../../../components/scrollView/scrollView";
class Menu extends React.Component{
    MenuLeft = React.createRef()
    MenuRightScroll = React.createRef()
    render() {
        let { leftNav} = this.props
        return (
            <div className="menu">
                <Header title={"菜单"} right={<p className="iconfont icon-gouwuche" onClick={this.onClick.bind(this)}></p>}/>
                <div>
                    <ScrollView className="MenuLefttNav">
                        <MenuLefttNav leftNav={leftNav} onSelect={this.selectIndex}/>
                    </ScrollView>
                    <ScrollView className="menuRight" ref={this.MenuRightScroll}>
                        <MenuRightList leftNav={leftNav} ref={this.MenuLeft} onClick={this.props.addCart.bind(this)}/>
                    </ScrollView>
                </div>
            </div>
        ) 
    }
    componentDidMount() {
        this.props.getMenuLeftData()
    }
    selectIndex = (index) => {
        let domArr = this.MenuLeft.current.dom;
        let height = 0;
        for (let i = 0; i < index; i++){
            height -= domArr[i].offsetHeight
        }
        this.MenuRightScroll.current.UpedScroll(height)
    }
    onClick() {
        this.props.history.push("/cart");
    }
    
}
const mapStateToProps = (state) => ({
    leftNav: state.menuReducer.menuLeftNav
})
const mapDispatchToProps = (dispatch) => ({
    getMenuLeftData() {
        dispatch(Action([menuLeftNav_type, menuLeftNav_api]))
    },
    addCart(params) {
        dispatch(addCartaction([cart_add_type,params]))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Menu);