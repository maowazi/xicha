import React from "react";
import BScroll from 'better-scroll';
class takTeaScroll extends React.Component {
    render() {
        let { className } = this.props
        return (
            <div className={`scroll ${className}`} ref="scroll">
                {
                    this.props.children
                }
            </div>
        )
    }
    componentDidMount() {
        this.scroll = new BScroll(this.refs.scroll, {
            scrollX: true,
            scrollY: true,
            click: true,
            tap: true,
            probeType:2
        })
        this.scroll.on("beforeScrollStart", () => {    //监听滚动前事件,在滚动前重新计算可以滚动的高度
            this.scroll.refresh()
        })
        // this.scroll.on("scroll", () => {   //监听是否滚动(probeType 必须要配置)
        //     console.log("滚动了")
        // })
    }
}
export default takTeaScroll;