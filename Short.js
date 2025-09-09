// It short array in accending order or decending order


// Example usage:
let arr = [5, 3, 8, 1, 2];
console.log(shortArray(arr));
console.log(shortArray(arr, 'desc'));
console.log(shortArray(arr, 'asc'));




// Example usage:
let arr2 = [5, 3, 8, 1, 2];
let sr = arr2.sort((a, b) => a - b);
console.log(sr);



// Function to short array:
function shortArray(arr, order = 'asc') {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    if (order === 'asc') {
        return arr.sort((a, b) => a - b);
    } else if (order === 'desc') {
        return arr.sort((a, b) => b - a);
    } else {
        throw new Error("Invalid order. Use 'asc' or 'desc'.");
    }
}
console.log(shortArray([55, 33, 89, 31, 42]));
console.log(shortArray([55, 33, 89, 31, 42], 'asc'));
console.log(shortArray([55, 33, 89, 31, 42], 'desc'));
