const http=require("http");
const cluster=require("cluster");
const os=require("os");

if(cluster.isMaster){
    console.log(`process is ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}
else{
    console.log(`process is ${process.pid} is started`);

    const server=http.createServer((req,res)=>{

        if(req.url === '/'){
           res.writeHead(200,{"content-type":"text/plain"});
           res.end("home page");
        }
        else if(req.url === '/slow-page'){
           for(let i=0;i<4000000000;i++){}
           res.writeHead(200,{"content-type":"text/plain"});
           res.end("slow page");
        }
   
    });

    server.listen(3000,()=>{
        console.log("server running at port 3000");
      });

}