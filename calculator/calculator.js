import express from "express"               //  to import express use to create server
import { dirname } from "path";             //  it is to use __dirname
import { fileURLToPath } from "url"         //  it is to use __dirname
import bodyParser from "body-parser"        // its is use to collecte uer entered data , which is use to do calculation on backend
const __dirname = dirname(fileURLToPath(import.meta.url));  // created a const to use it
// const __dirname = decodeURI(new URL('.',import.meta.url).pathname); 
const app = express();
app.use(bodyParser.urlencoded({extended:true}));  // using body parser  // use act as a middleware which helps to get something or else
// app.use(express.json);


app.get("/",function(req,res){
    // res.send("this is home page of calculator");
    console.log(__dirname)
    res.sendFile(__dirname +"/calculator.html" ); // __dirname will pick file location automatically form any place use it  everytime 

});

app.post("/",function(req,res){     //to post the data
    // res.send("thank you");
    // console.log(req.body);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;

    res.send("the result = "+ result);   //  sending the data which we wanna show
    
});


app.listen(3000,function(){    // creating server
    console.log("server started at local port 3000")
})
// app.listen(800,function(){
//     console.log("server started at local port 300")
// })
