// Higher-Order Function: takes another function as a parameter
function filterArray(arr, callback) {
    let result = [];
    for (let item of arr) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}

// Example Data
const expenses = [500, 1500, 200, 30000, 750, 1200];

// Callback function
function isAboveThousand(amount) {
    return amount > 10000;
}

// Use the HOF
const bigExpenses = filterArray(expenses, isAboveThousand);

console.log(bigExpenses); 
