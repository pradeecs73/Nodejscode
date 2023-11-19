const http=require("http");

const server=http.createServer((req,res)=>{

    if(req.url === '/'){
       res.writeHead(200,{"content-type":"text/plain"});
       res.end("home page");
    }
    else if(req.url === '/about'){
       res.writeHead(200,{"content-type":"text/plain"});
       res.end("about page");
    }
    else{
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({"name":"mahesh"}));
    }
});

server.listen(3000,()=>{
  console.log("server running at port 3000");
});