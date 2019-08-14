import React from "react";
import { NavLink } from "react-router-dom";
import "./tab.scss";
class Tab extends React.Component{
    constructor() {
        super();
        this.state = {
            tabList: [
                { id: 1, title: "首页", icon: "icon-fangzi",path:"/home" },
                { id: 2, title: "菜单", icon: "icon-caidan", path:"/menu" },
                { id: 3, title: "时光", icon: "icon-xin", path:"/time" },
                { id: 4, title: "取茶", icon: "icon-jiangbei", path:"/takeTea" },
                { id: 5, title: "我的", icon: "icon-wodeda", path:"/mine"}
            ]
        }
    }
    render() {
        let {tabList } = this.state;
        return (
            
            <footer id="foot">
                <ul>
                    {
                        tabList.map((item) =>
                            <NavLink to={item.path} key={item.id}>
                                <i className={"iconfont " +item.icon}></i>
                                <span>{item.title}</span>
                            </NavLink>
                        )
                    }
                </ul>
            </footer>
        )
    }
}
export default Tab;