import os from 'node:os';

// os représente l'environnement d'exploitation

// Exemple d'utilisation

console.log(os.hostname()); // Récupère le nom de l'hôte
console.log(os.platform()); // Récupère la plateforme sur laquelle Node.js est en cours d'exécution
console.log(os.arch()); // Récupère l'architecture du processus (x64, arm, etc.)
console.log(os.version()); // Récupère la version de l'OS
console.log(os.totalmem()); // Récupère la mémoire totale disponible en octets
console.log(os.freemem()); // Récupère la mémoire libre disponible en octets
console.log(os.cpus()); // Récupère les informations sur les processeurs
console.log(os.homedir()); // Récupère le chemin du répertoire home de l'utilisateur
console.log(os.tmpdir()); // Récupère le chemin du répertoire temporaire
console.log(os.type()); // Récupère le type d'OS
console.log(os.uptime()); // Récupère le temps d'exécution de l'OS en secondes
console.log(os.userInfo()); // Récupère les informations sur l'utilisateur
console.log(os.networkInterfaces()); // Récupère les informations sur les interfaces réseau
console.log(os.EOL); // Récupère le caractère de fin de ligne
console.log(os.endianness()); // Récupère le type d'endianness de l'OS
console.log(os.loadavg()); // Récupère la charge moyenne de l'OS

