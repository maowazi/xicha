import React from "react";
import "./menu.scss";
import Header from "../../../components/header/header";
import MenuLefttNav from "./children/meniLiftNav/menuLeftNav";
import MenuRightList from "./children/menuRightList/menuRightList";
import { connect } from "react-redux";
import { Action } from "../../../action/action";
import { menuLeftNav_type } from "../../../action/actionType";
import { menuLeftNav_api } from "../../../utilApi/uitlApi";
import ScrollView from "../../../components/scrollView/scrollView";
class Menu extends React.Component{
    MenuLeft = React.createRef()
    MenuRightScroll = React.createRef()
    render() {
        let { leftNav} = this.props
        return (
            <div className="menu">
                <Header title={"菜单"} />
                <div>
                    <ScrollView className="MenuLefttNav">
                        <MenuLefttNav leftNav={leftNav} onSelect={this.selectIndex}/>
                    </ScrollView>
                    <ScrollView className="menuRight" ref={this.MenuRightScroll}>
                        <MenuRightList leftNav={leftNav} ref={this.MenuLeft}/>
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
}
const mapStateToProps = (state) => ({
    leftNav: state.menuReducer.menuLeftNav
})
const mapDispatchToProps = (dispatch) => ({
    getMenuLeftData() {
        dispatch(Action([menuLeftNav_type, menuLeftNav_api]))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Menu);