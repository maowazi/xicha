import React from "react";
import Header from "../../../components/header/header";
import TakTeaScroll from "../../../components/takTeaScroll/takTeaScroll";
import { connect } from "react-redux";
import "./takTea.scss";
class TakeTea extends React.Component{
    croll = React.createRef();                //创建ref此方法优化比较好,因为react的(ref="box")方式即将废弃
    render() {
        let { TakeTeaList} = this.props;
        return (
            <div className="takTea">
                <Header title={"取茶"} />
                <TakTeaScroll className="takTeaScroll" ref={this.croll}>
                    <ul>
                        <div><img src="" alt="" /><i className="iconfont icon-xiajiantou"></i><span>下拉可以刷新</span></div>
                        {/* 把下拉刷新标签写在这里,然后让ul margin-top.5rem,相比老师的要好,
                        因为老师的写在滚动文件里了,当下面没有结构时会自己跑出来,我这种不会.
                        而且老师的是让滚动视图进行滚动-50px,这样在不同的设备上会达不到想要的目的,
                        我的是rem可以适合任何设备 */}
                        {
                            TakeTeaList.map((item) => (
                                <li key={item.id}>
                                    <div>{item.name} X{item.num}</div>
                                    <div>
                                        <p>￥{item.num * item.price}</p>
                                        <p>待付款</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </TakTeaScroll>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.croll.current)
        document.querySelector("ul").style.marginTop = "-.5rem";  //让ul向上退50px隐藏掉刷新栏
    }
}
const mapStateToProps = (state) => ({
    TakeTeaList: state.takeTeaReducer.takeTeaList
})
const mapDispatchToProps = (dispatch) => ({
    
})
export default connect(mapStateToProps,mapDispatchToProps)(TakeTea);