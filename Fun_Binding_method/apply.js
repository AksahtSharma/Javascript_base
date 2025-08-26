// Similar to call(), the apply() method invokes a function and allows you to set the value of this, but the difference is that the arguments are passed as an array (or an array-like object)


// Example 1
const User1 ={
    Name: "A1",
    age: 23,
    product: "Home Goods",
    id: "1234$56@{':;hfhfhf"
}

const User2 ={
    Name: "A2",
    age: 36,
    product: "Sweets",
    id: "9749732$^&%#@))!!fhdskyfiosf"
}

let Printbills = function(Hometown, pincode){
    console.log(this.Name + " " + this.id + " from " + Hometown + " " + pincode);
}

Printbills.apply(User1, ["Rewa", "464543"]);