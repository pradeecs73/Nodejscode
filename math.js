const http = require("http");
const math1=require('./moduleexport.js');
const hero=require('./super-hero.js');
//const cache=require('./super-hero.js');
const jsonData=require('./data.json');

const hero1=new hero('suresh');
const hero2=new hero('mahesh');

console.log(math1.add(16, 26));
console.log(math1.subtract(16, 26));
console.log('name from constructor file1',hero1.name);
console.log('name from constructor file2',hero2.name);

//console.log(cache.getName());

//cache.setName('suresh);
//console.log(cache.getName());

//const cache1=require('./super-hero.js');

//console.log(cache1.getName());

console.log('name from json file',jsonData.name);