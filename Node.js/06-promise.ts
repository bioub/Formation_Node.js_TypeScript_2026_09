// Le but d'une promise est de ne plus avoir le callback hell
import fs from 'node:fs/promises';

fs.readFile('package.json')
  .then(content => fs.writeFile('package.json.backup', content))
  .then(() => console.log('Backup created'))
  .catch(err => console.error(err));

// En version async/await :
async function backup() {
  try {
    const content = await fs.readFile('package.json');
    await fs.writeFile('package.json.backup', content);
    console.log('Backup created');
  } catch (err) {
    console.error(err);
  }
}

backup();

// Depuis ES2022, on peut utiliser le mot-clé async/await à la racine du fichier
// Top-level await (uniquement dans les fichiers ESM)
try {
  const content = await fs.readFile('package.json');
  await fs.writeFile('package.json.backup', content);
  console.log('Backup created');
} catch (err) {
  console.error(err);
}
