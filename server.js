const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const hostname = 'localhost'; 
const port = process.env.PORT || 3000;

server.listen(port, hostname, () => {
  console.log(`JSON Server is running on http://${hostname}:${port}`);
});
