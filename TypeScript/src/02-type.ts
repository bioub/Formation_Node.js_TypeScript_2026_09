// Type alias

type Name = string;
const name: Name = "Romain";

// Union type
type Scalar = string | number | boolean;
let scalar: Scalar = "Hello";
scalar = 42;
scalar = true;

// Propriété et méthode communes à tous les types primitifs
// scalar.valueOf();

// Type Narrowing
function hello(val: Scalar) {
  if (typeof val === "string") {
    return `Hello ${val.toUpperCase()}!`;
  } else if (typeof val === "number") {
    return `Hello ${val.toFixed(2)}!`;
  } else {
    return `Hello ${val ? "true" : "false"}!`;
  }
}

// Eviter le type any, si vous ne savez pas quel type utiliser, utilisez unknown
// unknown est la même que any, mais il est type-safe, il faut faire du type narrowing pour l'utiliser
function helloUnknown(val: unknown) {
  // type guard
  if (typeof val === "string") {
    return `Hello ${val.toUpperCase()}!`;
  } else if (typeof val === "number") {
    return `Hello ${val.toFixed(2)}!`;
  } else if (typeof val === "boolean") {
    return `Hello ${val ? "true" : "false"}!`;
  } else {
    return "Hello unknown!";
  }
}


// Une valeur peut être un type
type Colors = 'red' | 'blue';

const colors: Colors = 'blue';
