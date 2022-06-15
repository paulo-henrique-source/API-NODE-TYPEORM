import IAvaliationRepository from '../repositories/IAvaliationRepository';
import AvaliationRepository from '../repositories/AvaliationRepository';
import Avaliation from '../models/Avaliation';

interface Request {
  score: number;
  user_id: string;
  store_id: string;
}

class CreateAvaliationService {
  private avaliationRepository: IAvaliationRepository;

  constructor(avaliationRepository: AvaliationRepository) {
    this.avaliationRepository = avaliationRepository;
  }

  public async execute({
    score,
    store_id,
    user_id,
  }: Request): Promise<Avaliation | undefined> {
    const avaliation = await this.avaliationRepository.create({
      score,
      store_id,
      user_id,
    });

    return avaliation;
  }
}

export default CreateAvaliationService;
