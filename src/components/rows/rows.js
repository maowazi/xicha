import React from "react";
import "./rows.scss";
const Rows = (props) => {
    let {title,isaddress,isyoujiantou } = props;
    return (
        <div className="Rows">
            <div>
                <h3>{title}</h3>
                {isaddress && <i className="iconfont icon-dingwei Rows-btn center"></i>}
                {isyoujiantou && <i className="iconfont icon-youjiantou Rows-btn right"></i>}
            </div>
        </div>
    )
}
export default Rows;