import IStoreRepository from '../repositories/IStoreRepository';
import AppError from '../error/AppError';

class DeleteStoreService {
  private storeRepository: IStoreRepository;

  constructor(storeRepository: IStoreRepository) {
    this.storeRepository = storeRepository;
  }

  public async execute(id: string): Promise<void> {
    const client = await this.storeRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found!', 400);
    }

    await this.storeRepository.delete(id);
  }
}

export default DeleteStoreService;
