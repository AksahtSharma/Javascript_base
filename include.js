// The includes() method is used to check if an array or string contains a specific value.


// 1
console.log("JavaScript".includes("JavaScript"));

// 2
console.log("javascript".includes("script"));


// But when we check with array it behave diffrent
console.log(["javascript","react"].includes("react"));

// Like this it give false
console.log(["javascript","react"].includes("java"));

// Example 1 (Array)
let Number = [10,15,20,25,30];

console.log(Number.includes(20));
console.log(Number.includes(202));

console.log(Number.includes(20, 2));
console.log(Number.includes(20, 4));


// Example 2 (String)
let Str = "I am Akshat Sharma";
console.log(Str.includes("Akshat"));


// UseCase
let userInfo = ["Akshat", "Ram", "Jhon"];

if(userInfo.includes("Ram")){
      console.log("User found✅ ");   
}else{
      console.log("User not found✖️");
      
}