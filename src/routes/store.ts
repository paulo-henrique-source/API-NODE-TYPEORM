import { Router } from 'express';
import StoreController from '../controllers/StoreControllers';

const storeRoutes = Router();
const storeController = new StoreController();

storeRoutes.post('/', storeController.create);
storeRoutes.get('/', storeController.index);
storeRoutes.put('/:id', storeController.update);
storeRoutes.delete('/:id', storeController.destroy);

export default storeRoutes;
