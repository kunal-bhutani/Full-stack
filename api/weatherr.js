import express, { json } from "express"  
import https from "https"
import {fileURLToPath} from "url"
import { dirname } from "path"
import bodyParse from "body-parser"



const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParse.urlencoded({extended:true}));



app.get("/",function(req,res){

    // res.send("hey i am up");
    res.sendFile(__dirname+"/weather.html");
});



app.post("/",function(req,res){

    // console.log(req.body.city);
    // console.log("post request recived");

    const city = req.body.city;
    const appKey ="57b3184e04c80529ddf62f94a6973ef3";
    const unit = "metric";
    const url =" https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+appKey+"&units="+unit;



    https.get(url,function(response)     // requestin on openweather api for data
    {
        console.log(response.statusCode);
        response.on("data",function(data){
            // console.log(data);
            const weatherData = JSON.parse(data);     // basically it was in buffer to convert in human readable we use JSON.parse and JSON.stringfy use to compress it
            // console.log(weatherData);
            const temp = weatherData.main.temp;       // weatherData to go to data .main.temp is path of particular data in json can be copied by extension in chrome
            const city = weatherData.name;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL =  "https://openweathermap.org/img/wn/"+icon+"@2x.png";   // it is not imported yet but image is from api about current weather
            console.log(temp);
            console.log(city);
            // connsol.log(description);
            console.log(icon);
            // res.send(" <h1>the temp in the JIND is </h1>"+temp+"<br>"+"the city is "+city);
    
            // to send multiple line with only one res.send 1) write in res.write (we can use res.write multiple time) 2) at last write res.send
    
            res.write("the city is "+city);
            res.write(" the description of the "+city+" = "+description);
            res.write("the temp of city is = "+temp);
            // res.write("<img src=" + imageURL + ">");
            // res.write("<img src ='https://openweathermap.org/img/wn/10d@2x.png'>")
            // res.write(https:+"//"+openweathermap.org/img/wn/10d@2x.png)
    
            res.send();
        });
    });
    // res.send("hey server is up");  // in it we can only send a res.send at a time


})

app.listen("808",function(){
    console.log("server is up at 808");
})

