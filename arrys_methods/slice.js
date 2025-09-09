// Return a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slicedArr = arr.slice(2, 5);  
//  Starting from index 2 to index 5 (5 not included)
console.log(slicedArr); 



// If you omit the second parameter, slice extracts through the end of the sequence (arr.length).
let slicedArr2 = arr.slice(4);  
// Starting from index 4 to the end of the array  
console.log(slicedArr2);  




// If start is negative, it is treated as arr.length + start where arr.length is the length of the array. For example, if start is -2, the starting index will be set to arr.length - 2 which is the second to last item in the array.
let slicedArr3 = arr.slice(-2); 
// Starting from the second last item to the end of the array   
console.log(slicedArr3);



// If end is negative, it is treated as arr.length + end.
let slicedArr4 = arr.slice(2, -2); 
// Starting from index 2 to the second last item (not included)   
console.log(slicedArr4);



// If start is greater than or equal to the length of the array, an empty array is returned.
let slicedArr5 = arr.slice(10);  
// Starting from index 10 to the end of the array  
console.log(slicedArr5);



// If end is greater than the length of the array, the slice extracts through to the end of the array (arr.length).
let slicedArr6 = arr.slice(7, 15); 
// Starting from index 7 to the end of the array   
console.log(slicedArr6);



// If start is greater than or equal to end, an empty array is returned.
let slicedArr7 = arr.slice(5, 3);  
// Starting from index 5 to index 3 (3 not included)  
console.log(slicedArr7);



// If start or end is undefined, it is treated as follows:
// If start is undefined, it is treated as 0.
// If end is undefined, it is treated as arr.length. 

let slicedArr8 = arr.slice(undefined, 6);
// Starting from index 0 to index 6 (6 not included)
console.log(slicedArr8);
let slicedArr9 = arr.slice(3, undefined);
// Starting from index 3 to the end of the array
console.log(slicedArr9);
let slicedArr10 = arr.slice(undefined, undefined);
// Starting from index 0 to the end of the array
console.log(slicedArr10);



// If start or end is NaN, it is treated as follows:
// If start is NaN, it is treated as 0.
// If end is NaN, it is treated as 0.     

let slicedArr11 = arr.slice(NaN, 6);
// Starting from index 0 to index 6 (6 not included)
console.log(slicedArr11);
let slicedArr12 = arr.slice(3, NaN);
// Starting from index 3 to index 0 (0 not included)
console.log(slicedArr12);