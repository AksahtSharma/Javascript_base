// IIFE : Immediately Invoked Function Expression
// It is a function which runs as soon as it is defined.

(function(){
    console.log("Hello from IIFE");
    let arr = [1,2,3,4,5];
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log("Sum is: "+ sum);
})();