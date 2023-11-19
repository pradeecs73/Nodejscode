function greet(name){
    console.log(`hello ${name}`)
}

function higherOrderFunction(callback){
    callback('suresh');
}

higherOrderFunction(greet);