// Typer des fonctions

// Définir le type d'une fonction
function add(a: number, b: number): number {
  return a + b;
}

// Définir le type d'une fonction avec un type alias
type Add = (a: number, b: number) => number;
const add2: Add = (a, b) => a + b;

// Très utile pour les callbacks
function withCallback(cb: (param: string) => void) {
  cb('Hello');
}

withCallback((test) => {
  console.log(test);
})

// Les fonctions async retournent des promesses
async function connectToDatabase(): Promise<void> {

}
