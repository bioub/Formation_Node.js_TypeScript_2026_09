// function() {
import { sum, multiply } from './maths.js';
import hello from './hello.js';
import config from './config.json' with { type: 'json' };

console.log(sum(2, 3));
console.log(multiply(2, 3));
console.log(hello(config.name));
// }
