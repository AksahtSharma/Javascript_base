var a = 1000;
{
    var a = 2000;
}
console.log(a);
let b = a;
{
    let b = 3000;
}
console.log(b);




let Name = "aksahtSHarmaINterview";

// Insert space before each uppercase letter (except the first character)
let spacedName = Name.replace(/([A-Z])/g, (p1, offset) => offset === 0 ? p1 : ' ' + p1);
console.log(spacedName);
