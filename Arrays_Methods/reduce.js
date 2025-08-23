// The reduce function accumulates array elements into a single value based on a callback function.

// Example 1
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);



// Example 2
let arr2 = [10, 20, 30, 40];
let product = arr2.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(product);