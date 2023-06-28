const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

app.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});
