const express = require("express"); //import express from express
const app = express(); //declare app to get express() from const express /insance from express

//app.method(path,handler) 
//method ["get","post","put","delete"]
//path:string eg. "/","/api/customer"
app.get("/", (req,res)=>{
    res.send("welcome home page of api")
});



//important
//app.listen(port,handler) 
//hander == ()=>{} 
//required defind 
//assign in root project
app.listen(8081, () => {
  console.log("http://localhost:8081");
});
