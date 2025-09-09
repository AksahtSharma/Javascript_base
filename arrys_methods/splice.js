// Remove or insert elements in an array using splice() method
// Note: splice() modifies the original array and returns an array of removed elements.


let arr = [1, 2, 3, 4, 5];

// Remove elements
arr.splice(2, 1); // Removes 1 element at index 2
console.log(arr);



// Insert elements
arr.splice(2, 0, 3); // Inserts 3 at index 2
console.log(arr); 


// Replace elements
arr.splice(2, 1, 'three'); // Replaces 1 element at index 2 with 'three'
console.log(arr); 


// You can also use negative indices
arr.splice(-2, 1); // Removes 1 element from the second last position
console.log(arr); 


arr.splice(-2, 0, 4); // Inserts 4 at the second last position
console.log(arr);


arr.splice(-2, 1, 'four'); // Replaces 1 element at the second last position with 'four'
console.log(arr);




// If no elements are removed, it returns an empty array.
let removedElements = arr.splice(1, 2); // Removes 2 elements starting from index 1
console.log(removedElements);
console.log(arr); 



// If no elements are removed
let noRemoval = arr.splice(1, 0, 'two'); // Inserts 'two' at index 1
console.log(noRemoval); 
console.log(arr); 




// splice() can also be used to clear an array
let arrayToClear = [1, 2, 3, 4, 5];
arrayToClear.splice(0, arrayToClear.length);
console.log(arrayToClear); 






// splice() can also be used to clone an array
let originalArray = [1, 2, 3, 4, 5];
let clonedArray = originalArray.splice(0);
console.log(clonedArray);
console.log(originalArray);

// Note: For cloning, slice() is generally preferred as splice() modifies the original array.