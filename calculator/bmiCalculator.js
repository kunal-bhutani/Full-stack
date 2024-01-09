import express from "express"
import {dirname} from "path"
import {fileURLToPath} from "url"
import bodyParser from "body-parser"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    // res.send("this page is working");
    res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/",function(req,res){
    var val1 = parseFloat(req.body.weight);
    var val2 = parseFloat(req.body.height);
    var result = val1/(val2*val2);
    console.log(result);
    res.send("the result is = "+ result);
})

app.listen("3000",function(){
    console.log("server started at port 3000");
})