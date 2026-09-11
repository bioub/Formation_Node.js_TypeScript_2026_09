

console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(-2)); // NaN


console.log(typeof Math.sqrt(4)); // "number"
console.log(typeof Math.sqrt(-2)); // "number"

// Comparaison avec NaN (pas possible de comparer avec NaN)
console.log(Math.sqrt(-2) === NaN); // false
console.log(NaN === NaN); // false

// Comparaison avec isNaN()
console.log(isNaN(Math.sqrt(-2)));
console.log(Number.isNaN(Math.sqrt(-2)));

