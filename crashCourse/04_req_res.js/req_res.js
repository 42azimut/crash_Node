const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
  console.log(req.url);
  console.log(req.method);
  //res.setHeader('Content-Type', 'text/plain');  //html 태그도 일반 텍스트처리
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write('hello jayden');  //plain text
      res.write('<h2>hello jayden</h2>');  //html 
      res.end('<p> hello server </p>'); 
    } else if (req.url === '/about') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<p> about route</p>');
    }
  }
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});