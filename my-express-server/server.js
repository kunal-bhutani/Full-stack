// in it we had made a local host 
// const express = require("express");
import express, { response } from "express";
const app = express();

//  app.get is used to intract with local host when we land what will happen
//  / -> is use for home page route that request is triggered  
//  and after that a callback function is used .

app.get("/", function(request,response){
    // // console.log(request);// it will show requests in console
    response.send("<h1>hello world!</h1>");

}) ;

app.get("/contact",function(req,res){
    res.send("contact me at : kunalbhutani46@gmail.com");  // we have to use localhost:3000/contact  to get this respose
})

app.get("/about",function(req,res){
    res.send("<h1>thsi is about page</h1>");
})
app.get("/hobby",function(req,res){
    res.send("this is my hobby page")
})
app.listen(3000,function(){
    console.log("server started on port 3000"); 
});