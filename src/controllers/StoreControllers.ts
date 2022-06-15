import { Request, Response } from 'express';
import CreateStoreService from '../services/CreateStoreService';
import StoreRepository from '../repositories/StoreRepository';
import UpdateStoreService from '../services/UpdateStoreService';
import DeleteStoreService from '../services/DeleteStoreService';

class StoreController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cnpj_loja } = request.body;

    const storeRespository = new StoreRepository();
    const createStore = new CreateStoreService(storeRespository);

    const store = await createStore.execute({
      name,
      cnpj_loja,
    });

    return response.json(store);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, cnpj_loja } = request.body;

    const userRespository = new StoreRepository();
    const updateUser = new UpdateStoreService(userRespository);

    const user = await updateUser.execute({
      id,
      name,
      cnpj_loja,
    });

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const storeRespository = new StoreRepository();

    const store = await storeRespository.findAll();

    return response.json(store);
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const userRespository = new StoreRepository();
    const destroyUser = new DeleteStoreService(userRespository);

    await destroyUser.execute(id);

    return response.json({ message: 'Deletado com sucesso!' });
  }
}

export default StoreController;
