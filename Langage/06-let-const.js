
let prenom = "Romain";
prenom = "romain"; // On peut modifier une variable

console.log(prenom); // romain


const prenom2 = "Romain";
// prenom2 = "romain"; // TypeError: Assignment to constant variable.

// console.log(prenom); // romain

// C'est la référence qui est constante, pas la valeur. On peut donc modifier les éléments d'un tableau déclaré avec const.
const prenoms = ["Romain", "Jean", "Pierre"];
prenoms.push("Toto"); // On peut modifier un tableau

console.log(prenoms); // ["Romain", "Jean", "Pierre", "Toto"]
