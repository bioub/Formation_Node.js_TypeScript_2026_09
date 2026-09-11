function withDefaultParameter(name = "World") {
  return `Hello ${name.toUpperCase()}!`;
}

console.log(withDefaultParameter());
console.log(withDefaultParameter("Romain"));

function withOptions(options: { name?: string; color?: string } = {}) {
  const name = options.name ?? "World";
  const color = options.color ?? "Blue";
  return `Hello ${name.toUpperCase()}! Your favorite color is ${color}.`;
}

console.log(withOptions());
console.log(withOptions({ name: "Romain" }));
console.log(withOptions({ color: "Red" }));
console.log(withOptions({ name: "Romain", color: "Green" }));

function withRestParameters(...names: string[]) {
  return names.map((name) => `Hello ${name.toUpperCase()}!`).join("\n");
}

console.log(withRestParameters("Romain", "Jean", "Pierre"));
