const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const hostname = 'amidb.andromaverse.io'; 
const port = process.env.PORT || 80;

server.listen(port, hostname, () => {
  console.log(`JSON Server is running on http://${hostname}:${port}`);
});
