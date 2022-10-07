const HTTP = require('http');
const FS = require('fs');

/* einen HTTP-Server erstellen */
const httpServer = HTTP.createServer((request, response) => {
  let requestBody = '';

  /* wenn Daten über den Stream reinkommen */
  request.on('data', (data) => {
    requestBody += data;
  });

  /* wenn der Request-Stream beendet wird */
  request.on('end', () => {
    console.log('URL', request.url);

    /* falls nach dem Fav-Icon gefragt wurde, haben wir nicht */
    if (request.url == '/favicon.ico') {
      response.writeHead(404, 'Ich habe heute kein Foto für Dich.');
      return response.end();
    }

    /* prüfen ob es eine Datei im Public-Ordner gibt */
    const testFile = `./public${request.url}`;
    if (FS.existsSync(testFile) && FS.lstatSync(testFile).isFile()) {
      const content = FS.readFileSync(testFile);
      return response.end(content);
    }

    /* sonst mit dem antworten was empfangen wurde */
    response.setHeader('content-type', 'text/html')
    response.write(`Die angefragte URL war '${request.url}'<hr/>`);
    response.end(requestBody);
  });
});

/* Server hört auf Port 8080 */
httpServer.listen(8080, () => {
  console.log('server listening @', httpServer.address().port);
});
