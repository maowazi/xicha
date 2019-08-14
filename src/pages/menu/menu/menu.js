import React from "react";
import "./menu.scss";
import ScrollView from "../../../components/scrollView/scrollView";
import Header from "../../../components/header/header";
import p1 from "../../../img/p1.jpg";
const Menu = () => {
    return (
        <div className="menu">
            <Header title={"菜单"} />
            <div>
                <ScrollView id="leftScroll">
                    <div>
                        <ol>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                            <li>奶茶</li>
                        </ol>
                    </div>
                </ScrollView>
                <ScrollView>
                    <div>
                        <ol>
                            <li>
                                <div><img src={p1} alt=" "/></div>
                                <div>
                                    <h3>鸳鸯奶茶</h3>
                                    <p>新品上市</p>
                                    <div><i>￥18</i><span>购买</span></div>
                                </div>
                            </li>
                            <li>
                                <div><img src={p1} alt=" " /></div>
                                <div>
                                    <h3>鸳鸯奶茶</h3>
                                    <p>新品上市</p>
                                    <div><i>￥18</i><span>购买</span></div>
                                </div>
                            </li>
                            <li>
                                <div><img src={p1} alt=" " /></div>
                                <div>
                                    <h3>鸳鸯奶茶</h3>
                                    <p>新品上市</p>
                                    <div><i>￥18</i><span>购买</span></div>
                                </div>
                            </li>
                            <li>
                                <div><img src={p1} alt=" " /></div>
                                <div>
                                    <h3>鸳鸯奶茶</h3>
                                    <p>新品上市</p>
                                    <div><i>￥18</i><span>购买</span></div>
                                </div>
                            </li>
                            <li>
                                <div><img src={p1} alt=" " /></div>
                                <div>
                                    <h3>鸳鸯奶茶</h3>
                                    <p>新品上市</p>
                                    <div><i>￥18</i><span>购买</span></div>
                                </div>
                            </li>
                            <li>
                                <div><img src={p1} alt=" " /></div>
                                <div>
                                    <h3>鸳鸯奶茶</h3>
                                    <p>新品上市</p>
                                    <div><i>￥18</i><span>购买</span></div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </ScrollView>
            </div>
        </div>
    )
}
export default Menu;