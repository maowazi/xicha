import React from "react";
import "./header.scss";
const Header = (props) => {
    let { left, right, title, isshwo, onHanf } = props;
    return (
        <header className="app-header border-bottom">
            {isshwo && <i className="iconfont icon-zuojiantou header-btn left" onClick={onHanf}></i>}
            {left && <div className="header-btn left">{left}</div>}
            <h2>{title}</h2>
            {right && <div className="header-btn right">{right}</div>}
        </header>
    )
}
export default Header;