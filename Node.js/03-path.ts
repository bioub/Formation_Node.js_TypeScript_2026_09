import path from 'node:path';

// path représente les fonctions liées aux chemins de fichiers

// Exemple d'utilisation

console.log(path.basename('/foo/bar/baz/asdf/quux.html')); // Récupère le nom du fichier
console.log(path.dirname('/foo/bar/baz/asdf/quux.html')); // Récupère le chemin du répertoire
console.log(path.extname('/foo/bar/baz/asdf/quux.html')); // Récupère l'extension du fichier
console.log(path.join('/foo', 'bar', 'baz', 'asdf', 'quux.html')); // Récupère le chemin complet du fichier
console.log(path.resolve('/foo', 'bar', 'baz', 'asdf', 'quux.html')); // Récupère le chemin complet du fichier
console.log(path.normalize('/foo/bar/baz/asdf/quux.html')); // Récupère le chemin normalisé du fichier
console.log(path.parse('/foo/bar/baz/asdf/quux.html')); // Récupère les informations sur le fichier

// Différence join et resolve
// join donne un chemin relatif
// resolve donne un chemin absolu en prenant en compte le CWD
console.log(path.join('foo', 'bar', 'baz', 'asdf', 'quux.html')); // Récupère le chemin complet du fichier
console.log(path.resolve('foo', 'bar', 'baz', 'asdf', 'quux.html')); // Récupère le chemin complet du fichier


// Quand on fait référence à un fichier on souhaite souvent utiliser un chemin qui ne dépend pas du CWD
// On peut utiliser path.resolve() ou path.join() préfixés par __dirname
// console.log(path.resolve(__dirname, 'foo', 'bar', 'baz', 'asdf', 'quux.html')); // Récupère le chemin complet du fichier
// console.log(path.join(__dirname, 'foo', 'bar', 'baz', 'asdf', 'quux.html')); // Récupère le chemin complet du fichier

// Problème : __dirname vient du module CommonJS, pas du module ESM
// On peut utiliser import.meta.dirname pour obtenir le chemin du fichier courant
console.log(path.resolve(import.meta.dirname, 'foo', 'bar', 'baz', 'asdf', 'quux.html')); // Récupère le chemin complet du fichier
console.log(path.join(import.meta.dirname, 'foo', 'bar', 'baz', 'asdf', 'quux.html')); // Récupère le chemin complet du fichier
