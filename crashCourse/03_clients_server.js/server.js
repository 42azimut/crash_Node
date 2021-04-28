const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
  res.write('<h1>hi theer</h1>');
  res.end('<p> hello server </p>');
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});