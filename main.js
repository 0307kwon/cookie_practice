const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.get("/",(req,res)=>{
    let count;
    if(req.cookies.count === undefined){
        count = 0;
    }else{
        count = Number(req.cookies.count);
    }

    const count_plus = count+1;
    res.cookie("count", count_plus);
    res.send(`count : ${count}`);
})

app.listen(3001,()=>{
    console.log("ㅎㅎ");
})