/*1)
 //Both the methods are correct   
 var express = require("express");
 var app = express(); 

2)*/
var app = require("express")(); 

//Get
app.get("/", function(req, res){
    res.send("Home page");//sends response
});

app.get("/page2", function(req, res){
    res.send("Page2");//sends response
});

//Defining port for local host
app.listen(3000,function(req, res){
    console.log("Server started");
});
