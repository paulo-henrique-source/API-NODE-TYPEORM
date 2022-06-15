import IAvaliationRepository from '../repositories/IAvaliationRepository';
import AvaliationRepository from '../repositories/AvaliationRepository';
import Preference from '../models/Preference';
import AppError from '../error/AppError';

interface IRequest {
  id: string;
  score: number;
  store_id: string;
  user_id: string;
}

class UpdateAvaliationService {
  private avaliationRepository: IAvaliationRepository;

  constructor(preferenceRepository: AvaliationRepository) {
    this.avaliationRepository = preferenceRepository;
  }

  public async execute({
    id,
    score,
    store_id,
    user_id,
  }: IRequest): Promise<Preference> {
    const client = await this.avaliationRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found!', 400);
    }

    client.store_id = store_id;
    client.user_id = user_id;
    client.score = score;

    await this.avaliationRepository.save(client);

    return client;
  }
}

export default UpdateAvaliationService;
