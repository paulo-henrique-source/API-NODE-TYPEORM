import { Repository, getRepository } from 'typeorm';
import Avaliation from '../models/Avaliation';
import IAvaliationRepository from './IAvaliationRepository';
import CreateAvaliationDTO from '../dtos/CreateAvaliationDTO';

class AvaliationRepository implements IAvaliationRepository {
  private ormRepository: Repository<Avaliation>;

  constructor() {
    this.ormRepository = getRepository(Avaliation);
  }

  public async findById(id: string): Promise<Avaliation | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }

  public async findAll(): Promise<Avaliation[]> {
    return this.ormRepository.find();
  }

  public async create({
    score,
    store_id,
    user_id,
  }: CreateAvaliationDTO): Promise<Avaliation> {
    const avaliation = this.ormRepository.create({
      score,
      store_id,
      user_id,
    });

    await this.ormRepository.save(avaliation);

    return avaliation;
  }

  public async save(avaliation: Avaliation): Promise<Avaliation> {
    return this.ormRepository.save(avaliation);
  }
}

export default AvaliationRepository;
