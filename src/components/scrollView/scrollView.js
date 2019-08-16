import React from "react";
import BScroll from 'better-scroll';
class ScrollView extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        let {className} = this.props
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
    }
    UpedScroll = (params) => {
        if (this.scroll.maxScrollY <= params) {
            this.scroll.scrollTo(0, params,1000)
        } else {
            this.scroll.scrollTo(0,this.scroll.maxScrollY,1000)
        }
    }
}
export default ScrollView;