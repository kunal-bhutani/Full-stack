import express from "express"
const app = express();

app.get("/",function(req,res){
    res.send("hello this  is first page");
}) ;

app.get("/joke",function(req,res){
    res.sendFile("https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw");
})

app.listen(3000,function(){
    console.log("server is started at 3000");
})