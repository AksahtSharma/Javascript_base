// Find duplecates in an array

let arr = [1, 2, 3, 1, 4, 4, 5, 6, 6, 7, 8];
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicates);

