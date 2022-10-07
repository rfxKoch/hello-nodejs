const FS = require('fs');
const path = './test';


/* Verzeichniseinträge in ein Array lesen */
console.log('sync', '++++++ start ++++++');
const verzeichnis = FS.readdirSync(path);
verzeichnis.forEach((filename) => {
  console.log('sync', filename);
});
console.log('sync', '------ ende ------');


/* Verzeichniseinträge mit Callback lesen */
console.log('async', '++++++ start ++++++');
FS.readdir(path, (err, files) => {
  if (err) console.error(err);
  for (const filename of files) {
    FS.readFile(`${path}/${filename}`, (err, data) => {
      if (err) console.error(err);
      console.log('async', data.toString());
    });
  }
});
console.log('async', '------ ende ------');
