import IAvaliationRepository from '../repositories/IAvaliationRepository';
import AppError from '../error/AppError';

class DeleteAvaliationService {
  private avaliationRepository: IAvaliationRepository;

  constructor(avaliationRepository: IAvaliationRepository) {
    this.avaliationRepository = avaliationRepository;
  }

  public async execute(id: string): Promise<void> {
    const client = await this.avaliationRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found!', 400);
    }

    await this.avaliationRepository.delete(id);
  }
}

export default DeleteAvaliationService;
