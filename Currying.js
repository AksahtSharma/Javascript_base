// Currying is javascript technique where a function take multiple arguments one at a time. It use because avoid repating code 


// using bind method 
let multiply = function(x, y){
      return x*y;
}

let multipleByOne = multiply.bind(this);
console.log(multipleByOne(6,6));

let multipleByTwo = multiply.bind(this);
console.log(multipleByTwo(11,12));




// other way of using bind 
let multiple = function(a,b){
      console.log(a**b);
      
}

let multipleByX = multiple.bind(this);
multipleByX(2,3);

let multipleByY = multiple.bind(this);
multipleByY(12,3);





// Using function Closures
let Multiply = function(x){
      return function(y){
            console.log(x*y);
            
      }
}
let MultiplyByOne = Multiply(6);
MultiplyByOne(3);



// Infinite Currying Question
function add(a){
      return function(b){
            if(b) return add(a+b);
            return a;
      }
}

console.log(add(2)(3)(4)(10)());
