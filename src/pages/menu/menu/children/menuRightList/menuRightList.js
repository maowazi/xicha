import React from "react";
import "./menuRight.scss";
class MenuRightList extends React.Component{
    dom = []
    render() {
        let { leftNav, onClick } = this.props;
        return (
                <div className="menuRightList">
                    {
                        leftNav.map((item) =>
                            (
                                <div key={item.tag} ref={(list) => {
                                    this.dom.push(list)
                                }}>
                                    <h2>{item.categoryName}</h2>
                                    <ul>
                                        {
                                            item.spuList.map((ite) => (
                                                <li key={ite.id}>
                                                    <div>
                                                        <img src={ite.imageUrl} alt="图片加载失败"/>
                                                    </div>
                                                    <div>
                                                        <h3>{ite.name}</h3>
                                                        <div>
                                                            <div>
                                                                <p>{ite.desc}</p>
                                                                <span>￥{ite.price}</span>
                                                            </div>
                                                            <div><button onClick={() => onClick(ite)}>购买</button></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        )
                    }
                </div>
        )
    }
}
export default MenuRightList;