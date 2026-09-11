// Les objets JavaScript sont extensibles et dynamiques, ce qui signifie que vous pouvez ajouter, modifier ou supprimer des propriétés et des méthodes à tout moment. Voici un exemple simple d'un objet JavaScript :

// y compris dans des objets du langage

console.log(Math.sum); // undefined

Math.sum = function (a, b) {
  return a + b;
};

console.log(Math.sum(2, 3)); // 5

delete Math.random;

console.log(Math.random); // undefined

// 2 syntaxes pour accéder aux propriétés d'un objet : la notation par point et la notation par crochets

console.log(Math.sum(Math.PI, 2)); // 5
console.log(Math["sum"](Math["PI"], 3)); // 5

const method = "sum";
console.log(Math[method](Math.PI, 4)); // 7.141592653589793

// 2 systèmes pour créer un objet : la notation littérale et le constructeur

// Use cases :
// - des objets simples pour stocker des données (ex : coordonnées d’un point, configuration d’une application, etc.)
// - des objets uniques avec des méthodes spécifiques (Math, console, document) -> namespace objects
const obj1 = {
  name: "Alice",
  age: 30,
  // hello: function () {
  //   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  // }
};

// Use cases :
// - des objets plus complexe ou la fonction masque cette complexité
// - des objets avec des types
// - des objets avec des méthodes créés plusieurs fois (ex : Person, Animal, etc.) -> factory objects

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function () {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

console.log(Person.prototype.hello);


const obj2 = new Person("Bob", 25);
console.log(obj2.name); // Bob
obj2.hello(); // Hello, my name is Bob and I am 25 years old.
console.log(obj2.hasOwnProperty("name")); // true
console.log(obj2.hasOwnProperty("hello")); // false

console.log(obj2 instanceof Person); // true
