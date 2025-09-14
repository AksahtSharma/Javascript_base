// The spread operator (...) is used to expand elements of an array, object, or string into individual elements.
// 👉 Think of it as “unpacking” values.



// Arrays
// 1)  copy
// let arr1 = [10,20,30,40,50];
// let arr2 = [...arr1];

// console.log(arr2);



// 2) merge
// let ar1 = [10,20,30];
// let ar2 = [40,50];
// let merge = [...ar1, ...ar2];

// console.log(merge);



// 3) pass
// function sum(a,b,c){
//       return a - b + c;
// }

// const num = [1,2,3];
// console.log(sum(...num));



// Object
//1) Copy
// const obj = {
//       name: "Army",
//       message: "of India"
// }

// let obj2 = {...obj};
// console.log(obj2);



// 2) Merge
// const obj = {
//       name: "Solider",
//       age: 23
// }

// let obj2 = {
//       argiment: "21 PARA",
//       categre: "Spacial Froce"
// }

// const merge = {...obj, ...obj2};
// console.log(merge);



//String
//1)  splits into charcater
// const str = "abcd";
// const split = [...str];

// console.log(split);




//in Math
// let num = [10,20,30,40];
// console.log(Math.max(...num));
// console.log(Math.min(...num));



// Example 1
// const user = { name: "Akshat", age: 22 };
// const hobbies = ["coding", "reading"];

// const newUser = {
//   ...user,
//   hobbies: [...hobbies, "gaming"]
// };

// console.log(newUser);

