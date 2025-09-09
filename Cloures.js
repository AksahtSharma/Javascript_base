// A closure is a function that retains access to its outer function's variables, even after the outer function has finished executing. It "remembers" the environment in which it was created, allowing it to access variables outside its immediate scope.

// Clouser is the combination of function and its lecical envirement.


// Lexical Scoping = Closures are rely on lexical scoping, meaning that a function’s scope is determined by where the function is defined, not where it is executed. This allows inner functions to access variables from their outer function


function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); 
        outerVar = "Updated"
    }
    return inner;  
}
const closure = outer(); 
closure();
closure();




// 2
function counter() {
    
    let count = 0; 
    
    return function () {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());