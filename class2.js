// Insert space before each uppercase letter (except the first character)
// g = global flag is used to replace all occurrences
// p1 = the matched uppercase letter
// offset = position(index) of the matched in the string

let Name = "AksahtSHarmaINterview";
let spacedName = Name.replace(/([A-Z])/g, (p1, offset) => offset === 0 ? p1 : ' ' + p1);
console.log(spacedName);


// Other ways to write the same logic
// $1 → replaced with whatever matched first group ([a-z])
// $2 → replaced with whatever matched second group([A-Z])

function secondWayToWrite(str) {
    return str
    .replace(/([a-z])([A-Z])/g , '$1 $2')
    .replace(/([A-Z])([A-Z]) ([a-z])/g, '$1 $2');

}
console.log(secondWayToWrite("HelloWorld"));



// With Array
const arr = ["appleBanana", "mangoOrange"];
const result = arr.map(item =>
    item.replace(/([a-z])([A-Z])/g, "$1 $2")
);
console.log(result); 

