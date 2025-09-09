// It return one output for each element and it always accept function

function forEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr);
    }
}
forEach([1, 2, 3], (item, index, array) => {
    console.log(item, index, array);
});



// Example 2
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
forEach(numbers, (num) => {
    sum += num;
});
console.log("Sum:", sum);    


// Example 3
let arr = [11,12,13,14,15];
arr.forEach((value) => {
    console.log(value*2);
});