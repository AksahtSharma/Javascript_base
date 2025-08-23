//The Filter method creates a new array containing elements that satisfy a specified condition. This method skips empty elements and does not change the original array.

// Example 1
function isVoter(age){
    return age >17;
}

let filtered = [33, 38, 12, -44, 18, 22];
filtered = filtered.filter(isVoter);
console.log(filtered);



// Example 2
let arr = [10, 12, 15, 19, 22];
let newarr = arr.filter((index)=>{
    return index > 15;
})
console.log(newarr);