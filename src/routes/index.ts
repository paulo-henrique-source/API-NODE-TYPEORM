import { Router } from 'express';
import avaliationRoutes from './avaliation';
import preferenceRoutes from './preference';
import storeRoutes from './store';
import userRoutes from './user';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello UNIFCV' }),
);

routes.use('/users', userRoutes);

routes.use('/store', storeRoutes);

routes.use('/avaliation', avaliationRoutes);

routes.use('/preference', preferenceRoutes);

export default routes;
