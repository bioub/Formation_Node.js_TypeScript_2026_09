import process from 'node:process';

// Process représente l'instance courante du processus Node.js

// Exemple d'utilisation

console.log(process.cwd()); // Récupère le chemin du répertoire de travail courant
// Quand on fait référence à un fichier de façon relative, c'est relatif au CWD

// On peut modifier le CWD avec process.chdir()
process.chdir('/tmp');
console.log(process.cwd());

// On peut récupérer les arguments passés au programme
console.log(process.argv);

// Les variables d'environnement sont accessibles avec process.env
console.log(process.env);

// On peut ajouter une variable d'environnement avec process.env.NOM_VARIABLE = 'VALEUR'
process.env.NOM_VARIABLE = 'VALEUR';
console.log(process.env.NOM_VARIABLE);

// On peut supprimer une variable d'environnement avec delete process.env.NOM_VARIABLE
delete process.env.NOM_VARIABLE;
console.log(process.env.NOM_VARIABLE);

// NODE_ENV est une variable d'environnement qui est utilisée pour indiquer le mode de l'application
// Elle peut être 'development', 'production' ou 'test'
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    console.log('Mode développement');
} else if (process.env.NODE_ENV === 'production') {
    console.log('Mode production');
} else if (process.env.NODE_ENV === 'test') {
    console.log('Mode test');
}

// Kill le processus avec process.exit(code)
// process.exit(0); // 0 : succès, 1 : échec

// Stats
const stats = process.memoryUsage();
console.log(stats);

// On peut récupérer le temps d'exécution avec process.uptime()
console.log(process.uptime());

// On peut récupérer le nom du processus avec process.title
console.log(process.cpuUsage()); // Renvoie un objet avec les stats de CPU utilisée

process.on('SIGTERM', () => {
  console.log('SIGTERM reçu : CTRL+C');
});

// Architecture (x64, arm, etc.)
console.log(process.arch);
// Plateforme (linux, darwin, win32, etc.)
console.log(process.platform);
// Version de Node.js
console.log(process.version);

// Entrée standard (stdin) / Sortie standard (stdout) / Sortie d'erreur (stderr)
process.stdin.on('data', (data) => {
    console.log(`Donnée reçue : ${data}`);
});

process.stdout.write('Hello, world!\n');
process.stderr.write('Error: Something went wrong\n');

// On peut rediriger la sortie standard avec process.stdout.write()
process.stdout.write('Hello, world!\n');
process.stderr.write('Error: Something went wrong\n');
