import { Request, Response } from 'express';
import CreateAvaliationService from '../services/CreateAvaliationService';
import AvaliationRepository from '../repositories/AvaliationRepository';
import UpdateAvaliationService from '../services/UpdateAvaliationService';
import DeleteAvaliationService from '../services/DeleteAvaliationService';

class AvaliationController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { score, store_id, user_id } = request.body;

    const avaliationRespository = new AvaliationRepository();
    const createAvaliation = new CreateAvaliationService(avaliationRespository);

    const avaliation = await createAvaliation.execute({
      score,
      store_id,
      user_id,
    });

    return response.json(avaliation);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { score, store_id, user_id } = request.body;

    const avaliationRespository = new AvaliationRepository();
    const updateAvaliation = new UpdateAvaliationService(avaliationRespository);

    const user = await updateAvaliation.execute({
      id,
      score,
      store_id,
      user_id,
    });

    return response.json(user);
  }
  public async getAll(request: Request, response: Response): Promise<Response> {
    const avaliationRespository = new AvaliationRepository();

    return response.json(avaliationRespository);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const avaliationRespository = new AvaliationRepository();

    const avaliation = await avaliationRespository.findAll();

    return response.json(avaliation);
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const userRespository = new AvaliationRepository();
    const destroyUser = new DeleteAvaliationService(userRespository);

    await destroyUser.execute(id);

    return response.json({ message: 'Deletado com sucesso!' });
  }
}

export default AvaliationController;
