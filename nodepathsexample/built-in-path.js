const path = require("path");

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json"));

console.log(path.join(__dirname, "data.json"));

console.log(path.resolve(__dirname, "data.json"));