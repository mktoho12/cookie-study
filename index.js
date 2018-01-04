'use strict';

const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  res.setHeader('Set-Cookie', 'last_access=' + now + ';');
  const lastAccessTime = req.headers.cookie ? parseInt(req.headers.cookie.split(/=/)[1]) : now;
  res.end(new Date(lastAccessTime).toString());
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

