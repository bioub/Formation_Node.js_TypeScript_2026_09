function withDefaultParameter(name = "World") {
  return `Hello ${name.toUpperCase()}!`;
}

console.log(withDefaultParameter());
console.log(withDefaultParameter("Romain"));

function withOptions(options: { name?: string; color?: string } = {}) {
  // Nullish coalescing operator (??) : si la valeur de gauche est null ou undefined, on prend la valeur de droite
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

function withRestAndDefaultParameters(name: string = "World", ...colors: string[]) {
  const colorList = colors.length > 0 ? colors.join(", ") : "Blue";
  return `Hello ${name.toUpperCase()}! Your favorite colors are ${colorList}.`;
}

console.log(withRestAndDefaultParameters());
console.log(withRestAndDefaultParameters("Romain"));
console.log(withRestAndDefaultParameters("Romain", "Red", "Green", "Blue"));


// REST et SPREAD (depuis ES2015)
// Sucre syntaxique (syntaxe raccourcie) qu'on pourrait écrire autrement
// Conversion syntaxique entre un tableau et une liste de valeurs
// REST : une liste de valeurs qu'on transforme en tableau
// SPREAD : un tableau qu'on transforme en liste de valeurs

// REST avec destructuration
const [first, ...autres] = ["Romain", "Jean", "Pierre"];
console.log(first); // "Romain"
console.log(autres); // ["Jean", "Pierre"]

// REST sur les objets (ES2018)
//    { nom: "Romain", age: 30, ville: "Paris" }
const { nom: prenom  , ...autresProps          } = { nom: "Romain", age: 30, ville: "Paris" };
console.log(prenom); // "Romain"
console.log(autresProps); // { age: 30, ville: "Paris" }

// SPREAD avec les tableaux
const tableau1 = [1, 2, 3];
const tableau2 = [4, 5, 6];
const tableauConcatene = [...tableau1, ...tableau2];
console.log(tableauConcatene); // [1, 2, 3, 4, 5, 6]

// SPREAD pour compléter un tableau avec des valeurs
const tableauAvecValeursParDefaut = [0, ...tableau1, 7, 8];
console.log(tableauAvecValeursParDefaut); // [0, 1, 2, 3, 7, 8]

// Permet de manipuler les tableaux de manière immuable (sans modifier le tableau original)
// Version muable
const tableauOriginal = [1, 2, 3];
tableauOriginal.push(4);
console.log(tableauOriginal); // [1, 2, 3, 4]

// Version immuable
const tableauImmuable = [...tableauOriginal, 5];
console.log(tableauImmuable); // [1, 2, 3, 4, 5]
console.log(tableauOriginal); // [1, 2, 3, 4] (inchangé)

// SPREAD avec les objets (ES2018)
const objet1 = { nom: "Romain", age: 30 };
const objet2 = { ville: "Paris", pays: "France" };
const objetConcatene = { ...objet1, ...objet2 };
console.log(objetConcatene); // { nom: "Romain", age: 30, ville: "Paris", pays: "France" }

// Compléter un objet avec des valeurs par défaut
const objetAvecValeursParDefaut = { ...objet1, age: 30, ville: "Paris" };
console.log(objetAvecValeursParDefaut); // { nom: "Romain", age: 30, ville: "Paris" }
