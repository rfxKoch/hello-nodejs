const HTTPS = require('https');

function httpPromise(url) {
  return new Promise((thenResolve, catchReject) => {
    HTTPS.get(url, (response) => {
      let content = '';

      /* Fehler */
      response.on('error', (err) => {
        catchReject(err);
      });

      /* Daten Chunk */
      response.on('data', (data) => {
        content += data.toString();
      });

      /* Stream Ende */
      response.on('end', () => {
        thenResolve(content);
      });

    });
  });
}

(async () => {
  console.log('++++++ sync ++++++');
  await httpPromise('https://i24.ws/DW/info')
    .catch((err) => {
      console.error(err);
    })
    .then((data) => {
      console.log(data);
    });
  console.log('------ sync ------');
})();
