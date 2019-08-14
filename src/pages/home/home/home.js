import React from "react";
import {Link } from "react-router-dom";
import Header from "../../../components/header/header";
import Swiper from "../../../components/swiper/swiper";
import "./home.scss";
import p1 from "../../../img/p1.jpg";
import p2 from "../../../img/p2.jpg";
import p3 from "../../../img/p3.jpg";
import p4 from "../../../img/p4.jpg";
import p5 from "../../../img/p5.jpg";
import Rows from "../../../components/rows/rows";
import ScrollView from "../../../components/scrollView/scrollView";
import {fetch as fetchData } from "whatwg-fetch";
let imglist = [
    p1, p2, p3, p4, p5
]
class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            imgList:[]
        }
    }
    render() {
        let {imgList} = this.state
        return (
            <div className="home">
                <Header title={"喜茶时光"} />
                <ScrollView>
                    <div>
                        <Swiper imglist={imgList} />
                        <Link to="/home/address"><Rows title={"壹方城店"} isaddress={true} /></Link>
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
        fetchData("/imgdata/list")
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    imgList: data.data.imgData
            })
            })
            .catch((err) => {
            console.log(err)
        })
    }
}
// const Home = () => {
//     return (
//         <div className="home">
//             <Header title={"喜茶时光"} />
//             <ScrollView>
//                 <div>
//                     <Swiper imglist={imglist} />
//                     <Link to="/home/address"><Rows title={"壹方城店"} isaddress={true} /></Link>
//                     <Rows title={"立即购买"} isyoujiantou={true} />
//                     <Rows title={"我的订单"} isyoujiantou={true} />
//                     <Rows title={"喜茶时光"} isyoujiantou={true} />
//                     <Rows title={"查看评价"} isyoujiantou={true} />
//                     <Rows title={"我的优惠"} isyoujiantou={true} />

//                 </div>
//             </ScrollView>
//         </div>
//     )
// }
export default Home;