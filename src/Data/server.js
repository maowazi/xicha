const express = require("express");
const serve = express();
serve.get("/bnner/list", (req,res) => {
    res.json({
        code: 0,
        massage: "ok",
        data:require("./data/imgData")
    })
})
serve.listen(8000, (err) => {
    if (err) {
        console.log("启动失败")
    }else {
        console.log("启动成功")
    }
})