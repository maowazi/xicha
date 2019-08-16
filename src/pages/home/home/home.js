import React from "react";
import {Link } from "react-router-dom";
import Header from "../../../components/header/header";
import Swiper from "../../../components/swiper/swiper";
import "./home.scss";
import Rows from "../../../components/rows/rows";
import ScrollView from "../../../components/scrollView/scrollView";
import { bannerAction } from "../../../action/action";
import {connect } from "react-redux";
class Home extends React.Component{
    render() {
        let { imgList, selectCity} = this.props
        return (
            <div className="home">
                <Header title={"喜茶时光"} />
                <ScrollView className="scrollwarp">
                    <div>
                        <Swiper imglist={imgList} />
                        <Link to="/home/address"><Rows title={selectCity} isaddress={true} /></Link>
                        <Rows title={"立即购买"} isyoujiantou={true} />
                        <Rows title={"我的订单"} isyoujiantou={true} />
                        <Rows title={"喜茶时光"} isyoujiantou={true} />
                        <Rows title={"查看评价"} isyoujiantou={true} />
                        <Rows title={"我的优惠"} isyoujiantou={true} />

                    </div>
                </ScrollView>
            </div>
        )
    }
    componentDidMount() {
        this.props.requeryBanner()
    }
}
const mapStateToProps = (state) => ({
    imgList: state.homeReducer.homeList,
    selectCity: state.homeReducer.selectCity
})
const mapDispathcToProps = (dispatch) => ({
    requeryBanner() {
        dispatch(bannerAction())
    }
})
export default connect(mapStateToProps,mapDispathcToProps)(Home);