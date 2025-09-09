// The bind() method is used to create a new function that, when called, has its this value set to a specified value, regardless of how the function is invoked. Usefull for leter execution


// Example 1
const User1 = {
    Name: "A1",
    age: 23,
    product: "Home Goods",
    id: "1234$56@{':;hfhfhf"
}

const User2 = {
    Name: "A2",
    age: 36,
    product: "Sweets",
    id: "9749732$^&%#@))!!fhdskyfiosf"
}

let Printbills = function(Hometown, pincode){
    console.log(this.Name + " " + this.id + " from " + Hometown + " " + pincode);
}

let NewPrint = Printbills.bind(User1, "Rewa", "464543");
NewPrint();