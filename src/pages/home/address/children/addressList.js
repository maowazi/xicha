import React from "react";
import "./cityList.scss";
const cityList = (props) => {
    let { address, selectChange, selectIndex } = props;
    return (
        <div className="cityList">
            <h2>所有城市</h2>
            {
                address.map((item, index) => (
                    <div key={item.area_id}>
                        <h3 onClick={() => selectIndex(index)}><span>{item.area}</span><i className={`iconfont icon-youjiantou ${item.flag ? "active" : "active2"}`}></i></h3>
                        <ol style={{display: item.flag ? "none" : "block"}}>
                            {
                                item.store.map((ite) => (
                                    <li key={ite.name} onClick={() => selectChange(ite.name)}>{ite.name}</li>
                                ))
                            }
                        </ol>

                    </div>
                ))
            }
        </div>
    )
}
export default cityList;