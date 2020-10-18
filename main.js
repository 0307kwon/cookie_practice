const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser("bfdnklbffsda!@!$@#%"));
app.get("/",(req,res)=>{
    let count;
    if(req.signedCookies.count === undefined){
        count = 0;
    }else{
        count = Number(req.signedCookies.count);
    }

    const count_plus = count+1;
    res.cookie("count", count_plus,{signed:true});
    res.send(`count : ${count}`);
})

app.listen(3001,()=>{
    console.log("ㅎㅎ");
})