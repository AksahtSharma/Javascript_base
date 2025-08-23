// Constructor Function
    
    let fun1 = function(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
        console.log("Hello from fun1");
}

let usersData = new fun1("Akshat", "Delhi", 24);
console.log("User age: "+ usersData.age);
console.log("User city: "+ usersData.city);
console.log("User name: "+ usersData.name);