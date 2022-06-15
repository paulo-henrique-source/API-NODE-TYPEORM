import { Router } from 'express';
import PreferenceControllers from '../controllers/PreferenceControllers';

const preferenceRoutes = Router();
const preferenceController = new PreferenceControllers();

preferenceRoutes.post('/', preferenceController.create);
preferenceRoutes.get('/', preferenceController.index);
preferenceRoutes.put('/:id', preferenceController.update);
preferenceRoutes.delete('/:id', preferenceController.destroy);

export default preferenceRoutes;
