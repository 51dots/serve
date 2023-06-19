const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const hostname = '50.116.40.90'; 
const port = process.env.PORT || 8080;

server.listen(port, hostname, () => {
  console.log(`JSON Server is running on http://${hostname}:${port}`);
});
