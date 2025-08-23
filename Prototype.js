let obj1 = {
    isHuman: true,
    isFly: false,
    isRun: true,
};

let obj2 = {
    name: 'Aksaht Sharma',
    age: 25,
    city: 'Rewa',
};

let obj3 = {
    name: "Shivani Sharma",
    age: 24,
    city: "Satna",
};

Object.setPrototypeOf(obj2, obj1);
Object.setPrototypeOf(obj3, obj1);

// Accessing properties from the prototype
console.log(obj2.isFly);
console.log(obj3.isHuman);





