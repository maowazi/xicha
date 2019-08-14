import React from "react";
import BScroll from 'better-scroll';
class ScrollView extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="scroll" ref="scroll">
                    {
                        this.props.children
                    }
            </div>
        )
    }
    componentDidMount() {
        let scroll = new BScroll(this.refs.scroll, {
            scrollX: true,
            scrollY: true,
            click: true,
            tap: true
        })
    }
}
export default ScrollView;