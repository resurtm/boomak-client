const path = require('path');
const http = require('http');
const express = require('express');

const app = express();

app.set('port', 3250);
app.use(express.static('public'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = http.createServer(app);
server.on('error', err => {
  console.log(err);
});
server.on('listening', () => {
  console.log('Listening on port ' + app.get('port') + '...');
});
server.listen(app.get('port'));
