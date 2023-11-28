var express=require('express');
var http=require('http').Server(app);

var app=express()
//var io=require('socket.io');

app.get('/',function(req,res){
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("home page");
});


app.listen(3000,()=>{
    console.log("server is running");
});