import React from "react";
import "./menuLeftNav.scss";
const MenuNav = (props) => {
    let { leftNav, onSelect } = props;
    return (
            <div className="menuLeftNav">
                <ol>
                    {
                        leftNav.map((item,index) => {
                            return (
                                <li key={item.tag} onClick={() => onSelect(index)}>{item.categoryName}</li>
                            )
                        })
                    }
                </ol>
            </div>
    )
}
export default MenuNav;