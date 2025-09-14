// 👉 The rest operator is used to collect multiple values into a single array or object.
// 👉 Think of it as “packing” values together (opposite of spread, which “unpacks”).
//  (...) function used in paramert space 




//Function
// function fun(...num){
//       return num.reduce((total,val)=> total + val , 0);
// }

// console.log(fun(10,20,30));
// console.log(fun(50,40));




// Destructuring (Arrays)
// const arr1 = [10,20,30,40,50,60];
// const [a,b,c, ...rest] = arr1

// console.log(a);
// console.log(b);
// console.log(rest);




// Destructuring (Objects)
// let obj = {
//       name: "Akshat",
//       age: 22,
//       message: "Hello Akshat! 😎",
// }
// let { name , ...rest } = obj;

// console.log(name);
// console.log(rest);
