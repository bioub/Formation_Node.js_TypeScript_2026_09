import fs from 'node:fs';

// fs représente les fonctions liées au système de fichiers

// Exemple d'utilisation

// console.log(fs.readFileSync('file.txt', 'utf8')); // Récupère le contenu du fichier file.txt
// console.log(fs.writeFileSync('file.txt', 'Hello, world!')); // Écrit le contenu dans le fichier file.txt
// console.log(fs.appendFileSync('file.txt', 'Hello, world!')); // Ajoute le contenu dans le fichier file.txt
// console.log(fs.unlinkSync('file.txt')); // Supprime le fichier file.txt
// console.log(fs.renameSync('file.txt', 'file2.txt')); // Renomme le fichier file.txt en file2.txt
// console.log(fs.mkdirSync('dir')); // Crée le répertoire dir
// console.log(fs.rmdirSync('dir')); // Supprime le répertoire dir
// fs.chmodSync('file.txt', 0o755); // Change les permissions du fichier file.txt

// Chaque fonction de fs ou presque existe en 2 versions : sync et async
// sync : bloque le processus jusqu'à ce que la fonction soit terminée
// async : non bloquant, la fonction renvoie une promesse

// Exemple d'utilisation


// En Sync :
// - suffice sync
// - le fichier est lu en entier dans la mémoire
// - la fonction retourne le contenu du fichier
// - le processus est bloqué jusqu'à ce que l'appel de la fonction soit terminée
const content = fs.readFileSync('file.txt', 'utf8');
console.log(content);

// En Async :
// - le processus n'est pas bloqué, la fonction est exécutée en parallèle
// - on passe par un callback qui est exécutée quand le fichier est lu
// - le callback reçoit 2 arguments : l'erreur éventuelle et le contenu du fichier
fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log(data);
});
