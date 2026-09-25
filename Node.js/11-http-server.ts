import { createServer } from 'node:http';



const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

// server.on('connection', (socket) => {
//   socket.write('Hello World');
//   socket.pipe(process.stdout);
// });

server.on('error', (error) => {
  console.error(error);
});

// server.on('request', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World');
// });

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
