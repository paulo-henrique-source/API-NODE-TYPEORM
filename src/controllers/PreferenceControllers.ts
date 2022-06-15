import { Request, Response } from 'express';
import CreatePreferenceService from '../services/CreatePreferenceService';
import PreferenceRepository from '../repositories/PreferenceRepository';
import UpdatePreferenceService from '../services/UpdatePreferenceService';
import DeletePreferenceService from '../services/DeletePreferenceService';

class PreferenceController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { score, store_id, user_id } = request.body;

    const preferenceRespository = new PreferenceRepository();
    const createPreference = new CreatePreferenceService(preferenceRespository);

    const preference = await createPreference.execute({
      store_id,
      user_id,
    });

    return response.json(preference);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { score, store_id, user_id } = request.body;

    const preferenceRespository = new PreferenceRepository();
    const updatePreference = new UpdatePreferenceService(preferenceRespository);

    const user = await updatePreference.execute({
      id,
      store_id,
      user_id,
    });

    return response.json(user);
  }
  public async index(request: Request, response: Response): Promise<Response> {
    const preferenceRespository = new PreferenceRepository();

    const preference = await preferenceRespository.findAll();

    return response.json(preference);
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const userRespository = new PreferenceRepository();
    const destroyUser = new DeletePreferenceService(userRespository);

    await destroyUser.execute(id);

    return response.json({ message: 'Deletado com sucesso!' });
  }
}

export default PreferenceController;
