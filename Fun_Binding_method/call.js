// The call() method immediately invokes a function, allowing you to set the value of this and pass arguments to the function


// Example 1
function multiply(a, b){
    return a * b;
}

const result = multiply.call(this,22,20);
console.log(result);



// Example 2
let person1 = {
    Firstname: "A1",
    Lastname: "S1"
}

let person2 = {
    Firstname: "A2",
    Lastname: "S2"
}

let PrintName = function(Hometown, country){
    console.log(this.Firstname + " " + this.Lastname + " from " + Hometown +" " + country );
    
}

PrintName.call(person1, "Rewa", "India");
PrintName.call(person2, "Satna", "India");
