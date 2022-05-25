import 'reflect-metadata';
import './config/env';
import 'express-async-errors';
import cors from 'cors';
import { resolve } from 'path';

import express, { Request, Response, NextFunction, response } from 'express';
import './database';

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.json({
    message: 'Hello Code '
}))

app.listen(3333);