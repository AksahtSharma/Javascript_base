// It find first elementb which satisfies the condition and return that element
// If no element found then it return undefined


// Example 1
const array = [1, 2, 3, 4, 5, 6, 7,];
const found = array.find(element => element > 5);
console.log(found); 



// Example 2
const users = [
    {name: "Aksaht", age: 25},
    {name: "Anurag", age: 30},
    {name: "Sanjana", age: 28}
];
const foundUser = users.find(user => user.age > 28);
console.log(foundUser);
