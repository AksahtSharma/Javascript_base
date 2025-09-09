// it give true because != convert string 12 to number 12 than both are not equal that's by it give true
console.log(13 != "12");



// it give false because != convert string 13 to number 13 than both are equal that's by it give false
console.log(13 != "13");



// it give false because 13 number is equal 13 number
console.log(13 != 13);




// it give false because 12 number is equal 12 number
console.log(12 !== 12)



//  Check type any value use Typeof operator
console.log(typeof 12 , typeof "12", typeof 12n, typeof true, typeof null, typeof undefined, typeof Symbol("id"), typeof {name: "John"}, typeof [1, 2, 3], typeof function(){}); 




// Check == or === operator
// it give true because == convert string 12 to number 12 than both are equal that's by it give true
console.log(12 == "12"); 




// it give false because === not convert string 12 to number 12 than both are not equal that's by it give false
console.log(12 === "12");




console.log("" == {}); 
// console.log("" === {});
// console.log("" === []);
console.log("" == []);
console.log(null === undefined);
console.log(null == undefined);
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(NaN !== NaN);
console.log(NaN != NaN);


// Check && and || operator
let st1 = "Hello";
let st2 = "World";
let st3 = st2 && st1;
console.log(st3);

let str1 = "Hello";
let str2 = "World";
let str3 = str2 || str1;
console.log(str3);



