import { createServer } from 'node:net';

const server = createServer((socket) => {
  socket.write('Hello World');
  socket.pipe(process.stdout);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
