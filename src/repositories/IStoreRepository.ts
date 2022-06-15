import CreateStoreDTO from '../dtos/CreateStoreDTO';
import Store from '../models/Store';

export default interface IStoreRepository {
  findById(id: string): Promise<Store | undefined>;
  findAll(): Promise<Store[]>;
  create(CreateStoreDTO: CreateStoreDTO): Promise<Store | undefined>;
  save(user: Store): Promise<Store>;
  delete(id: string): Promise<void>;
}
