const fs = require("fs");
const fs1 = require("fs/promises");

fs.readFile('./file.txt','utf-8',(error,data)=>{
     if(error){
        console.log("error",error);
     }
     else{
        console.log("data",data);
     }
});

fs.writeFile('./file1.txt',"my name is suresh",{flag:'a'},(err)=>{
   if(err)
   {
      console.log('error',err);
   }
   else{
      console.log("success");
   }
});

fs1.readFile('./file.txt','utf-8')
.then((data)=>{
     console.log("data through promise is",data);
}).catch((error)=>{
     console.log("error through promise is",error);
});

async function readFile(){
    try{
        const data= await fs1.readFile('./file.txt','utf-8');
        console.log("data through async is",data);
    }
    catch(error){
        console.log("error through async is",error);
    }
}

readFile();

let readStream=fs.createReadStream('./file.txt',{encoding:'utf-8'});

let writeStream=fs.createWriteStream('./file2.txt');

let writeStream1=fs.createWriteStream('./file3.txt');

readStream.on('data',(chunk)=>{
    console.log('chunk data',chunk);
    writeStream.write(chunk);
});

readStream.pipe(writeStream1);