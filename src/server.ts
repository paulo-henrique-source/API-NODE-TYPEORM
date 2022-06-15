import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import { createConnection } from 'typeorm';

const app = express();

app.use(express.json());
app.use(routes);

createConnection().then(connection => {
  app.listen(3333);
});
