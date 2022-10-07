const Server = require('ws').Server;

/* einen WebSocket Server initialisieren */
const WSS = new Server({
  port: 3333
});

/* wenn ein Fehler auftritt */
WSS.on('error', (err) => {
  console.error(err);
});

/* wenn sich ein Client mit dem Server verbindet */
WSS.on('connection', (socket) => {

  /* wenn der Client eine Nachricht sendet */
  socket.on('message', (message) => {

    /* den Inhalt der Nachricht umdrehen */
    let reply = [];
    message.toString().split('').forEach(v => {
      reply.unshift(v);
    });
    replay = reply.join('');

    /* und an den Client zurück senden */
    socket.send(reply);
  });

});

/* wenn der Server aktiv wird, eine Nachticht in die Konsole */
WSS.on('listening', () => {
  console.log('server listening @', WSS.address().port);
});
