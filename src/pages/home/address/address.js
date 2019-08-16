import React from "react";
import "./address.scss";
import Header from "../../../components/header/header";
import ScrollView from "../../../components/scrollView/scrollView";
import CityList from "./children/addressList";
import { connect } from "react-redux";
import { address_list_type } from "../../../action/actionType";
import { Action,actonselect } from "../../../action/action";
import {addressList_api } from "../../../utilApi/uitlApi";
class Address extends React.Component{
    render() {
        return (
            <div className="address">
                <Header title={"选择店铺"} isshwo={true} onHanf={() => {
                    this.props.history.goBack()
                }} />
                <ScrollView>
                    <div>
                        <div className="remencity border-bottom">
                            <h2>热门城市</h2>
                            <ol>
                                <li>北京</li>
                                <li>广州</li>
                                <li>深圳</li>
                                <li>上海</li>
                            </ol>
                        </div>
                        <CityList address={this.props.addrss} selectChange={this.props.selectChange.bind(this)} selectIndex={this.props.selectIndex}/>
                    </div>

                </ScrollView>
            </div>
        )
    }
    componentDidMount() { 
        this.props.getAddreeeList();
    }
}
const mapStateToProps = (state) => ({
    addrss: state.homeReducer.addressList,
})
const mapDispatchToProps = (dispatch) => ({
    getAddreeeList() {
        dispatch(Action([address_list_type, addressList_api]))
    },
    selectChange(params) {
        dispatch(actonselect(params))
        this.props.history.goBack();
    },
    selectIndex(index) {
        let action = {
            type: "CHANGE_SELECTINDEX",
            index
        }
        dispatch(action)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Address);