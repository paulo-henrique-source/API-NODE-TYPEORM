import { Router } from 'express';
import AvaliationController from '../controllers/AvaliationControllers';

const avaliationRoutes = Router();
const avaliationController = new AvaliationController();

avaliationRoutes.post('/', avaliationController.create);
avaliationRoutes.get('/', avaliationController.index);
avaliationRoutes.put('/:id', avaliationController.update);
avaliationRoutes.delete('/:id', avaliationController.destroy);

export default avaliationRoutes;
