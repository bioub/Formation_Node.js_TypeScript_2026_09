// function() {
const Maths = require('./maths.js');
const hello = require('./hello.js');
const config = require('./config.json');
const { default: chalk } = require('chalk');

console.log(chalk.red(Maths.sum(2, 3)));
console.log(Maths.multiply(2, 3));
console.log(hello(config.name));
// }
