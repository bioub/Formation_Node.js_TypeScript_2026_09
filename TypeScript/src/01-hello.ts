import assert from "node:assert";

function hello(name: string) {
  name = name ?? 'Toto';

  return `Hello ${name.toUpperCase()}!`;
}


const names = ["Romain", "Jean", "Pierre"];

for (const name of names) {
  console.log(hello(name));
}

assert.strictEqual(hello("Romain"), "Hello ROMAIN!");
