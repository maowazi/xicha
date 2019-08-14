import React from "react";
import "./address.scss";
import Header from "../../../components/header/header";
import ScrollView from "../../../components/scrollView/scrollView";
import CityList from "./children/addressList";
const Address = (props) => {
    return (
        <div className="address">
            <Header title={"选择店铺"} isshwo={true} onHanf={() => {
                props.history.goBack()
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
                    <CityList/>
                </div>

            </ScrollView>
        </div>
    )
}
export default Address;