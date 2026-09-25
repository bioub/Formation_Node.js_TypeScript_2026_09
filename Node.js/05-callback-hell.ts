import fs from 'node:fs';

// Dans cet exemple, on va enchainer des opérations
// et gérer les erreurs de façon globale

try {
  const content = fs.readFileSync('package.json');
  fs.writeFileSync('package.json.backup', content);
  console.log('Backup created');
} catch (err) {
  console.error(err);
}

// En version async :
fs.readFile('package.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile('package.json.backup', data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Backup created');
      }
    });
  }
});
