const express = require('express');
const app = new express();

/* In der Azure Cloud wird der Port vom System bestimmt */
const webserverPort = process.env.PORT || 8081;

const server = app.listen(webserverPort, () => {
  console.log('server listening @', server.address().port);
});

/* eine einfache GET-Anfrage auf den WWW-Root */
app.get('/', (request, response) => {
  response.send('Hallo Welt!');
});

/* statische Dateinen liegen im Unterverzeichnis 'public' */
app.use(express.static('public'));

/* elemente aus dem Pfad können als Paramenter ausgelesen werden */
app.get('/hallo/:name', (request, response) => {
  const name = request.params.name;
  response.send(`Hallo ${name}!`);
});


/* abfragen lassen sich verketten um zB den Nutzer zu identifizieren */
app.all('/secure/:user', (request, response, next) => {
  if (request.params.user === 'admin') return next();
  response.status(401).send('Das sind nicht die Informationen die Du suchst');
});

/* und dann bei Erfolg zum Beispiel ein Log zu schreiben */
app.all('/secure/:user', (request, response, next) => {
  console.log(
      `Der Nutzer '${request.params.user}' hat den Sicherheitsbereich beteten`);
  next();
});

/* und schließlich die Informationen auszugeben */
app.get('/secure/:user', (request, response) => {
  response.send('Hier sind ein paar geheime Informationen');
});


/* diese Kette lässt sich ebenfalls in einem einzigen Aufruf definieren */
app.get(
    '/admin',
    (request, response, next) => {
      if (request.query.user !== 'admin') {
        response.status(401).send('Du kommst hier nicht rein.');
      }
      next();
    });
