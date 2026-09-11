function hello(name: string) {
  return `Hello ${name.toUpperCase()}!`;
}


const names = ["Romain", "Jean", "Pierre"];

for (const name of names) {
  console.log(hello(name));
}


