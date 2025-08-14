// Higher order Function means function which accept another function as perameter or return a 
// map, filter, reduce, forEach, every, some etc. are higher order functions



// Example No 1
let abc = function(){
    let a = 10;
    let b = 10;
    let c = a + b;
    console.log(c);
}

function lhs () {
    console.log("Hello from lhs function");
    
}

abc(lhs());



// Example No 2
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Namaste!");
}

greet("Akshat", sayGoodbye);
