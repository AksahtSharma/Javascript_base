// remove last element from an array.


// example with strings
let fruits = ["Apple", "Banana", "Orange"];
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);



// remove last element from an array of numbers.
let numbers = [1, 2, 3, 4, 5];
let lastNumber = numbers.pop();
console.log(lastNumber);
console.log(numbers);




// remove last element from an array of mixed types.
let mixedArray = [1, "two", 3, "four", true];
let lastElement = mixedArray.pop();
console.log(lastElement);
console.log(mixedArray);





// remove last element from an empty array.
let emptyArray = [];
let removedElement = emptyArray.pop();
console.log(removedElement);
console.log(emptyArray);




// remove last element from an array of objects.
let objectArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
let lastObject = objectArray.pop();
console.log(lastObject);
console.log(objectArray);



// remove last element from an array of arrays.
let arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
let lastArray = arrayOfArrays.pop();
console.log(lastArray);
console.log(arrayOfArrays);





// remove last element from an array of nested arrays.
let nestedArray = [[1, [2, 3]], [4, [5, 6]], [7, [8, 9]]];
let lastNestedArray = nestedArray.pop();
console.log(lastNestedArray);
console.log(nestedArray);




// remove last element from an array of single element.
let singleElementArray = [42];
let lastSingleElement = singleElementArray.pop();
console.log(lastSingleElement);
console.log(singleElementArray);
