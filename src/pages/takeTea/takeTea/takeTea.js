import React from "react";
import Header from "../../../components/header/header";
import TakTeaScroll from "../../../components/takTeaScroll/takTeaScroll";
import { connect } from "react-redux";
import "./takTea.scss";
class TakeTea extends React.Component{
    croll = React.createRef();                //创建ref此方法优化比较好,因为react的(ref="box")方式即将废弃
    constructor() {
        super();
        this.state = {
            flag: true,
            end: false,
            dibutishi: true,
            dibuend:true
        }
    }
    render() {
        let { TakeTeaList } = this.props;
        let { flag, end, dibutishi, dibuend } = this.state;
        let str = flag ? "下拉可以刷新" : "松手立即刷新";
        str = end ? "正在刷新" : str;
        let dibuti = dibutishi ? "上拉加载更多" : "松手立即加载";
        dibuti = dibuend ? dibuti : "正在加载"
        return (
            <div className="takTea">
                <Header title={"取茶"} />
                <TakTeaScroll className="takTeaScroll" ref={this.croll}>
                    <ul>
                        <div><img className={flag ? "" : 'active'} src={end ? "/images/loading.gif" : "/images/下箭头.png"} alt="" /><span>{str}</span></div>
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
                        <div>{dibuti}</div>
                    </ul>
                </TakTeaScroll>
            </div>
        )
    }
    time = null;
    componentDidMount() {
        document.querySelector("ul").style.marginTop = "-.5rem";  //让ul向上退50px隐藏掉刷新栏
        let y = 0;
        this.croll.current.scroll.on("scroll", () => { //监听是否滚动,相比滚动文件多点个scroll
            y = this.croll.current.scroll.y;
            if (y > 50) {        //获得滚动距离
                this.setState({
                    flag:false
                })
            } else {
                this.setState({
                    flag:true
                })
            }
        })

        /**
         * 下面意思是,当滚动停止时如果大于50就让其成为正在刷新状态,两秒后恢复正常
         * 如果滚动停止在50的区间就不让其刷新回到原位
         * 在惯性滚动时scroll无法监听到无法给y赋值所以要重新获取下判断停止时是否是露出刷新的结构的,是就让其隐藏
         */
        this.croll.current.scroll.on("scrollEnd", () => {     //此方法可以判断用户如果下拉没有超过50,在两秒后可以让滚动视图自动会到原位
            if (y > 50) {
                this.setState({
                    end:true
                })
                //此处可以再次请求数据(如果数据是父组件请求的,就让父组件再次请求)
                setTimeout(() => {                  //下拉后刷新后让文字变回原样
                    this.setState({
                        end: false,
                        flag: true
                    })
                    this.croll.current.scroll.scrollTo(0, 0, 500);//刷新完成后让滚动视图回到原位
                }, 2000)
            } else if (y < 50 && y > 0 ) {
                this.croll.current.scroll.scrollTo(0, 0, 500);
            } else if (this.croll.current.scroll.y > 0){
                this.croll.current.scroll.scrollTo(0, 0, 0);
            }
            if (y < this.croll.current.scroll.maxScrollY) {    //停止滚动时上拉距离超过最大滚动距离时
                this.setState({                                //让文字变
                    dibuend:false
                })
                setTimeout(() => {                              //两秒后再变成正常
                    this.setState({
                        dibuend: true,
                        dibutishi:true
                    })
                }, 2000)
                //下面判断是否停止时在底部加载更多元素的之间部分,是就把其隐藏
            } else if (y < this.croll.current.scroll.maxScrollY + 50 && y > this.croll.current.scroll.maxScrollY){
                this.croll.current.scroll.scrollTo(0, this.croll.current.scroll.maxScrollY+50, 500);
            }
        })
        this.croll.current.scroll.on("scroll", () => {
            let y = this.croll.current.scroll.y;
            let miny = this.croll.current.scroll.maxScrollY;
            if (y < miny + 50 && y >= miny) {                       //能看见底部加载更多元素但没有完全出来时
                this.setState({
                    dibutishi:true
                })
            } else if(y <= miny){                                   //滚动超过最大滚动范围时
                this.setState({
                    dibutishi:false
                })
                //此处再次请求数据
                clearTimeout(this.time)
                this.time = setTimeout(() => {
                    // this.props.UpdateData();
                },300)
            }
        })
    }
}
const mapStateToProps = (state) => ({
    TakeTeaList: state.takeTeaReducer.takeTeaList
})
const mapDispatchToProps = (dispatch) => ({
    // UpdateData() {
    //     let action = {
    //         type:"DATA_ADD"
    //     }
    //     dispatch(action)
    // }
})
export default connect(mapStateToProps,mapDispatchToProps)(TakeTea);