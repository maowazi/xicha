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
            tap: true
        })
        this.scroll.on("beforeScrollStart", () => {    //监听滚动前事件,在滚动前重新计算可以滚动的高度
            this.scroll.refresh()
        })
    }
    UpedScroll = (params) => {
        // this.scroll.scrollTo(0, params, 0)
        // if (this.scroll.maxScrollY <= params) {
        //     this.scroll.scrollTo(0, params, 1000)
        // } else {
        //     this.scroll.scrollTo(0, this.scroll.maxScrollY, 1000)
        // }
    }
}
export default takTeaScroll;