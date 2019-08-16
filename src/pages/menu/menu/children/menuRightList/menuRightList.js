import React from "react";
import "./menuRight.scss"
import ScrollView from "../../../../../components/scrollView/scrollView";
class MenuRightList extends React.Component{
    dom = []
    render() {
        let { leftNav } = this.props;
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
                                                        <img src={ite.imageUrl} />
                                                    </div>
                                                    <div>
                                                        <h3>{ite.name}</h3>
                                                        <div>
                                                            <div>
                                                                <p>{ite.desc}</p>
                                                                <span>￥{ite.price}</span>
                                                            </div>
                                                            <div><span>购买</span></div>
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
    computedHeight=()=>{
        console.log(11)
    }
}
export default MenuRightList;