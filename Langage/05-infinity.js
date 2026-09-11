

const nestedArray = [[1, 2], [3, 4], [5, 6, [7, 8, [9, 10]]]];

console.log(nestedArray.flat());
console.log(nestedArray.flat(2));
console.log(nestedArray.flat(Infinity));

