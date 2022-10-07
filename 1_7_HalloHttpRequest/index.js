const HTTPS = require('https');

const url = 'https://i24.ws/DW/info';

function succesfullRequest(content) {
  console.log(content);
}

function failedRequest(errorMessage) {
  console.error(errorMessage);
}

console.log('++++++ start ++++++');

/* Anfrage absenden */
HTTPS.get(url, (response) => {
  let content = '';

  /* im Fehlerfall die Fehlerfunktion aufrufen */
  response.on('error', failedRequest);

  /* wenn Datenchunks über den Stream gesendet werden */
  response.on('data', (data) => {
    content += data.toString();
  });

  /* wenn der Stream geschlossen wird */
  response.on('end', () => {
    succesfullRequest(content);
  });

});

console.log('------ ende ------');
