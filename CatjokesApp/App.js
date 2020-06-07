var cat = require("cat-me")
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
var express=require("express")
var app=express()

app.get("/",function(req,res){
    a=cat().replace(/\n/g, "<br />");;
    res.send(a);
});
app.listen(3000,function(){
    console.log("Server Started at port 3000")
});
