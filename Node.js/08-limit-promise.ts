import { setInterval } from 'node:timers/promises';
// Les promesses ne fonctionnent que si le callback est appelé une seule fois

// function delay(ms: number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(1000).then(() => {
//   console.log('1 second');
// });

// delay(1000).then(() => {
//   console.log('1 second');
// });

// function interval(ms: number) {
//   return new Promise((resolve, reject) => {
//     setInterval(resolve, ms);
//   });
// }

// interval(1000).then(() => {
//   console.log('1 second');
// });

// Pour les cas où le callback est appelé plusieurs fois, on peut utiliser :
// - stream
// - observable (rxjs)
// - async iterator

for await (const _value of setInterval(1000)) {
  console.log('1 second');
}
