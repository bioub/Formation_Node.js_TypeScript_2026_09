// function(exports, require, module, __filename, __dirname) {
// console.log('Hello from CommonJS!', arguments);

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

exports.sum = sum;
exports.multiply = multiply;
// }