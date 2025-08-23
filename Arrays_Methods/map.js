// map method is used to transform each element of an arrays and return a new array.

let arr = [10, 12, 15, 19, 22];
let newarr =  arr.map((index)=>{
    return index * 2;
    
})
console.log(newarr);




// Example 2
let arr2 = [1, 2, 3, 4, 5]; 
let newarr2 = arr2.map((index)=>{
    return index + 5;
})
console.log(newarr2);





// Example 3
const a = [1, 4, 9, 16, 25];

const sr = a.map(num => Math.sqrt(num)); 
console.log(sr);




// Example 4
let abc = [2, 5, 6, 3, 8, 9];

let res = abc.map(function (val, index) {
    return { key: index, value: val * val };
})

console.log(res)