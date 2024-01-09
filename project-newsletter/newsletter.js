import express from "express"
import bodyParser from "body-parser"
import {dirname} from "path"
import {fileURLToPath} from "url"
import request from "request"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("hey up !")
});



app.listen("3000",function(){
    console.log("server is up at '3000'");
})
