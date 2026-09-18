// const el = document.getElementById('box');

// if (el !== null) {
//   el.className = '';
// }

// el?.className = '';


// Assert not null
// const el = document.getElementById('box')!;
// console.log(el.value);

// On sait que box est un HTMLInputElement :


// Assertion de type (force le type)
const el = document.getElementById('box') as HTMLInputElement;
console.log(el.value);

// Pour ce cas particulier (querySelector), la fonction est définie comme générique
const elements = document.querySelectorAll<HTMLInputElement>('checkbox')  ;

for (const element of elements) {
  console.log(element.checked)
}

