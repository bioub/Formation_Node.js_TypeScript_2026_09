import fs from 'node:fs/promises';
import { setTimeout } from 'node:timers/promises';

async function readPackageJson() {
  const content = await fs.readFile('package.json', 'utf8');
  return JSON.parse(content);
}

async function readPackageLockJson() {
  const content = await fs.readFile('package-lock.json', 'utf8');
  return JSON.parse(content);
}

// const packageJson = await readPackageJson();
// const packageLockJson = await readPackageLockJson();

// console.log(packageJson);
// console.log(packageLockJson);

// Attention : ici la lecture se fait en parallèle
// on ne peut pas garantir l'ordre d'exécution
// readPackageJson().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.error(err);
// });

// readPackageLockJson().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.error(err);
// });


// Avec Promise.all, on peut lire les 2 fichiers en parallèle
// et on peut garantir l'ordre d'exécution
// Promise.all([readPackageJson(), readPackageLockJson()]).then(([packageJson, packageLockJson]) => {
//   console.log(packageJson);
//   console.log(packageLockJson);
// }).catch(err => {
//   console.error(err);
// });

// Promise.all permet de combiner un tableau de promesses en une seule promesse
// qui sera résolue quand toutes les promesses seront résolues
// Attention si une des promesses échoue, la promesse globale échoue
const [packageJson, packageLockJson] = await Promise.all([readPackageJson(), readPackageLockJson()]);
console.log(packageJson);
console.log(packageLockJson);

// Promise.allSettled permet de combiner un tableau de promesses en une seule promesse
// qui sera résolue quand toutes les promesses seront résolues ou rejetées
const [resultPackageJson, resultPackageLockJson] = await Promise.allSettled([readPackageJson(), readPackageLockJson()]);

if (resultPackageJson.status === 'fulfilled') {
  console.log(resultPackageJson.value);
} else {
  console.error(resultPackageJson.reason);
}

if (resultPackageLockJson.status === 'fulfilled') {
  console.log(resultPackageLockJson.value);
} else {
  console.error(resultPackageLockJson.reason);
}

// Promise.race permet de combiner un tableau de promesses en une seule promesse
// qui sera résolue quand la première promesse sera résolue ou rejetée
const result = await Promise.race([readPackageJson(), setTimeout(1000)]);
console.log(result);

// Promise.any permet de combiner un tableau de promesses en une seule promesse
// qui sera résolue quand la première promesse sera résolue
// const fastest = await Promise.any([mirror1(), mirror2(), mirror3()]);
// console.log(fastest);
