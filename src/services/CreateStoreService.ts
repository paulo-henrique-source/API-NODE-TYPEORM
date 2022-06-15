import IStoreRepository from '../repositories/IStoreRepository';
import StoreRepository from '../repositories/StoreRepository';
import Store from '../models/Store';

interface Request {
  name: string;
  cnpj_loja: string;
}

class CreateStoreService {
  private storeRepository: IStoreRepository;

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository;
  }

  public async execute({
    name,
    cnpj_loja,
  }: Request): Promise<Store | undefined> {
    const store = await this.storeRepository.create({
      name,
      cnpj_loja,
    });

    return store;
  }
}

export default CreateStoreService;
