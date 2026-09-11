(globalThis as any).globalVar = 'globalVar';

// La portée de fileVar dépend de comment le fichier est exécuté.
// Si le fichier est exécuté dans un module, fileVar sera limité à ce module.
// Si le fichier est exécuté dans un script, fileVar sera global (sauf dans Node.js, où il sera limité au module quoiqu'il arrive).
const fileVar = 'fileVar';

function externalFunction() {
  // La portée de localVar est limitée à la fonction externalFunction.
  const localVar = 'localVar';

  console.log('externalFunction:');
  console.log('  globalThis.globalVar:', (globalThis as any).globalVar);
  console.log('  fileVar:', fileVar);
  console.log('  localVar:', localVar);

  function internalFunction() {
    // La portée de internalVar est limitée à la fonction internalFunction.
    const internalVar = 'internalVar';

    console.log('internalFunction:');
    console.log('  globalThis.globalVar:', (globalThis as any).globalVar);
    console.log('  fileVar:', fileVar);
    console.log('  localVar:', localVar);
    console.log('  internalVar:', internalVar);

    if (true) {
      // La portée de blockVar est limitée au bloc if.
      // Pour limiter à un bloc on peut utiliser const ou let, mais pas var.
      const blockVar = 'blockVar';

      console.log('block:');
      console.log('  globalThis.globalVar:', (globalThis as any).globalVar);
      console.log('  fileVar:', fileVar);
      console.log('  localVar:', localVar);
      console.log('  internalVar:', internalVar);
      console.log('  blockVar:', blockVar);
    }
  }

  internalFunction();
}

externalFunction();
