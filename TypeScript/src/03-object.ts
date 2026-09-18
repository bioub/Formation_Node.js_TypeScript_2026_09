// Inférence de type (le type est déduit de la valeur)
const coords = {
  x: 10,
  y: 20,
};

// Par défaut en TS, les objets ne sont pas extensibles, on ne peut pas ajouter de nouvelles propriétés à un objet
// coords.z = 30; // Erreur : la propriété 'z' n'existe pas sur le type '{ x: number; y: number; }'


// Pour définir un type pour un objet, on peut utiliser une interface ou un type alias
// Interface
interface Coords {
  x: number;
  y: number;
}

const coords2: Coords = {
  x: 10,
  y: 20,
};

// Type alias
type Coords2 = {
  x: number;
  y: number;
};

const coords3: Coords2 = {
  x: 10,
  y: 20,
};

// La différence entre une interface et un type alias est la façon dont ils peuvent être étendus.
// Une interface peut être étendue par une autre interface, tandis qu'un type alias ne peut pas être étendu.
// Cependant, un type alias peut être utilisé pour créer des types plus complexes, comme des unions ou des intersections.

interface Coords3 extends Coords {
  z: number;
}

const coords4: Coords3 = {
  x: 10,
  y: 20,
  z: 30,
};

// Un type alias ne peut pas être étendu, mais il peut être utilisé pour créer des types plus complexes
type Coords4 = Coords2 & {
  z: number;
};

const coords5: Coords4 = {
  x: 10,
  y: 20,
  z: 30,
};

// Clé optionnelle
interface Coords5 {
  x: number;
  y: number;
  z?: number; // La propriété z est optionnelle
}

const coords6: Coords5 = {
  x: 10,
  y: 20,
};

// Clé en lecture seule
interface Coords6 {
  readonly x: number; // La propriété x est en lecture seule
  readonly y: number; // La propriété y est en lecture seule
}

const coords7: Coords6 = {
  x: 10,
  y: 20,
};

// Le type objet peut être extensible
interface Coords7 {
  x: number;
  y: number;
  [key: string]: any; // Le type objet peut être extensible, on peut ajouter de nouvelles propriétés à un objet
}

const coords8: Coords7 = {
  x: 10,
  y: 20,
  z: 30, // On peut ajouter de nouvelles propriétés à un objet
  test: "Hello", // On peut ajouter de nouvelles propriétés à un objet
};

// classes

class Point {
  // sucre syntaxique pour créer des propriétés et les initialiser dans le constructeur
  constructor(public x: number, public y: number) {}

  // équivalent à :
  // public x: number;
  // public y: number;
  // constructor(x: number, y: number) {
  //   this.x = x;
  //   this.y = y;
  // }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}

// Une classe peut implémenter une interface, mais elle ne peut pas étendre un type alias
interface PointInterface {
  x: number;
  y: number;
  toString(): string;
}

class Point2 implements PointInterface {
  constructor(public x: number, public y: number) {}

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}

// Les classes abstraites ne peuvent pas être instanciées, mais elles peuvent être étendues par d'autres classes
abstract class Shape {
  constructor(public name: string) {}

  public abstract area(): number; // Méthode abstraite, doit être implémentée par les classes qui étendent cette classe

  public toString(): string {
    return `Shape: ${this.name}`;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }

  public area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
