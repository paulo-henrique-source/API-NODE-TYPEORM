import IStoreRepository from '../repositories/IStoreRepository';
import StoreRepository from '../repositories/StoreRepository';
import Store from '../models/Store';
import AppError from '../error/AppError';

interface IRequest {
  id: string;
  name: string;
  cnpj_loja: string;
}

class UpdateStoreService {
  private storeRepository: IStoreRepository;

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository;
  }

  public async execute({ id, name, cnpj_loja }: IRequest): Promise<Store> {
    const client = await this.storeRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found!', 400);
    }

    client.name = name;
    client.cnpj_loja = cnpj_loja;

    await this.storeRepository.save(client);

    return client;
  }
}

export default UpdateStoreService;
