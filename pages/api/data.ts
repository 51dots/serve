import jsonServer from 'json-server';
import { Request, Response } from 'express';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join(process.cwd(), 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const dataApiHandler = (req: Request, res: Response) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;

  } 
  server(req, res);
};

export default dataApiHandler;
