const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view-engine","ejs");


app.get("/",function(req,res){
   res.sendFile(__dirname+"/index.ejs");
})

app.post("/",function(req,res){
    const cityname=body.req.cityName;
    const unit=body.req.units;
    const query=cityname;
    const wunit= unit;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=f6fa43321e2d096e7de8611eda98caac&units="+wunit+"";
    https.get(url,function(response){
        response.on("data",function(data){
            const weatherData=JSON.parse(data);



        })
    })
})











app.listen("/",function(){
    console.log("Server is running at port 5000");
})