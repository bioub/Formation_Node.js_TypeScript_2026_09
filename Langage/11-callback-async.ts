import { setTimeout } from "node:timers";

setTimeout(() => console.log("A"), 500);
setTimeout(() => console.log("B"), 0);
setTimeout(() => console.log("C"), 1000);
setTimeout(() => console.log("D"), 500);

console.log("E");


// pile d'appels
// ^
// |
// |
// |                                                        [log]
// |[setTimeout][setTimeout][setTimeout][setTimeout][log] ↻ [taskB] ↻     [taskA][taskD] ↻        [taskC]
// +---------------------------------------------------------7ms-----------500ms------------------1000ms-> temps
//                                                   E       B


// File d'attente
// 0ms : taskB
// 7ms :
// 499ms : taskA, taskD
// 500ms : taskD
// 501ms :


// E B A D C
