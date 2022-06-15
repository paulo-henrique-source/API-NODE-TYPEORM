import { Repository, getRepository } from 'typeorm';
import Store from '../models/Store';
import IStoreRepository from './IStoreRepository';
import CreateStoreDTO from '../dtos/CreateStoreDTO';

class StoreRepository implements IStoreRepository {
  private ormRepository: Repository<Store>;

  constructor() {
    this.ormRepository = getRepository(Store);
  }

  public async findById(id: string): Promise<Store | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async findAll(): Promise<Store[]> {
    return this.ormRepository.find();
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }

  public async create({ name, cnpj_loja }: CreateStoreDTO): Promise<Store> {
    const store = this.ormRepository.create({
      name,
      cnpj_loja,
    });

    await this.ormRepository.save(store);

    return store;
  }

  public async save(store: Store): Promise<Store> {
    return this.ormRepository.save(store);
  }
}

export default StoreRepository;
